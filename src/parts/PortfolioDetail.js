/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import Fade from 'react-awesome-reveal';

import NotFound from 'assets/images/NotFound.png';

import Button from 'elements/Button';

export default function PortfolioDetail({ data }) {
  if (data === null) {
    return (
      <section className="container mx-auto">
        <Fade bottom triggerOnce>
          <div className="flex flex-col w-full justify-center">
            <div className="flex w-full justify-center">
              <img src={NotFound} alt="Not Found" className="sm:w-3/4 xl:w-5/12 mt-5" />
            </div>
            <h1 className="text-theme-blue text-2xl text-center mt-5">
              Project Not Found
            </h1>
            <div className="flex justify-center">
              <Button href="/project" type="link" className="flex w-30 h-10 px-5 mt-5 bg-theme-blue text-white items-center rounded transform transition duration-500 hover:bg-gray-900">
                Go Back
              </Button>
            </div>
          </div>
        </Fade>
      </section>
    );
  }

  return (
    <section className="container mx-auto">
      <Fade bottom>
        <Button type="link" href="/project" className="flex w-40 h-8 text-lg items-center ml-6 sm:ml-20 mt-8 font-light text-gray-400 hover:underline">
          <svg className="w-5 h-5 text-gray-400 mr-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Xem Tất Cả
        </Button>
      </Fade>

      {
        data.map((item) => (
          <div className="flex flex-col mt-8 justify-center">
            <Fade bottom triggerOnce>
              <h1 className="text-5xl text-theme-blue text-center font-bold">{item.title}</h1>

              <p className="font-light text-xl text-gray-400 text-center mb-10">
                {item.type}
              </p>
            </Fade>

            <Fade bottom delay={300 * 1} triggerOnce>
              <div className="flex justify-center xl:mb-6">
                <img src={item.imageUrl} alt="Project" className="flex w-4/5 sm:w-4/6" />
              </div>
            </Fade>

            <Fade bottom delay={300 * 1} triggerOnce>
              <div className="flex flex-col mt-16 mb-0 mx-8 sm:mx-16 xl:mx-28">
                <h1 className="text-3xl text-theme-blue font-bold mb-3">
                  Tính năng sản phẩm
                </h1>

                <li className="font-light text-lg text-gray-400 text-justify">
                  Cho phép người dùng chỉ cần đăng nhập 1 lần duy nhất mà không cần phải đăng nhập nhiều lần với các ứng dụng khác nhau, tối ưu hóa khả năng làm việc của người dùng mà vẫn đảm bảo được khả năng bảo mật.
                </li>
                <li className="font-light text-lg text-gray-400 text-justify">
                  Cung cấp các lớp bảo mật bổ sung khi người dùng truy cập, ngoài việc người dùng xác thực bằng mật khẩu thì yêu cầu thêm hai hoặc nhiều phương thức xác thực để xác minh danh tính của người dùng (xác thực đa nhân tố), mục đích để gia cố bảo vệ tài khoản của người dùng.
                </li>
                <li className="font-light text-lg text-gray-400 text-justify">
                  Hỗ trợ xác thực đa yếu tố như:
                  <ul className="list-decimal pl-10">
                    <li>
                      Xác thực qua mã OTP (SMS, Email, Google Authentication, Microsoft Authenticator)
                    </li>
                    <li>
                      Mẫu hình
                    </li>
                    <li>
                      Quét vân tay
                    </li>
                    <li>
                      Quét võng mạc
                    </li>
                    <li>
                      Nhận dạng khuôn mặt
                    </li>
                    <li>
                      Nhận dạng giọng nói (AI)
                    </li>
                  </ul>
                </li>
                <li className="font-light text-lg text-gray-400 text-justify">
                Tăng cường hiệu quả quản lý, giúp doanh nghiệp dễ dàng quản lý các tài khoản người dùng và truy vết hoạt động của người dùng
                </li>
              </div>

              <div className="flex flex-col mt-16 mb-0 mx-8 sm:mx-16 xl:mx-28">
                <h1 className="text-3xl text-theme-blue font-bold mb-3">
                  Kiến trúc và công nghệ
                </h1>

                <li className="font-light text-lg text-gray-400 text-justify">
                  Kiến trúc gồm các tầng:
                  <ul className="list-decimal pl-10">
                    <li>
                      Tầng trình diễn: là tầng hiển thị, sau khi ứng dụng chuyển hướng sang trang đăng nhập của SSO, hệ thống hiển thị giao diện xác thực tập trung thống nhất cho tất cả các ứng dụng toàn đơn vị.
                    </li>
                    <li>
                      Tầng xử lý nghiệp vụ: bao gồm các module xử lý các nghiệp vụ kiểm tra thông tin người dùng và xác thực của hệ thống SSO, không phụ thuộc vào tầng trình diễn.
                    </li>
                    <li>
                      Tầng xử lý CSDL: các thao tác vào ra và quản lý kết nối CSDL. Độc lập với tầng nghiệp vụ.
                    </li>
                    <li>
                      Ứng dụng chạy được trên các phiên bản hệ điều hành Win, Ubuntu, MacOS. Trình duyệt Firefox hoặc các trình duyệt khác.
                    </li>
                    <li>
                      Hệ thống tương thích trên phiên bản cơ sở dữ liệu.
                    </li>
                    <li>
                      Hệ thống chạy được trên nền tảng phần cứng ảo hóa
                    </li>
                  </ul>
                </li>
              </div>

              <div className="flex flex-col mt-16 mb-0 mx-8 sm:mx-16 xl:mx-28">
                <h1 className="text-3xl text-theme-blue font-bold mb-3">
                  Chính sách giá
                </h1>

                <li className="font-light text-lg text-gray-400 text-justify">
                  Chỉnh sửa theo yêu cầu: tùy theo yêu cầu thực tế
                </li>
              </div>
              
            </Fade>
          </div>
        ))
      }
    </section>
  );
}
