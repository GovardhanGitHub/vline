import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/mac_vidoe_pic.jpg"} alt="Visual Line Studios" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    Visual Line Studios – Professional Video Production in Bengaluru
                                </h2>
                                <p>
                                    Visual Line Studios is a creative powerhouse based in Sahakara Nagar, Bengaluru, Karnataka. We specialize in crafting cinematic videos that elevate brands and connect with audiences. Our expertise spans corporate films, medical content (doctor insights, patient recovery stories, hospital commercials), movie promos, podcasts, jewellery and fashion ads, educational videos, and live music concerts.
                                </p>
                                <p>
                                    Our dedicated team brings your brand stories to life for platforms like YouTube, Instagram, and Facebook. Whether you need a product launch video, a compelling brand story, or engaging social media content, we deliver visuals that inspire and drive results. Let us help you create impactful videos that connect and convert.
                                </p>
                                <div className="hero-btns">
                                    <a href="/contact" className="theme-btn">Contact Us<i> <RiMailSendLine size={16} /> </i></a>
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

export default Summery