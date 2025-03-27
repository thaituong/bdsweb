/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-boolean-value */
// eslint-disable-next-line react/no-array-index-key
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation, Pagination, Scrollbar, A11y, Autoplay,
} from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Testimonial({ data }) {
  return (
    <section className="container mx-auto">
      <Fade direction="up">
        <h1 className="text-5xl text-theme-blue text-center font-bold">Khách hàng nói gì</h1>
      </Fade>
      <Fade direction="up" delay={500}>
        <p className="font-light text-lg text-gray-400 text-center mb-3 sm:mb-3 xl:mb-4">
        Những điều họ chia sẻ về chúng tôi.
        </p>
      </Fade>
      {/* eslint-disable-next-line react/jsx-max-props-per-line */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        className="mySwiper"
        loop={true}
        navigation={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col md:flex-row items-center bg-gray-100 px-8 py-6 rounded-md shadow-lg max-w-6xl mx-auto relative">
              {/* Phần bên trái: Hình minh họa */}
              <div className="w-full md:w-1/3 flex justify-center items-center p-8">
                  <img
                    src={item.imageCompanyUrl}
                    alt="Illustration"
                    className="relative w-full h-auto"
                    style={{ aspectRatio: '4 / 3', objectFit: 'cover' }}
                  />
              </div>

              {/* Phần bên phải: Nội dung */}
              <div className="w-full md:w-2/3 mt-6 md:mt-0">
                {/* Logo */}
                <div className="flex justify-center mb-4">
                  <img
                    src={item.imageUrl}
                    alt="Logo"
                    className="w-24 h-20 object-contain"
                  />
                </div>

                {/* Nội dung chính */}
                <p className="text-gray-800 text-base font-light leading-relaxed text-left">
                  {item.testimoni}
                </p>

                {/* Thông tin khách hàng */}
                <div className="mt-6 text-center">
                  <p className="text-gray-900 font-semibold">{item.name}</p>
                  <p className="text-gray-600">{item.company}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
