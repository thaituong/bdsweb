/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { Fade } from 'react-awesome-reveal';
import { Transition } from '@headlessui/react';
import { useLocation } from 'react-router-dom';

import Button from '../elements/Button';
import BrandIcon from './BrandIcon';

export default function Header() {
  const [isCollapse, setIsCollapse] = useState(false);
  const location = useLocation();
  const path = location.pathname;

  return (
    <header className="header">
      <div className="flex justify-between px-4 lg:px-0">
        <BrandIcon />

        <button className="block text-theme-blue lg:hidden focus:outline-none" onClick={() => setIsCollapse(!isCollapse)}>
          <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path className={`${isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            <path className={`${!isCollapse ? 'hidden' : 'block'}`} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <ul className="hidden text-theme-blue tracking-widest items-center lg:flex flex-row mt-0">
        <li>
          <Button
            className={`${path === '/' ? 'active-link' : ''} font-medium text-base px-5 no-underline hover:underline`}
            type="link"
            href="/"
            style={{ paddingLeft: "0" }}
          >
            Trang chủ
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/team' ? 'active-link' : ''} font-medium text-base px-5 no-underline hover:underline`}
            type="link"
            href="/team"
            style={{ paddingLeft: "0" }}
          >
            Giới thiệu
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/project' ? 'active-link' : ''} font-medium text-base px-5 no-underline hover:underline`}
            type="link"
            href="/project"
            style={{ paddingLeft: "0" }}
          >
            Sản phẩm
          </Button>
        </li>
        {/* <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/customer' ? 'active-link' : ''} font-medium text-base px-5 no-underline hover:underline`}
            type="link"
            // href="/customer"
            style={{ paddingLeft: "0" }}
          >
            Khách Hàng
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/service' ? 'active-link' : ''} font-medium text-base px-5 no-underline hover:underline`}
            type="link"
            // href="/service"
            style={{ paddingLeft: "0" }}
          >
            Dịch Vụ
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/new' ? 'active-link' : ''} font-medium text-base px-5 no-underline hover:underline`}
            type="link"
            // href="/new"
            style={{ paddingLeft: "0" }}
          >
            Tin Tức
          </Button>
        </li>
        <li className="py-2 lg:py-0">
          <Button
            className={`${path === '/job' ? 'active-link' : ''} font-medium text-base px-5 no-underline hover:underline`}
            type="link"
            // href="/job"
            style={{ paddingLeft: "0" }}
          >
            Tuyển Dụng
          </Button>
        </li> */
        <li>
          <Button
            className="font-medium text-base mx-auto ml-3 px-6 py-2 bg-theme-purple text-white rounded-lg hover:bg-dark-theme-purple border-purple-800 transition duration-200"
            type="link"
            href="/discuss-project"
            style={{ paddingLeft: "none" }}
          >
            Liên hệ
          </Button>
        </li> 
        }
      </ul>

      <Transition
        show={isCollapse}
        enter="transition-opacity duration-400"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="transition duration-300 ease-in data-[closed]:opacity-0">

          {/* <Fade> */}
          <ul className="z-50 flex flex-col text-theme-blue tracking-widest my-6 absolute bg-white w-full border-b-2 border-gray-300 lg:hidden">
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/"
              >
                Trang chủ
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/team' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/team"
              >
                Giới thiệu
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/project' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/project"
              >
                Sản phẩm
              </Button>
            </li>
            {/* <li className="py-2 bg-white">
              <Button
                className={`${path === '/project' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/project"
              >
                Khách Hàng
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/project' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/project"
              >
                Dịch Vụ
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/project' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/project"
              >
                Tin Tức
              </Button>
            </li>
            <li className="py-2 bg-white">
              <Button
                className={`${path === '/project' ? 'active-link' : ''} font-medium px-10 no-underline hover:underline`}
                type="link"
                href="/project"
              >
                Tuyển Dụng
              </Button>
            </li> */}
            <li className="mx-auto my-9 bg-white">
              <Button
                className="font-bold mx-auto px-5 py-2 bg-theme-purple text-white rounded-lg hover:bg-dark-theme-purple border-purple-800 transition duration-200"
                type="link"
                href="/discuss-project"
              >
                Liên hệ
              </Button>
            </li>
          </ul>
          {/* </Fade> */}
        </div>
      </Transition>
    </header>
  );
}
