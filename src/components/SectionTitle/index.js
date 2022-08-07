import React from 'react'
import styles from './SectionTitle.module.css'

function SectionTitle({ text }) {
    return (
        <div className="mb-4 mt-5">
            <p className={styles.title}>{text}<span className={styles.box}></span></p>
        </div>
    )
}

export default SectionTitle