import React from 'react'
import styles from './WhySection.module.css'

import SectionTitle from '../../components/SectionTitle';
import Button from '../../components/Button'

import home from '../../assets/home.svg'
import calender from '../../assets/calender.svg'
import price from '../../assets/price.svg'
import furniture from '../../assets/furniture.svg'

function WhySection() {
    return (
        <div className="d-flex justify-content-end pt-lg-5 p-0">
            <div className={`${styles.container} col-lg-11 col-12 mt-lg-5 mt-0`}>
                <div className="d-flex flex-column align-items-lg-center align-items-start col-lg-10 col-12">
                    <div className="mt-lg-3 mb-lg-3 mt-4 mb-2">
                        <SectionTitle text="Why Get Properties?" />
                    </div>
                    <div className="col-lg-9 col-12 px-lg-0 px-4">
                        <p>We help our clients make a property investment that meets their lifestyle expectations in Portugal, Greece, Spain, and Turkey. We offer professional advisory services for property selection and acquisition, management, and rental services. With a unique approach that includes market understanding and location advisory, we focus on delivering a tailored-made and efficient service for our international clients.</p>
                        <p>With local offices in Lisbon, Athens, Istanbul, and London and various international associations, Get Properties will be on your side throughout the whole property investment journey.</p>
                    </div>
                    <div className="d-flex justify-content-center col-12">
                        <div className="col-10 d-flex flex-lg-row flex-column align-items-lg-center align-items-start">
                            <div className="mb-lg-0 mb-4">
                                <img src={calender} alt="Home"></img>
                            </div>
                            <div className={styles.line}></div>
                            <div className="mb-lg-0 mb-4">
                                <img src={home} alt="Home"></img>
                            </div>
                            <div className={styles.line}></div>
                            <div className="mb-lg-0 mb-4">
                                <img src={price} alt="Price"></img>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center col-lg-11 col-12">
                        <div className={`${styles.imageContainer} col-lg-12 col-11 my-5`}>
                            <div className="d-flex flex-column align-items-center mt-lg-0 mt-5">
                                <div className={styles.whiteLine}></div>
                                <img className={styles.icon} src={furniture} alt="Furniture Icon"></img>
                            </div>
                            <SectionTitle text="Get Concierge" box="boxSecondary" textTheme="textSecondary" />
                            <p className={`${styles.text} p-0 m-0 mt-lg-4 mt-1 col-lg-12 col-10`}>Get Support for Property Management and Rentals</p>
                            <p className={`${styles.subText} text-white p-0 m-0 col-lg-5 col-10 text-center mb-3`}>Learn how Concierge can help sell your home faster and for a higher price.</p>
                            <Button title="Get Concierge" theme="primaryStyle"></Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhySection