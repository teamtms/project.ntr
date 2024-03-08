import type { HTMLAttributes } from 'react'
import styles from './Eval.module.scss'

const Eval = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div className={`${styles.eval} ${className}`} {...props}></div>
	)
}

export default Eval
