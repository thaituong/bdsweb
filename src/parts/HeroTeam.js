/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesomeIcon
import { faCode, faDatabase, faLaptopCode, faMobileAlt } from '@fortawesome/free-solid-svg-icons'; // Thêm các biểu tượng
import ChuyenNghiep from 'assets/images/Intro/ChuyenNghiep.png';
import HopTac from 'assets/images/Intro/HopTac.png';
import NhanVan from 'assets/images/Intro/NhanVan.png';
import PVTT from 'assets/images/Intro/PVTT.png';
import TrungThuc from 'assets/images/Intro/TrungThuc.png';

export default function HeroTeam() {
  return (
    <section className="hero sm:items-center lg:items-start sm:flex-row">
      <div className="font-sans text-gray-700">
      {/* Header */}
      <div className="py-12 text-left">
        <h1 className="text-3xl font-bold">Giải pháp công nghệ toàn diện</h1>
        <p className="mt-4">
          Newtech là công ty chuyên cung cấp dịch vụ lập trình máy tính chuyên nghiệp. 
          Chúng tôi cam kết mang đến
          cho khách hàng những giải pháp công nghệ ưu việt, hiệu quả và phù hợp với nhu cầu.
        </p>
        <a 
          href="/discuss-project"
          className="flex flex-grow-0 w-36 h-12 sm:w-40 sm:h-14 lg:w-44 lg:h-16 xl:w-36 xl:h-12 text-theme-purple px-5 border border-theme-purple items-center mt-14 rounded-lg justify-center transition duration-300 hover:bg-theme-purple hover:text-white"
        >
          Liên hệ ngay
        </a>
      </div>

      <div className="font-sans text-gray-700">
      {/* Header */}
      <div className="text-left">
        <h1 className="text-3xl font-bold">Về Newtech</h1>
      </div>
      </div>

      <div className="font-sans text-gray-700">
      {/* Header */}
      <div className="py-12 text-left">
        <h1 className="text-3xl font-bold">Dịch vụ của chúng tôi</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="text-center">
            <FontAwesomeIcon icon={faCode} className="text-gray-500 text-3xl" />
            <h3 className="font-semibold text-lg">Phát triển phần mềm</h3>
            <p className="mt-2">
              Thiết kế và phát triển phần mềm theo yêu cầu, đa dạng nền tảng và công nghệ.
            </p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faDatabase} className="text-green-500 text-3xl" />
            <h3 className="font-semibold text-lg">Quản trị cơ sở dữ liệu</h3>
            <p className="mt-2">
              Xây dựng, quản trị và tối ưu hóa cơ sở dữ liệu hiệu quả, đảm bảo bảo mật.
            </p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faLaptopCode} className="text-blue-500 text-3xl" />
            <h3 className="font-semibold text-lg">Lập trình ứng dụng web</h3>
            <p className="mt-2">
              Thiết kế và phát triển ứng dụng web chuyên nghiệp, thân thiện với người dùng.
            </p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon icon={faMobileAlt} className="text-yellow-500 text-3xl" />
            <h3 className="font-semibold text-lg">Phát triển ứng dụng di động</h3>
            <p className="mt-2">
              Phát triển ứng dụng di động đa nền tảng, đáp ứng nhu cầu ngày càng tăng 
              của thị trường.
            </p>
          </div>
        </div>
      </div>
      </div>

      {/* Giá trị cốt lõi */}
      <section className="py-16 px-8">
        <h2 className="text-2xl font-bold text-center">Giá trị cốt lõi</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mt-8">
          <div className="text-center">
            <img src={TrungThuc} alt="Tính cách trung thực" className="mx-auto" />
            <p className="mt-4 font-semibold">Tính cách trung thực</p>
          </div>
          <div className="text-center">
            <img src={ChuyenNghiep} alt="Xử lý chuyên nghiệp" className="mx-auto" />
            <p className="mt-4 font-semibold">Xử lý chuyên nghiệp</p>
          </div>
          <div className="text-center">
            <img src={NhanVan} alt="Hành xử nhân văn" className="mx-auto" />
            <p className="mt-4 font-semibold">Hành xử nhân văn</p>
          </div>
          <div className="text-center">
            <img src={PVTT} alt="Phục vụ tận tâm" className="mx-auto" />
            <p className="mt-4 font-semibold">Phục vụ tận tâm</p>
          </div>
          <div className="text-center">
            <img src={HopTac} alt="Tinh thần hợp tác" className="mx-auto" />
            <p className="mt-4 font-semibold">Tinh thần hợp tác</p>
          </div>
        </div>
      </section>
    </div>
    </section>
  );
}
