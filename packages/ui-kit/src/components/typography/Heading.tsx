import styles from '@/assets/styles/Heading.module.css'

import { ReactNode } from 'react'

export default function Heading({ children }: { children: ReactNode }) {
    return <h1 className={styles.heading}>{children}</h1>
}
