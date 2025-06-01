import React from 'react'
import { RiMovie2Line } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        <div className="col-xl-12 col-md-12">
                            <div className="single-resume">
                                <h2>What We Do</h2>
                                <div className="experience-list">
                                    <Card 
                                        title={'Corporate Films & Brand Stories'} 
                                        description={'Engaging videos that showcase your company’s vision, values, and achievements.'} 
                                    />
                                    <Card 
                                        title={'Medical & Healthcare Content'} 
                                        description={'Doctor insights, patient recovery stories, hospital commercials, and healthcare awareness.'} 
                                    />
                                    <Card 
                                        title={'Jewellery & Fashion Ads'} 
                                        description={'Stunning visuals for jewellery brands and fashion labels.'} 
                                    />
                                    <Card 
                                        title={'Product Launch & Commercials'} 
                                        description={'Creative product launches and ad campaigns for all industries.'} 
                                    />
                                    <Card 
                                        title={'Movie Promos & Trailers'} 
                                        description={'Cinematic promos and trailers for films and entertainment.'} 
                                    />
                                    <Card 
                                        title={'Podcasts & Educational Videos'} 
                                        description={'Professional podcast production and educational content.'} 
                                    />
                                    <Card 
                                        title={'Live Event & Concert Coverage'} 
                                        description={'Multi-camera coverage for music concerts and live events.'} 
                                    />
                                    <Card 
                                        title={'Social Media Video Campaigns'} 
                                        description={'Short-form, platform-optimized videos for YouTube, Instagram, and Facebook.'} 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume

const Card = ({ title, description }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiMovie2Line />
                </div>
                <div className="content">
                    <h4>{title}</h4>
                    <span className="company">{description}</span>
                </div>
            </div>
        </SlideUp>
    )
}