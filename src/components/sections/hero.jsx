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
                                <img src={"/images/about/company-logo.png"} alt="Visual Line Studios" />
                                <h2>Visual Line Studios</h2>
                                <p>Award-winning video production & visual marketing agency.</p>
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
                                <p>Transform Your Story</p>
                                <h2>
                                    We craft cinematic visuals that elevate your brand and connect with your audience.
                                </h2>
                                <div className="adress-field">
                                    <ul className="service-icons">
                                        <li className='d-flex align-items-center'><i><RiHospitalLine size={18} /></i> Healthcare Marketing</li>
                                        <li className='d-flex align-items-center'><i><RiShoppingBagLine size={18} /></i> Product Launches</li>
                                        <li className='d-flex align-items-center'><i><RiBriefcaseLine size={18} /></i> Business Introductions</li>
                                        <li className='d-flex align-items-center'><i><RiMovie2Line size={18} /></i> Professional Ad Campaigns</li>
                                    </ul>
                                </div>
                                <div className="hero-btns">
                                    <Link href="/portfolio" className="theme-btn">View Our Work <i><RiPlayCircleLine size={16} /></i> </Link>
                                    <Link href="/contact" className="theme-btn outline-btn ml-3">Get a Quote</Link>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp>
                            <div className="trusted-by mt-4">
                                <p className="small text-muted mb-2">TRUSTED BY</p>
                                <PartnersMarquee />
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