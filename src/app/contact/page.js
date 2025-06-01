import React from 'react'
import ContactOption from '../../components/sections/contact/contactOption'
import ContactForm from '../../components/sections/contact/contactForm'
import Head from 'next/head'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact Visual Line Studios | Video Production Bengaluru</title>
        <meta name="description" content="Contact Visual Line Studios in Sahakara Nagar, Bengaluru for professional video production: +91 90718 55089, vlsr2179@gmail.com, administrator@visuallinestudios.com" />
      </Head>
      <section id="contact" className="contact-area innerpage-single-area">
        <div className="container">
          <div className="container-inner">
            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="section-title text-center wow fadeInUp delay-0-2s">
                  <p>contact</p>
                  <h2>Get in Touch with Us!</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <ContactOption />
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact