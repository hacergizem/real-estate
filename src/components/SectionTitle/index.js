import React from 'react'
import styles from './SectionTitle.module.css'

function SectionTitle({ text, textTheme = "textPrimary", box = "boxPrimary" }) {
    return (
        <div>
            <p className={`${styles.title} ${styles[textTheme]}`}>{text}<span className={`${styles.box} ${styles[box]}`}></span></p>
        </div >
    )
}

export default SectionTitle