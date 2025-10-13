import React, { useRef } from "react";
import styles from "@/styles/Slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Slider() {
  const swiperRef = useRef(null);

  return (
    <div className={styles.slider_wrapper}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        loop={true}
        modules={[Navigation, EffectFade]}
        effect="fade"
        speed={1000}
        className={styles.swiper}
        rtl={true}
      >
        <SwiperSlide
          className={styles.swiper_slide}
          style={{ backgroundImage: 'url("/images/carousel-1.jpg")' }}
        >
          <div className={`${styles.slider_caption} ${styles.animate}`}>
            <h2 className={styles.sub_title}>جایی برای آرامش و عطر قهوه</h2>
            <h1 className={styles.main_title}>کافه‌چیل</h1>
            <h2 className={styles.sub_title}>تجربه‌ای متفاوت از طعم و فضا</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className={styles.swiper_slide}
          style={{ backgroundImage: 'url("/images/carousel-2.jpg")' }}
        >
          <div className={`${styles.slider_caption} ${styles.animate}`}>
            <h2 className={styles.sub_title}>از هر فنجان، یک داستان تازه</h2>
            <h1 className={styles.main_title}>Coffee Time</h1>
            <h2 className={styles.sub_title}>لذت لحظه‌های دنج</h2>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* دکمه‌های سفارشی */}
      <button
        className={styles.swiper_custom_prev}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <FiChevronLeft size={30} />
      </button>
      <button
        className={styles.swiper_custom_next}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <FiChevronRight size={30} />
      </button>
    </div>
  );
}
