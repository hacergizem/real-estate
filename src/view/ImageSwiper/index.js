import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import styles from './ImageSwiper.module.css'

function ImageSwiper() {
    return (
        <div className={`${styles.container} mt-5`}>
            <div className="container">
                <Swiper
                    className={styles.swiper}
                    spaceBetween={50}
                    slidesPerView={1}>
                    <SwiperSlide className={styles.swiperContent}>
                        <p>Your New Home</p>
                        <p>in Lisbon</p>
                        <small>Find the best real estate opportunities</small>
                    </SwiperSlide>
                    <SwiperSlide className={styles.swiperContent}>
                        <p>Explore</p>
                        <p>More</p>
                        <small>Find the best real estate opportunities</small>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default ImageSwiper;
