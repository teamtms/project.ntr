import { Container } from '@/components/Container'
import { WpImage } from '@/components/Wp/WpImage'
import { wordpress } from '@/services/wordpress'
import { Metadata } from 'next'
import { Body1, Body3, Card, Title1, Title2, Title4 } from 'pixieui/components'
import styles from './page.module.scss'
import { Post } from '@/components/Post/Post.component'
import { Building } from '@/components/blocks/Building'

export const metadata: Metadata = {
  title: 'ТМС',
  description: 'Такое место, что даже слово сразу подобрать не получится',
  openGraph: {
    url: 'https://thetms.ru'
  }
}

export default async function Home() {
  const [{ acf }] = await wordpress.getPageBySlug('tms')
  const { title, description, ip, pluses, stats, moments, orgs } = acf

  const posts = await wordpress.getPosts(1, 3)

  return (
    <Container>
      {acf && <>
        <Title1>{title}</Title1>
        <Body3 className={styles.description}>{description}</Body3>
        <Card appearance="solid" className={styles.ip}>{ip}</Card>

        <Title2 className={styles.title2}>Плюсы <del>их тут нет</del></Title2>
        <ul>
          {pluses.split('\n').map((item) => <li key={item}>{item}</li>)}
        </ul>

        <Title2 className={styles.title2}>Статистика</Title2>
        <div className={styles.stats}>
          {stats.split('\n').map((item) =>
            <div key={item} className={styles.statsItem}>
              <Title4>{item.split(':')[0]}</Title4>
              <Body1>{item.split(':')[1]}</Body1>
            </div>
          )}
        </div>

        <Title2 className={styles.title2}>Последние новости</Title2>
        <div className={styles.latestNews}>
          {posts.map((item) => <Post {...item} key={item.id} />)}
        </div>

        <Title2 className={styles.title2}>Моменты</Title2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 mt-4">
          {moments.length && moments.map((item) => <WpImage className="square" key={item} imageId={item} />)}
        </div>

        <Title2 className={styles.title2}>Лучшие постройки</Title2>
        <div className={styles.buildings}>
          {orgs.map((org) => <Building key={org} orgId={org} />)}
        </div>
      </>}
    </Container>
  )
}
