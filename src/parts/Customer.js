/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */

import React from 'react';

import { Fade } from 'react-awesome-reveal';

export default function Customer({ data }) {
  return (
    <section className="container mx-auto flex flex-col items-center mt-20">
      <Fade direction="right" triggerOnce>
        <h1 className="text-5xl text-theme-blue text-center font-bold">Khách hàng</h1>
      </Fade>

    <div className="flex flex-wrap justify-center gap-6 p-6">
      {data.map((item) => (
        <div
          className="flex items-center justify-center w-40 h-20 bg-white rounded-lg shadow-md p-2"
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className="object-contain h-16"
          />
        </div>
      ))}
    </div>
    </section>
    
  );
}
