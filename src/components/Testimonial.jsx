import React from 'react'
import { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/autoplay/autoplay.min.css'
import TESTIMONIAL1 from "../assets/images/20220920_091731.jpg"
import TESTIMONIAL2 from "../assets/images/20220920_211841.jpg"
import TESTIMONIAL3 from "../assets/images/received_3273393542980414.jpeg"
import TESTIMONIAL4 from "../assets/images/received_632340134900365.jpeg"
import TESTIMONIAL5 from "../assets/images/received_445340240897373.jpeg"
import TESTIMONIAL6 from "../assets/images/20220920_091554 (2).png"
import "./testimonial.css"
import {BsFillSuitHeartFill} from "react-icons/bs"

const Testimonial = () => {
  return (
    <div>
      <h3 className="testimonial__title">Feedback របស់ភ្ញៀវ <BsFillSuitHeartFill /></h3>
      <Swiper 
        className="mySwiper image__container"
        spaceBetween={50}
        slidesPerView={"auto"}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="image__wrapper"><img src={TESTIMONIAL6} alt="" /></SwiperSlide>
        <SwiperSlide className="image__wrapper"><img src={TESTIMONIAL1} alt="" /></SwiperSlide>
        <SwiperSlide className="image__wrapper"><img src={TESTIMONIAL2} alt="" /></SwiperSlide>
        <SwiperSlide className="image__wrapper"><img src={TESTIMONIAL3} alt="" /></SwiperSlide>
        <SwiperSlide className="image__wrapper"><img src={TESTIMONIAL4} alt="" /></SwiperSlide>
        <SwiperSlide className="image__wrapper"><img src={TESTIMONIAL5} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial