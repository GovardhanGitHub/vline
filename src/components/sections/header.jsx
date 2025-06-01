'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { RiShakeHandsLine } from '@remixicon/react'
import { menuList } from '@/utlits/fackData/menuList'
import Image from 'next/image'

const Header = () => {
    const pathName = usePathname()
    const [isSticky, setisSticky] = useState(false)

    useEffect(() => {
        const navbar_collapse = document.querySelector(".navbar-collapse")
        navbar_collapse.classList.remove("show")
        
        // Also hide mobile menu when path changes
        const mobile_navbar_collapse = document.querySelector("#mobile-navbar-collapse")
        if (mobile_navbar_collapse) {
            mobile_navbar_collapse.classList.remove("show")
        }
    }, [pathName])

    // Function to hide mobile menu when menu item is clicked
    const handleMobileMenuClick = () => {
        const mobile_navbar_collapse = document.querySelector("#mobile-navbar-collapse")
        if (mobile_navbar_collapse) {
            mobile_navbar_collapse.classList.remove("show")
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", stickyHeader)
        return () => window.removeEventListener("scroll", stickyHeader)
    }, [])

    const stickyHeader = () => {
        const scrollTop = window.scrollY
        if (scrollTop > 85) {
            setisSticky(true)
        }
        else {
            setisSticky(false)
        }
    }
    return (
        <header className={`main-header ${isSticky ? "fixed-header" : ""}`}>
            {/* SEO meta for Bangalore video production moved to layout.js or Head component */}
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center justify-content-between w-100" style={{minHeight:'52px',padding:'6px 0',position:'relative'}}>
                        {/* Brand name and phone stacked vertically on mobile */}
                      <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center" style={{flex:'1'}}>
                            <Link href="/" className="brand-name" style={{fontWeight:'bold',fontSize:'1.3rem',whiteSpace:'nowrap',letterSpacing:'1px',color:'#fff',textDecoration:'none'}}>Visual Line Studios</Link>
                            <a href="tel:+919071855089" className="theme-btn phone-btn mt-1 mt-lg-0 ms-lg-3 d-lg-none" style={{fontWeight:'bold',fontSize:'0.95em',padding:'4px 8px',background:'#fff',color:'#eb5d3a',border:'2px solid #eb5d3a',borderRadius:'8px',whiteSpace:'nowrap'}}>+91 90718 55089</a>
                        </div>



                        {/* Navigation menu - hidden on mobile, shown on desktop */}
                        <div className="nav-outer clearfix d-none d-lg-flex" style={{flex:'1',justifyContent:'center'}}>
                            <nav className="main-menu navbar-expand-lg">
                                <div id="main-navbar-collapse" className="navbar-collapse collapse show">
                                    <ul className="navigation onepage clearfix">
                                        {
                                            menuList.map(({ id, label, path }) => <li key={id}><Link href={path} className="nav-link-click" >{label}</Link></li>)
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>

                        {/* Right side - Phone number on desktop, hamburger on mobile */}
                        <div className="d-flex align-items-center justify-content-end" style={{flex:'0 0 auto'}}>
                            {/* Desktop phone number - completely on the right */}
                            <a href="tel:+919071855089" className="theme-btn phone-btn d-none d-lg-inline-block" style={{fontWeight:'bold',fontSize:'0.95em',padding:'4px 8px',background:'#fff',color:'#eb5d3a',border:'2px solid #eb5d3a',borderRadius:'8px',whiteSpace:'nowrap'}}>+91 90718 55089</a>
                            
                            {/* Mobile hamburger - completely on the right */}
                            <button type="button" className="navbar-toggle d-inline-block d-lg-none" data-bs-toggle="collapse" data-bs-target="#mobile-navbar-collapse" style={{background:'none',border:'none',padding:'0 6px',fontSize:'1.7rem',lineHeight:'1',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'36px',cursor:'pointer'}} aria-label="Open navigation menu">
                                <span className="icon-bar" style={{display:'block',width:'22px',height:'3px',background:'#eb5d3a',margin:'2.5px 0',borderRadius:'2px'}}></span>
                                <span className="icon-bar" style={{display:'block',width:'22px',height:'3px',background:'#eb5d3a',margin:'2.5px 0',borderRadius:'2px'}}></span>
                                <span className="icon-bar" style={{display:'block',width:'22px',height:'3px',background:'#eb5d3a',margin:'2.5px 0',borderRadius:'2px'}}></span>
                            </button>
                        </div>

                        {/* Mobile navigation menu - collapsible */}
                        <div id="mobile-navbar-collapse" className="navbar-collapse collapse d-lg-none" style={{position:'absolute',top:'100%',left:'0',right:'0',background:'#fff',boxShadow:'0 2px 10px rgba(0,0,0,0.1)',zIndex:'1000'}}>
                            <ul className="navigation onepage clearfix" style={{flexDirection:'column',padding:'1rem 0'}}>
                                {
                                    menuList.map(({ id, label, path }) => <li key={id} style={{width:'100%'}}><Link href={path} className="nav-link-click" onClick={handleMobileMenuClick} style={{display:'block',padding:'0.5rem 1rem',textAlign:'center'}}>{label}</Link></li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header