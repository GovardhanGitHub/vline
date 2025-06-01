import React from 'react'
import Summery from '@/components/sections/summery'
import Testimonials from '@/components/sections/testimonials'
import Head from 'next/head'

const About = () => {
    return (
        <>
            <Head>
                <title>About Visual Line Studios | Video Production Bengaluru</title>
                <meta name="description" content="Visual Line Studios is a professional video production company in Sahakara Nagar, Bengaluru. We create corporate films, medical content, product launches, fashion ads, and more." />
            </Head>
            <Summery />
            <Testimonials />
        </>
    )
}

export default About