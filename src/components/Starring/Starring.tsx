'use client'

import { useEffect, useState } from 'react'
import styles from './Starring.module.scss'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const randLetter = () => 1 + Math.floor(Math.random() * 2) === 1 ? 1 : -1

export const Starring = () => {
	const [firstText, setFirstText] = useState(<></>)
	const [secondText, setSecondText] = useState(<></>)
	const [thirdText, setThirdText] = useState(<></>)
	const [fourthText, setFourthText] = useState(<></>)

	const router = useRouter()

	useEffect(() => {

		setTimeout(() => {
			setFirstText(<>
				<video loop autoPlay muted className={clsx(styles.video, styles.first)} src="/large.mp4"></video>
				<div className={clsx(styles.label, styles.first)}>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>f</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>a</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>k</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>e</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>m</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>1</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>n</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>e</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>r</span>
					<span className={styles.space} style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}></span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>E</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>u</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>e</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>o</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>e</span>
				</div>
			</>)
		}, 3000)

		setTimeout(() => {
			setSecondText(<>
				<video loop autoPlay muted className={clsx(styles.video, styles.first)} src="/large (1).mp4"></video><div className={clsx(styles.label, styles.second)}>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>k</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>u</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>b</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>1</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>u</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>s</span>
					<span className={styles.space} style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}></span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>K</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>u</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>b</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>e</span>
				</div></>)
		}, 6000)

		setTimeout(() => {
			setThirdText(<>
				<video loop autoPlay muted className={clsx(styles.video, styles.first)} src="/large (2).mp4"></video>
				<div className={clsx(styles.label, styles.third)}>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>P</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>l</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>a</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>y</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>e</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>r</span>
					<span className={styles.space} style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}> </span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>F</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>r</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>o</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>g</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>a</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>y</span>
				</div></>)
		}, 9000)

		setTimeout(() => {
			setFourthText(<>
				<video loop autoPlay muted className={clsx(styles.video, styles.fourth)} src="/large (3).mp4"></video>
				<div className={clsx(styles.label, styles.third)}>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>c</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>r</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>e</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>a</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>t</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>e</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>d</span>
					<span className={styles.space} style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}> </span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>b</span>
					<span style={{ transform: `translateX(${randLetter() * Math.floor(Math.random() * 75)}px)` }}>y</span>
					<br />
					<span className={styles.lastText}>kub1us Kube</span>
				</div></>)
		}, 12000)

		setTimeout(() => {
			router.push('/home')
		}, 15000)

	}, [router])


	return (
		<div className="fixed top-0 left-0 w-full h-full text-5xl bg-black text-white">
			<Image className={styles.logoPlanet} src="/logo-planet.png" alt="" width={200} height={200} />
			<Image className={styles.logo} src="/logo.png" alt="" width={200} height={200} />

			{firstText}
			{secondText}
			{thirdText}
			{fourthText}
		</div>
	)
}