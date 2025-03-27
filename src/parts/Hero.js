/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";

import { Fade } from "react-awesome-reveal";

import Button from "../elements/Button";

import BuildWebsite from "../assets/images/hero/NewTechBR.gif";

export default function Hero() {
  return (
    <section className="hero">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2" style={{ marginTop: "4rem" }}>
        <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5" style={{ fontFamily: "system-ui", fontSize: "49px" }}>
          Phát triển doanh nghiệp<br />
          cùng chúng tôi
        </h1>

        <p className="font-light text-xl text-gray-400 leading-relaxed mb-16" style={{ fontFamily: "system-ui" }}>
          Chúng tôi cung cấp đội ngũ lập trình viên xuất sắc và công nghệ hiện đại 
          để giúp doanh nghiệp của bạn phát triển.
        </p>
        <Fade direction="up" delay={500} triggerOnce>
          <Button
            href="/project"
            type="link"
            className="flex w-71 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200"
            style={{ paddingRight: "1.5rem" }}
          >
            Khám phá ngay
            <svg
              className="ml-2 w-7 h-7 text-white animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </Fade>
      </div>
      <div className="flex md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2">
        <Fade direction="up" triggerOnce>
          <img className="" src={BuildWebsite} alt="Build Website" />
        </Fade>
      </div>
    </section>
  );
}
