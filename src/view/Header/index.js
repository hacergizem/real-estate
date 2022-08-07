import React from 'react'
import styles from './Header.module.css'
import SearchArea from '../../components/SearchArea'

function Header() {
    return (
        <div className="px-lg-3 px-0">
            <div className={styles.header}>
                <h1 className={styles.heading}>We help you find
                    <div className="fw-bolder">Property</div>
                </h1>
                <div className="d-lg-flex d-none"><SearchArea /></div>
            </div>
            <div className="d-lg-none d-flex mt-2"><SearchArea /></div>
        </div>
    )
}

export default Header