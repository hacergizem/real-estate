import React from 'react';
import OwlCarousel from "react-owl-carousel";

import img1 from '../../assets/toppic1.png'
import img2 from '../../assets/toppic2.png'
import img3 from '../../assets/toppic3.png'

import Button from '../../components/Button'
import SectionTitle from '../../components/SectionTitle'

import styles from './TopPicks.module.css'

function TopPicks() {

    const options = {
        loop: true,
        autoWidth: false,
        margin: 30,
        dots: false,
        responsive: {
            0: {
                margin: 5,
                stagePadding: 30,
                items: 1,
            },
            400: {
                items: 1,
            },
            768: {
                margin: 5,
                autoWidth: true,
                stagePadding: 40,
                items: 1,
            },
            1000: {
                stagePadding: 200,
                items: 2,
            }
        },
    };

    return (
        <>
            <SectionTitle text="Our Top Pics" />
            <div className="d-flex flex-row justify-content-end mb-5" >
                <div className="col-lg-11 col-md-10 col-12 p-lg-0">
                    <OwlCarousel className="owl-theme" {...options}>
                        <div className={styles.imageContainer}>
                            <img alt="Owl Item" className={styles.image} src={img1} />
                            <div className={styles.descContainer}>
                                <p>Barcelona, Spain</p>
                                <p>266 Libardade</p>
                                <p><small>Starting from - €1,450,000</small></p>
                            </div>
                            <div className={styles.container}>
                                <p className={styles.descText}>These ultra sleek and contemporary new villas are situated on a seafront cliff top with breath-taking views over the ocean and the natural landscape surrounding them. </p>
                                <Button title="Get In" theme="thirdStyle" />
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img alt="Owl Item" className={styles.image} src={img2} />
                            <div className={styles.descContainer}>
                                <p>Barcelona, Spain</p>
                                <p>266 Libardade</p>
                                <p><small>Starting from - €1,450,000</small></p>
                            </div>
                            <div className={styles.container}>
                                <p className={styles.descText}>These ultra sleek and contemporary new villas are situated on a seafront cliff top with breath-taking views over the ocean and the natural landscape surrounding them. </p>
                                <Button title="Get In" theme="thirdStyle" />
                            </div>
                        </div>
                        <div className={styles.imageContainer}>
                            <img alt="Owl Item" className={styles.image} src={img3} />
                            <div className={styles.descContainer}>
                                <p>Barcelona, Spain</p>
                                <p>266 Libardade</p>
                                <p><small>Starting from - €1,450,000</small></p>
                            </div>
                            <div className={styles.container}>
                                <p className={styles.descText}>These ultra sleek and contemporary new villas are situated on a seafront cliff top with breath-taking views over the ocean and the natural landscape surrounding them. </p>
                                <Button title="Get In" theme="thirdStyle" />
                            </div>
                        </div>
                    </OwlCarousel>
                </div>

            </div>
        </>
    )
}

export default TopPicks