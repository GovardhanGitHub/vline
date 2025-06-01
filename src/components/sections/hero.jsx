'use client'
import React from 'react'
import Link from 'next/link';
import { RiFacebookCircleFill, RiTwitterXLine, RiLinkedinFill, RiInstagramLine, RiVimeoLine, RiPlayCircleLine, RiMovie2Line, RiHospitalLine, RiShoppingBagLine, RiBriefcaseLine } from '@remixicon/react'
import PartnersMarquee from './partnersMarquee';
import SlideUp from '@/utlits/animations/slideUp';

const Hero = () => {
    return (
        <section id="about" className="about-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/main_photo_pic.jpg"} alt="Visual Line Studios" />
                                <h2>Visual Line Studios</h2>
                                <p className="fw-bold">Bengaluru’s Creative Video Production Studio</p>
                                <div className="about-social text-center">
                                    <ul>
                                        <li><Link href=""><RiFacebookCircleFill size={20} /></Link></li>
                                        <li><Link href=""><RiTwitterXLine size={20} /></Link></li>
                                        <li><Link href=""><RiInstagramLine size={20} /></Link></li>
                                        <li><Link href=""><RiVimeoLine size={20} /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <p className="text-primary mb-2">Professional Video Production for Every Brand</p>
                                <h2>
                                    Medical, Corporate, Jewellery, Product, Fashion, Podcasts & More
                                </h2>
                                <p>
                                    From hospital ads and doctor interviews to jewellery commercials, product launches, corporate films, fashion promos, educational content, and live event coverage—Visual Line Studios brings your story to life. Our 4K videos are tailored for YouTube, Instagram, Facebook, and all digital platforms. <b>Boost your brand with cinematic storytelling, creative direction, and expert video marketing.</b>
                                </p>
                                <div className="adress-field">
                                    <ul className="service-icons">
                                        <li className='d-flex align-items-center'><i><RiHospitalLine size={18} /></i> Medical & Hospital Videos</li>
                                        <li className='d-flex align-items-center'><i><RiShoppingBagLine size={18} /></i> Product & Jewellery Films</li>
                                        <li className='d-flex align-items-center'><i><RiMovie2Line size={18} /></i> Corporate, Fashion & Event Promos</li>
                                        <li className='d-flex align-items-center'><i><RiBriefcaseLine size={18} /></i> Podcasts & Educational Content</li>
                                    </ul>
                                </div>
                                <div className="hero-btns mt-3">
                                    <Link href="/works" className="theme-btn mx-2">See Our Work <i><RiPlayCircleLine size={16} /></i> </Link>
                                    <a href="tel:+919071855089" className="theme-btn outline-btn ml-3">Call +91 90718 55089</a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Hero