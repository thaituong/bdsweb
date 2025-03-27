/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Button from '../elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <p className="text-custom-blue text-4xl font-medium" style={{ lineHeight: "0.5" }}>
        DubaiLand
        <br />
        <span className="text-gray-500 text-lg tracking-[0.2em]">Building Dreams</span>
      </p>
      {/* <img 
        src={LogoNewTech}
        alt="NewTech Technology" 
        style={{ width: '200px' }} 
      /> */}
    </Button>
  );
}
