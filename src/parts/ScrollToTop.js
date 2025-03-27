/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import Button from '../elements/Button'; 

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Lắng nghe sự kiện cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true); // Hiện nút khi cuộn xuống hơn 200px
      } else {
        setIsVisible(false); // Ẩn nút khi cuộn lên trên 200px
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cuộn trang về đầu khi nhấn nút
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Nút Scroll To Top */}
      {isVisible && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 1000,
          }}
        >
          <Button
            type="button"
            onClick={scrollToTop}
            className="bg-theme-blue text-white rounded-full p-4 shadow-lg transition duration-300 hover:bg-theme-purple w-12 h-12 flex items-center justify-center"
          >
            <FontAwesomeIcon icon={faArrowUp} className="text-yellow-500 text-2xl" />
          </Button>
        </div>
      )}
    </>
  );
}
