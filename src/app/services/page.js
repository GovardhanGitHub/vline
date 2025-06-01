import React from 'react'
import Pricing from '@/components/sections/pricing'
import ServiceGrid from '@/components/sections/serviceGrid'
import Head from 'next/head'

const Service = () => {
    return (
        <>
            <Head>
                <title>Video Production Services | Visual Line Studios Bengaluru</title>
                <meta name="description" content="Professional video production in Bengaluru: corporate films, medical content, product launches, fashion ads, live events, and more. Visual Line Studios brings your brand to life." />
            </Head>
            <ServiceGrid />
            <Pricing />
        </>
    )
}

export default Service