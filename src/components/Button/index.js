import React from 'react'
import styles from './Button.module.css'

function Button({ title, theme = 'primaryStyle', dimension }) {
    return (
        <button className={`${styles.container} ${styles[theme]} ${styles[dimension]}`}>{title}</button>
    )
}

export default Button