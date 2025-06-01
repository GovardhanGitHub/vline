'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { RiPlayCircleLine, RiHospitalLine, RiMovie2Line, RiShoppingBagLine, RiBriefcaseLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp';
import Image from 'next/image';
import { projectsData } from '@/utlits/fackData/projectData';

const animations = ['slideIn', 'fadeIn', 'scaleUp'];

const getRandomAnimation = () => {
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
};

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);

    const handleCategoryClick = (item) => {
        setCategory(item)
        const randomAnimation = getRandomAnimation();
        setAnimationClass(randomAnimation);
    }

    const openVideoModal = (project) => {
        setSelectedProject(project);
    }

    const closeVideoModal = () => {
        setSelectedProject(null);
    }

    // ------ filter unique category
    const filteredCategory = ["All"]
    projectsData.forEach(({ category }) => {
        if (!filteredCategory.includes(category)) {
            filteredCategory.push(category)
        }
    })
    // ------ filter unique category

    const filteredProjects = category === 'All' ? projectsData : projectsData.filter(project => project.category === category);
    
    return (
        <section id="portfolio" className={`projects-area ${className}`}>
            <div className="container">
                <div className="container-inner">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12">
                            <SlideUp>
                                <div className="section-title text-center">
                                    <h2>Video Portfolio</h2>
                                    <p>Explore our collection of professionally crafted healthcare videos, 
                                    showcasing our expertise in hospital promotions, medical service highlights, 
                                    and healthcare facility tours.</p>
                                </div>
                            </SlideUp>
                        </div>
                    </div>
                    <SlideUp>
                        <ul className="project-filter filter-btns-one justify-content-center pb-15">
                            {filteredCategory.map((item, id) => (
                                <li 
                                    key={id} 
                                    onClick={() => handleCategoryClick(item)} 
                                    className={item === category ? "current" : ""}
                                >
                                    {item === "Healthcare" ? (
                                        <><RiHospitalLine size={16} className="mr-1" /> {item}</>
                                    ) : item === "Product Launch" ? (
                                        <><RiShoppingBagLine size={16} className="mr-1" /> {item}</>
                                    ) : item === "Facility Tour" ? (
                                        <><RiBriefcaseLine size={16} className="mr-1" /> {item}</>
                                    ) : item === "Service Highlight" ? (
                                        <><RiMovie2Line size={16} className="mr-1" /> {item}</>
                                    ) : (
                                        item
                                    )}
                                </li>
                            ))}
                        </ul>
                    </SlideUp>
                    <div className="row project-masonry-active overflow-hidden">
                        {filteredProjects.map((project) => (
                            <VideoCard 
                                key={project.id} 
                                project={project} 
                                animationClass={animationClass} 
                                openVideoModal={openVideoModal}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {selectedProject && (
                <div className="video-modal" onClick={closeVideoModal}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-modal" onClick={closeVideoModal}>&times;</span>
                        <h3>{selectedProject.title}</h3>
                        <div className="video-container">
                            <iframe 
                                width="100%" 
                                height="315" 
                                src={`https://www.youtube.com/embed/${selectedProject.youtubeId}`}
                                title={selectedProject.title}
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="video-details">
                            <p>{selectedProject.description}</p>
                            <p className="client"><strong>Client:</strong> {selectedProject.client}</p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .video-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.85);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .video-modal-content {
                    background-color: #fff;
                    width: 90%;
                    max-width: 800px;
                    padding: 20px;
                    border-radius: 8px;
                    position: relative;
                }
                .close-modal {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    font-size: 24px;
                    cursor: pointer;
                }
                .video-container {
                    margin: 15px 0;
                    position: relative;
                    padding-bottom: 56.25%; /* 16:9 ratio */
                    height: 0;
                    overflow: hidden;
                }
                .video-container iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
                .video-details {
                    margin-top: 15px;
                }
                .client {
                    margin-top: 10px;
                    color: #666;
                }
            `}</style>
        </section>
    )
}

export default Portfolio

const VideoCard = ({ project, animationClass, openVideoModal }) => {
    const { id, category, title, youtubeId } = project;
    // Use YouTube thumbnail for portfolio
    const getThumbnailUrl = (videoId) => {
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    };
    return (
        <div className={`col-lg-4 col-md-6 item ${category.toLowerCase()} ${animationClass}`}>
            <SlideUp delay={id}>
                <div className="project-item style-two">
                    <div className="project-image">
                        <img 
                            width={383} 
                            height={249} 
                            style={{width:"100%", height:"auto"}} 
                            src={getThumbnailUrl(youtubeId)} 
                            alt={title} 
                        />
                        <button 
                            className="details-btn video-play-btn" 
                            onClick={() => openVideoModal(project)}
                        >
                            <RiPlayCircleLine size={24} /> 
                        </button>
                    </div>
                    <div className="project-content">
                        <span className="sub-title">{category}</span>
                        <h3>{title}</h3>
                        <button 
                            className="watch-video-link" 
                            onClick={() => openVideoModal(project)}
                        >
                            Watch Video
                        </button>
                    </div>
                </div>
            </SlideUp>
        </div>
    )
}