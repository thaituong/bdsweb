/* eslint-disable linebreak-style */
/* eslint-disable no-useless-escape */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as emailjs from '@emailjs/browser';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const DiscussForm = (actions) => {
  const { data, resetForm } = actions;
  const submitEmail = () => {
    const {
      name, company, email, phone, projectIdea,
    } = data;

    const templateParams = {
      from_name: `${name} - ${company} ( ${phone} - ${email} )`,
      to_name: 'Racxstudio',
      message: projectIdea,
    };

    if (
      name !== ''
      && company !== ''
      && email !== ''
      && phone !== ''
      && projectIdea !== ''
    ) {
      emailjs.send(
        'service_h4gtndg',
        'template_a9tvs7a',
        templateParams,
        'user_csqIxzN5mKsl1yw4ffJzV',
      )
        .then(() => {
          toast.success('Success! we\'\ll get back to you soon. Thank you!');
          resetForm();
        }, (error) => {
          toast.error(error);
        });
    } else {
      toast.error('Please fill out the blank form.');
    }
  };

  return (
    <section className="container mx-auto mt-10 flex flex-col px-6 md:px-0 md:flex-row justify-center">
      <div className="w-full md:w-1/2">
        <div className="max-w-lg mx-auto rounded-md">
          <h1 className="text-2xl font-bold mb-4" style={{ color: '#44ABB6' }}>
            Chăm sóc khách hàng chung & Hỗ trợ kỹ thuật
          </h1>
          <div className="text-gray-700 space-y-4">
            <p className="flex items-center">
              <span className="mr-2">📍</span>
              87A Nguyễn Thế Truyện, Phường Tân Sơn Nhì, Quận Tân Phú, Thành phố Hồ Chí Minh
            </p>
            <p className="flex items-center">
              <span className="mr-2">📞</span>
              0988000092
            </p>
            <p className="flex items-center">
              <span className="mr-2">✉️</span>
              <a href="mailto:info@nst.com.vn" className="text-blue-500 underline">
                info@nst.com.vn
              </a>
            </p>
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.748231906067!2d106.62261071433446!3d10.831402492282269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b5d2f5b5b6b%3A0xc1e0da6db1f03ef7!2s87A%20Nguyen%20The%20Truyen%2C%20Tan%20Son%20Nhi%2C%20Tan%20Phu%2C%20Ho%20Chi%20Minh%20City%2C%20Vietnam!5e0!3m2!1sen!2s!4v1635151003410!5m2!1sen!2s"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <Fade direction="down" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">Gửi Liên Hệ</h1>
        </Fade>

        <Fade direction="up" triggerOnce>
          <p className="font-light text-lg text-gray-400 text-center mb-12">
            Vui lòng điền vào mẫu dưới đây để thảo luận về dự án của bạn và chúng tôi sẽ phản hồi bạn trong vòng chưa đầy 24 giờ.
          </p>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row w-full justify-center mx-auto">
              <Form
                id="name"
                name="name"
                type="text"
                value={data.name}
                placeholder="Tên của bạn"
                onChange={actions.onChange}
              />
              <Form
                id="company"
                name="company"
                type="text"
                value={data.company}
                placeholder="Công ty"
                onChange={actions.onChange}
              />
            </div>

            <div className="flex flex-col sm:flex-row w-full justify-center mx-auto">
              <Form
                id="email"
                name="email"
                type="email"
                value={data.email}
                placeholder="Email"
                onChange={actions.onChange}
              />
              <Form
                id="phone"
                name="phone"
                type="number"
                value={data.phone}
                placeholder="Số điện thoại"
                onChange={actions.onChange}
              />
            </div>

            <div className="flex w-full mx-auto">
              <Form
                id="projectIdea"
                name="projectIdea"
                type="textarea"
                value={data.projectIdea}
                placeholder="Nội dung email"
                onChange={actions.onChange}
              />
            </div>
            <Button
              className="text-xl mx-auto px-12 py-3 mt-5 bg-theme-purple text-white rounded-full border-2 border-theme-purple hover:bg-dark-theme-purple transition duration-200 focus:outline-none"
              type="button"
              onClick={submitEmail}
            >
              Gửi
            </Button>
          </div>
        </Fade>

        <ToastContainer />
      </div>
    </section>
  );
};
