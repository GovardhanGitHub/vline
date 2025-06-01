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
    }, [pathName])

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
            <div className="header-upper">
                <div className="container">
                    <div className="header-inner d-flex align-items-center justify-content-between flex-nowrap" style={{minHeight:'52px',padding:'6px 0',position:'relative'}}>
                        {/* Brand name instead of logo */}
                        <div className="brand-name d-flex align-items-center" style={{fontWeight:'bold',fontSize:'1.3rem',whiteSpace:'nowrap',letterSpacing:'1px',color:'#eb5d3a',flex:'0 0 auto'}}>
                            Visual Line Studios
                        </div>
                        {/* Hamburger and phone for mobile, all in one row */}
                        <div className="d-flex align-items-center ms-auto" style={{gap:'0.3rem',flex:'0 0 auto'}}>
                            <a href="tel:+919071855089" className="theme-btn phone-btn d-none d-lg-inline-block" style={{fontWeight:'bold',fontSize:'0.95em',padding:'4px 8px',background:'#fff',color:'#eb5d3a',border:'2px solid #eb5d3a',borderRadius:'8px',whiteSpace:'nowrap',marginRight:'0.3rem',position:'absolute',right:0,top:'50%',transform:'translateY(-50%)'}}>+91 90718 55089</a>
                            <a href="tel:+919071855089" className="theme-btn phone-btn d-inline-block d-lg-none" style={{fontWeight:'bold',fontSize:'0.95em',padding:'4px 8px',background:'#fff',color:'#eb5d3a',border:'2px solid #eb5d3a',borderRadius:'8px',whiteSpace:'nowrap',marginRight:'0.3rem'}}>+91 90718 55089</a>
                            <button type="button" className="navbar-toggle d-inline-block d-lg-none" data-bs-toggle="collapse" data-bs-target="#main-navbar-collapse" style={{background:'none',border:'none',padding:'0 6px',fontSize:'1.7rem',lineHeight:'1',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',height:'36px',cursor:'pointer'}} aria-label="Toggle navigation">
                                <span className="icon-bar" style={{display:'block',width:'22px',height:'3px',background:'#eb5d3a',margin:'2.5px 0',borderRadius:'2px'}}></span>
                                <span className="icon-bar" style={{display:'block',width:'22px',height:'3px',background:'#eb5d3a',margin:'2.5px 0',borderRadius:'2px'}}></span>
                                <span className="icon-bar" style={{display:'block',width:'22px',height:'3px',background:'#eb5d3a',margin:'2.5px 0',borderRadius:'2px'}}></span>
                            </button>
                        </div>
                        {/* <!-- START NAV DESIGN AREA --> */}
                        <div className="nav-outer clearfix mx-auto" style={{flex:'1 1 auto'}}>
                            {/* <!-- Main Menu */}
                            <nav className="main-menu navbar-expand-lg">
                                <div className="navbar-header d-none">
                                    {/* Mobile logo commented out */}
                                </div>
                                <div id="main-navbar-collapse" className="navbar-collapse collapse">
                                    <ul className="navigation onepage clearfix">
                                        {
                                            menuList.map(({ id, label, path }) => <li key={id}><Link href={path} className="nav-link-click" >{label}</Link></li>)
                                        }
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header