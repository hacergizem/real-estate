import React from 'react'
import styles from './WhySection.module.css'

import SectionTitle from '../../components/SectionTitle';

import home from '../../assets/home.svg'
import calender from '../../assets/calender.svg'
import price from '../../assets/price.svg'

function WhySection() {
    return (
        <div className="d-flex justify-content-end pt-5">
            <div className={`${styles.container} col-lg-11 col-12 mt-5`}>
                <div className="d-flex flex-column align-items-center col-lg-10 col-12">
                    <SectionTitle text="Why Get Properties?" />
                    <div className="col-lg-9 col-12 px-lg-0 px-4">
                        <p>We help our clients make a property investment that meets their lifestyle expectations in Portugal, Greece, Spain, and Turkey. We offer professional advisory services for property selection and acquisition, management, and rental services. With a unique approach that includes market understanding and location advisory, we focus on delivering a tailored-made and efficient service for our international clients.</p>
                        <p>With local offices in Lisbon, Athens, Istanbul, and London and various international associations, Get Properties will be on your side throughout the whole property investment journey.</p>
                    </div>
                    <div className="d-flex flex-lg-row flex-column align-items-center justify-content-between col-10 mt-5">
                        <img src={calender} alt="Calendar"></img>
                        <div className={styles.line}></div>
                        <img src={home} alt="Home"></img>
                        <div className={styles.line}></div>
                        <img src={price} alt="Price"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhySection