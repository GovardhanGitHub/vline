'use client'
import React, { useState } from 'react'
import SlideUp from '@/utlits/animations/slideUp'

import { RiMovie2Line, RiHospitalLine, RiShoppingBag3Line, RiMic2Line, RiRocketLine, RiMusic2Line, RiInstagramLine, RiFilmLine, RiCameraLine, RiWalkLine, RiBuildingLine, RiVideoLine, RiFlightTakeoffLine } from '@remixicon/react';

const services = [
    {
        id: 1,
        icon: <RiMovie2Line size={60} />,
        title: "Corporate Films & Brand Stories",
        description: "Cinematic corporate films by a top video production company in Bangalore, showcasing your brand’s vision.",
        details: "As a leading video production company in Bangalore, we craft compelling corporate films and brand stories that engage your audience. Our Bengaluru team delivers high-impact videos from scripting to post-production, elevating your business."
    },
    {
        id: 2,
        icon: <RiHospitalLine size={60} />,
        title: "Medical & Healthcare Content",
        description: "Professional healthcare videos, including doctor interviews, crafted in Bengaluru for medical brands.",
        details: "We produce engaging healthcare content in Bangalore, from patient testimonials to hospital commercials. Our expertise ensures accurate, sensitive videos that connect with Bengaluru’s medical audience."
    },
    {
        id: 3,
        icon: <RiShoppingBag3Line size={60} />,
        title: "Jewellery & Fashion Ads",
        description: "Stunning jewellery and fashion shoots in Bangalore, ideal for ecommerce catwalk campaigns.",
        details: "Highlight your collections with our jewellery and fashion ads. Our Bengaluru team delivers captivating ecommerce catwalk Bangalore videos and fashion shoots Bangalore, showcasing elegance and craftsmanship."
    },
    {
        id: 4,
        icon: <RiMic2Line size={60} />,
        title: "Podcast Studio in Bangalore",
        description: "Top-tier podcast production in our advanced podcast studio in Bangalore for creators and businesses.",
        details: "Record professional audio in our state-of-the-art podcast studio in Bangalore. We offer end-to-end services, including recording, editing, and publishing, to amplify your voice in Bengaluru."
    },
    {
        id: 5,
        icon: <RiRocketLine size={60} />,
        title: "Product Launch Videos",
        description: "Dynamic product launch videos by a top video production company in Bangalore to drive excitement.",
        details: "Launch your products with impact. Our Bengaluru team creates engaging product launch videos tailored for startups and brands, ensuring maximum engagement and sales in Bangalore."
    },
    {
        id: 6,
        icon: <RiMusic2Line size={60} />,
        title: "Live Event & Concert Coverage",
        description: "Multi-camera corporate event videography in Bangalore for concerts and conferences.",
        details: "Capture every moment with our professional multi-camera coverage for live events in Bengaluru. Our corporate event videography services deliver high-quality footage for your brand."
    },
    {
        id: 7,
        icon: <RiInstagramLine size={60} />,
        title: "Social Media Content Creation",
        description: "Engaging social media videos optimized for Instagram and YouTube, crafted in Bangalore.",
        details: "Boost your online presence with our social media content creation in Bangalore. We produce platform-optimized short-form videos for Instagram, YouTube, and more, tailored for Bengaluru businesses."
    },
    {
        id: 8,
        icon: <RiFilmLine size={60} />,
        title: "Movie Promos & Trailers",
        description: "Cinematic movie promos by a leading video production company in Bangalore.",
        details: "Build anticipation with our cinematic trailers for films and web series. Our Bengaluru team crafts compelling entertainment content to captivate audiences."
    },
    {
        id: 9,
        icon: <RiCameraLine size={60} />,
        title: "Ecommerce Photography Bangalore",
        description: "High-quality ecommerce product shoots in Bangalore to enhance your online store.",
        details: "Elevate your ecommerce platform with our ecommerce photography Bangalore services. We deliver professional product images, from flat-lays to lifestyle shots, to drive sales in Bengaluru."
    },
    {
        id: 10,
        icon: <RiWalkLine size={60} />,
        title: "Ecommerce Catwalk Bangalore",
        description: "Dynamic ecommerce catwalk Bangalore videos to showcase your fashion products.",
        details: "Showcase your apparel with our ecommerce catwalk Bangalore services. Our Bengaluru team produces runway-style videos optimized for online stores and social media."
    },
    {
        id: 11,
        icon: <RiBuildingLine size={60} />,
        title: "Office Shoots Bangalore",
        description: "Professional office shoots in Bangalore to highlight your workspace and culture.",
        details: "Capture your workplace with our office shoots Bangalore services. We produce high-quality photos and videos for corporate branding and marketing in Bengaluru."
    },
    {
        id: 12,
        icon: <RiVideoLine size={60} />,
        title: "Commercial Shoots Bengaluru",
        description: "Impactful commercial shoots by a top video production company in Bangalore.",
        details: "Tell your brand’s story with our commercial shoots Bengaluru. From TV ads to promotional videos, we create content that resonates with your Bengaluru audience."
    },
    {
        id: 13,
        icon: <RiFlightTakeoffLine size={60} />,
        title: "Aerial Drone Shoots",
        description: "Cinematic aerial drone shoots in Bangalore for real estate and events.",
        details: "Add a unique perspective with our aerial drone shoots in Bengaluru. Ideal for real estate, events, and promotions, our drone videography captures stunning visuals of Bangalore."
    }
];

const ServiceGrid = () => {
    const [openIdx, setOpenIdx] = useState(0);
    return (
        <section id="services" className="services-area innerpage-single-area">
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <p>Our Services</p>
                                    <h2>Professional Video Production</h2>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <div className="accordion service-accordion" id="serviceAccordion">
                        {services.map((service, idx) => (
                            <div className="accordion-item" key={service.id}>
                                <h2 className="accordion-header" id={`heading${service.id}`}>
                                    <button
                                        className={`accordion-button${openIdx === idx ? '' : ' collapsed'}`}
                                        type="button"
                                        onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                                        onMouseEnter={() => openIdx !== idx && setOpenIdx(idx)}
                                        aria-expanded={openIdx === idx}
                                        aria-controls={`collapse${service.id}`}
                                        style={{ background: '#23262f', color: '#fff', fontWeight: 500 }}
                                    >
                                        <span className="service-icon me-3">{service.icon}</span>
                                        {service.title}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${service.id}`}
                                    className={`accordion-collapse collapse${openIdx === idx ? ' show' : ''}`}
                                    aria-labelledby={`heading${service.id}`}
                                    data-bs-parent="#serviceAccordion"
                                >
                                    <div className="accordion-body service-card-full">
                                        <p className="lead mb-2">{service.description}</p>
                                        <p>{service.details}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style jsx>{`
                section.services-area {
                    background: #181a20;
                    color: #fff;
                }
                .service-accordion .accordion-item {
                    background: transparent;
                    border: none;
                    margin-bottom: 1rem;
                }
                .accordion-button {
                    background: #23262f;
                    color: #fff;
                    border-radius: 12px;
                    font-size: 1.08rem;
                    box-shadow: none;
                    padding: 1rem 1.5rem;
                    margin-bottom: 0.2rem;
                    display: flex;
                    align-items: center;
                    transition: background 0.2s, color 0.2s;
                }
                .accordion-button.collapsed {
                    background: #23262f;
                    color: #fff;
                }
                .accordion-button:focus {
                    box-shadow: 0 0 0 0.1rem var(--primary-color, #007bff);
                }
                .accordion-body.service-card-full {
                    background: #23262f;
                    border-radius: 0 0 12px 12px;
                    color: #fff;
                    box-shadow: 0 2px 16px rgba(0,0,0,0.13);
                    padding: 1.5rem 2rem;
                }
                .service-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 50px;
                    height: 50px;
                    background: #181a20;
                    border-radius: 50%;
                    margin-right: 1rem;
                }
            `}</style>
        </section>
    )
}

export default ServiceGrid;