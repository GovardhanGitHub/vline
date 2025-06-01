import React from 'react'
import { RiMovie2Line, RiHospitalLine, RiShoppingBagLine, RiMic2Line, RiGraduationCapLine, RiMusic2Line, RiInstagramLine, RiYoutubeLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const ServiceGrid = () => {
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
                    <div className="row">
                        <Card id={1} icon={<RiMovie2Line size={60} />} title={"Corporate Films & Brand Stories"} description={"Cinematic videos that elevate your brand and connect with your audience."} />
                        <Card id={2} icon={<RiHospitalLine size={60} />} title={"Medical & Healthcare Content"} description={"Doctor insights, patient stories, hospital commercials, and healthcare awareness."} />
                        <Card id={3} icon={<RiShoppingBagLine size={60} />} title={"Jewellery & Fashion Ads"} description={"Stunning visuals for jewellery and fashion brands."} />
                        <Card id={4} icon={<RiMic2Line size={60} />} title={"Podcasts & Educational Videos"} description={"Professional podcast production and educational content."} />
                        <Card id={5} icon={<RiGraduationCapLine size={60} />} title={"Product Launch & Commercials"} description={"Creative product launches and ad campaigns for all industries."} />
                        <Card id={6} icon={<RiMusic2Line size={60} />} title={"Live Event & Concert Coverage"} description={"Multi-camera coverage for music concerts and live events."} />
                        <Card id={7} icon={<RiInstagramLine size={60} />} title={"Social Media Video Campaigns"} description={"Short-form, platform-optimized videos for YouTube, Instagram, and Facebook."} />
                        <Card id={8} icon={<RiYoutubeLine size={60} />} title={"Movie Promos & Trailers"} description={"Cinematic promos and trailers for films and entertainment."} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGrid

const Card = ({ icon, title, description, id }) => {
    return (
        <div className="col-lg-4 col-md-6">
            <SlideUp delay={id}>
                <div className="service-item">
                    {icon}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </SlideUp>
        </div>
    )
}