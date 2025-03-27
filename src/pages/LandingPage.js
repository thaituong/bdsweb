/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import {
  Services, Portfolios, Advantages, Testimonials, Partners, Customers,
} from 'json/landingPageData';
import Header from 'parts/Header';
import Hero from 'parts/Hero';
import Service from 'parts/Service';
import Portfolio from 'parts/Portfolio';
import Advantage from 'parts/Advantage';
import Testimonial from 'parts/Testimonial';
// import Discuss from 'parts/Discuss';
import Footer from 'parts/Footer';
import Partner from 'parts/Partner';
import Customer from 'parts/Customer';
import ScrollToTop from 'parts/ScrollToTop';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Hero />
        <Service data={Services} />
        <Portfolio data={Portfolios} />
        <Advantage data={Advantages} />
        <Testimonial data={Testimonials} />
        <Customer data={Customers} />
        <Partner data={Partners} />
        {/* <Discuss /> */}
        <Footer />
        <ScrollToTop />
      </>
    );
  }
}
