'use client'
import React, { useState, useEffect } from 'react'
import { RiPlayCircleLine, RiHospitalLine, RiMovie2Line, RiShoppingBagLine, RiBriefcaseLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp';
import { fetchSheetData } from '@/utlits/api/fetchSheetData';

function getRandomAnimation() {
    const animations = [
        '',
        'fadeIn',
        'slideInUp',
        'slideInLeft',
        'slideInRight',
        'zoomIn',
        'bounceIn',
    ];
    return animations[Math.floor(Math.random() * animations.length)];
}

const Portfolio = ({ className }) => {
    const [category, setCategory] = useState('All');
    const [animationClass, setAnimationClass] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);
    const [clientGroups, setClientGroups] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchSheetData();
                setClientGroups(data);
            } catch (error) {
                console.error('Error loading projects:', error);
            } finally {
                setIsLoading(false);
            }
        };
        
        loadProjects();
    }, []);

    // Get all categories across all client groups
    const allCategories = ['All', ...new Set(
        clientGroups.flatMap(group => 
            group.videos.map(video => video.category)
        )
    )];

    // Filter videos based on selected category
    const filteredGroups = category === 'All' 
        ? clientGroups 
        : clientGroups.map(group => ({
            ...group,
            videos: group.videos.filter(video => video.category === category)
        })).filter(group => group.videos.length > 0);

    if (isLoading) {
        return (
            <section className={`projects-area ${className}`}>
                <div className="container">
                    <div className="container-inner text-center">
                        <h2>Loading Portfolio...</h2>
                    </div>
                </div>
            </section>
        );
    }

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
                            {allCategories.map((item, id) => (
                                <li 
                                    key={id} 
                                    onClick={() => {
                                        setCategory(item)
                                        const randomAnimation = getRandomAnimation();
                                        setAnimationClass(randomAnimation);
                                    }} 
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
                        {filteredGroups.map((group, groupIndex) => (
                            <div key={groupIndex} className="client-group mb-5">
                                <SlideUp>
                                    <h3 className="client-headline mb-4">{group.clientName}</h3>
                                    <p className="client-description mb-4">{group.headline}</p>
                                    <div className="row">
                                        {group.videos.map((video) => (
                                            <VideoCard 
                                                key={video.id}
                                                project={video}
                                                animationClass={animationClass}
                                                openVideoModal={setSelectedProject}
                                            />
                                        ))}
                                    </div>
                                </SlideUp>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {selectedProject && (
                <div className="video-modal" onClick={() => setSelectedProject(null)}>
                    <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-modal" onClick={() => setSelectedProject(null)}>&times;</span>
                        <h3>{selectedProject.title}</h3>
                        <div className="video-container">
                            {selectedProject.type === 'drive' ? (
                                <iframe 
                                    src={getDrivePreviewUrl(selectedProject.videoUrl)}
                                    width="100%"
                                    height="315"
                                    allow="autoplay"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <iframe 
                                    width="100%" 
                                    height="315" 
                                    src={`https://www.youtube.com/embed/${selectedProject.videoUrl}`}
                                    title={selectedProject.title}
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen
                                ></iframe>
                            )}
                        </div>
                        <div className="video-details">
                            <p>{selectedProject.description}</p>
                        </div>
                    </div>
                </div>
            )}

            <style jsx>{`
                .client-headline {
                    color: var(--heading-color);
                    font-size: 1.75rem;
                    font-weight: 600;
                    padding-bottom: 0.5rem;
                    border-bottom: 2px solid var(--primary-color);
                }
                .client-description {
                    color: var(--subtitle-color);
                    font-size: 1.1rem;
                }
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

const getDrivePreviewUrl = (url) => {
    // Accepts both full Google Drive share URLs and just the file ID
    if (!url) return '';
    // If already a preview URL, return as is
    if (url.includes('/preview')) return url;
    // If full share URL, extract the file ID
    const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
    const fileId = match ? match[1] : url;
    return `https://drive.google.com/file/d/${fileId}/preview`;
};

const VideoCard = ({ project, animationClass, openVideoModal }) => {
    const [thumbnailError, setThumbnailError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Function to get thumbnail URL
    const getThumbnailUrl = (video) => {
        if (video.type === 'drive') {
            // For Google Drive videos, use the fileId if possible
            const match = video.videoUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
            const fileId = match ? match[1] : video.videoUrl;
            return `https://drive.google.com/thumbnail?id=${fileId}`;
        }
        // For YouTube videos
        return `https://img.youtube.com/vi/${video.videoUrl}/hqdefault.jpg`;
    };

    // Fallback image when thumbnail fails to load
    const getFallbackThumbnail = (category) => {
        const fallbacks = {
            'Healthcare': '/images/portfolio/Antenatal.png',
            'Product Launch': '/images/projects/work1.jpg',
            'Facility Tour': '/images/projects/work2.jpg',
            'Service Highlight': '/images/projects/work3.jpg'
        };
        return fallbacks[category] || '/images/projects/single-project.jpg';
    };

    return (
        <div className={`col-lg-4 col-md-6 item ${project.category.toLowerCase()} ${animationClass}`}>
            <SlideUp delay={project.id}>
                <div className="project-item style-two">
                    <div className="project-image">
                        {isLoading && (
                            <div className="thumbnail-loader">
                                <div className="spinner"></div>
                            </div>
                        )}
                        <img 
                            width={383} 
                            height={249} 
                            style={{
                                width: "100%", 
                                height: "auto",
                                opacity: isLoading ? 0 : 1
                            }} 
                            src={thumbnailError ? getFallbackThumbnail(project.category) : getThumbnailUrl(project)} 
                            alt={project.title}
                            onLoad={() => setIsLoading(false)}
                            onError={() => {
                                setThumbnailError(true);
                                setIsLoading(false);
                            }}
                        />
                        <button 
                            className="details-btn video-play-btn" 
                            onClick={() => openVideoModal(project)}
                        >
                            <RiPlayCircleLine size={24} />
                            {project.type === 'drive' && 
                                <span className="video-type-badge drive">Drive</span>
                            }
                            {project.isShort && 
                                <span className="video-type-badge short">Short</span>
                            }
                        </button>
                    </div>
                    <div className="project-content">
                        <span className="sub-title">
                            {project.category}
                            {project.type === 'drive' && ' • Drive'}
                            {project.isShort && ' • Short'}
                        </span>
                        <h3>{project.title}</h3>
                        <button 
                            className="watch-video-link" 
                            onClick={() => openVideoModal(project)}
                        >
                            Watch Video
                        </button>
                    </div>
                </div>
            </SlideUp>

            <style jsx>{`
                .thumbnail-loader {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: #f5f5f5;
                }
                .spinner {
                    width: 40px;
                    height: 40px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid var(--primary-color);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }
                .video-type-badge {
                    font-size: 12px;
                    margin-left: 6px;
                    padding: 2px 6px;
                    border-radius: 4px;
                }
                .video-type-badge.drive {
                    background: #1a73e8;
                    color: white;
                }
                .video-type-badge.short {
                    background: #ff0000;
                    color: white;
                }
                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}

export default Portfolio;