import React from 'react'
import styles from './SearchArea.module.css'
import Button from '../Button'

function SearchArea() {
    return (
        <div className={`${styles.container} p-lg-0 p-2`}>
            <div className={styles.header}>Portugal Property Search</div>
            <div className={`${styles.content} d-flex flex-lg-row flex-column align-items-center justify-content-between p-5 py-lg-0`}>
                <input className={`${styles.searchInput} mb-3`} placeholder="Search in Portuga"></input>
                <Button title="Search" theme="secondaryStyle"></Button>
            </div>
        </div>
    )
}

export default SearchArea