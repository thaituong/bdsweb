/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className="bg-gray-50 border-t border-gray-200 p-6 pt-0 lg:p-0 lg:pb-6">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row sm:gap-8 gap-4 mt-8 justify-center">
          <div className="w-full sm:w-1/3 sm:ml-16 sm:mr-8 space-y-2">
            <p className="w-full text-md font-bold" style={{ color: '#44ABB6' }}>
              THÔNG TIN VỀ NEWTECH
            </p>
            <p className="w-full text-md font-light">
              Về chúng tôi
              <span className="block">Liên Hệ</span>
              <span className="block mt-2 font-bold">
                Địa chỉ
              </span>
              87A Nguyễn Thế Truyện, Phường Tân Sơn Nhì, Quận Tân Phú, 
              Thành phố Hồ Chí Minh, Việt Nam
            </p>
          </div>
          <div className="w-full sm:w-1/3 sm:mt-0 sm:ml-0 sm:mr-5 space-y-2">
            <p className="w-full text-md font-bold" style={{ color: '#44ABB6' }}>
              SẢN PHẨM - DỊCH VỤ
            </p>
            <p className="w-full text-md font-light">
              Hệ thống xác thực tập trung SSO
              <span className="block mt-2">
                <FontAwesomeIcon icon={faCalendar} className="text-gray-500 text-xl mr-2" />
                Aug 8, 2024
              </span>
            </p>
          </div>
          <div className="w-full sm:w-1/3 sm:ml-0 sm:mt-0 space-y-2">
            <p className="w-full text-md font-bold" style={{ color: '#000000' }}>
              Di động
            </p>
            <p className="w-full text-md font-bold" style={{ color: '#44ABB6' }}>
              0988000092
            </p>
            <p className="w-full text-md font-bold" style={{ color: '#000000' }}>
              Email
            </p>
            <p className="w-full text-md font-bold" style={{ color: '#44ABB6' }}>
              info@nst.com.vn
            </p>
          </div>
        </div>
      </div>
    </div>
  );  
}
