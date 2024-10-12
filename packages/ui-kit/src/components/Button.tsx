import style from '@/assets/styles/Button.module.css'

import { ButtonHTMLAttributes, ReactNode } from 'react'

export default function Button(
    props: {
        children: ReactNode
    } & ButtonHTMLAttributes<HTMLButtonElement>,
) {
    return (
        <button {...props} className={`${style.button} ${props.className}`}>
            {props.children}
        </button>
    )
}
