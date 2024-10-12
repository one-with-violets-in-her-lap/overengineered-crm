import style from '@/assets/styles/Button.module.css'

import { ReactNode } from 'react'

export default function Button({ children }: { children: ReactNode }) {
    return <button className={style.button}>{children}</button>
}
