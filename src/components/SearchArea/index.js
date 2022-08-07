import React from 'react'
import styles from './SearchArea.module.css'
import Button from '../Button'

function SearchArea() {
    return (
        <div className={`${styles.container} m-2 m-lg-0`}>
            <div className={styles.header}>Portugal Property Search</div>
            <div className={`${styles.content} d-flex flex-lg-row flex-column align-items-center justify-content-between p-5 py-lg-0`}>
                <input className={`${styles.searchInput} mb-3`} placeholder="Search in Portuga"></input>
                <select className={`${styles.select}`}>
                    <option value="0">Apartment</option>
                    <option value="1">Suit</option>
                </select>
                <Button title="Search" theme="secondaryStyle"></Button>
            </div>
        </div>
    )
}

export default SearchArea