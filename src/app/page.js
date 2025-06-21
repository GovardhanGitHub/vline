import React from 'react'
import Hero from '../components/sections/hero'
import Portfolio from '../components/sections/portfolio'

import { siteMetadata } from './metadata'


export const metadata = {
  title: 'Home',
  description: siteMetadata.description,
}


const Home = () => {
    return (
        <>
            <Hero />
            <Portfolio/>
        </>
    )
}

export default Home