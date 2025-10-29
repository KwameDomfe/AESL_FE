import React from 'react';
import { Link } from 'react-router-dom';
import { projectCategories } from '../../../data/projectsInfo';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
const AESLProjectsNav = () => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://aesl.com/projects';
    const text = encodeURIComponent('Projects | AESL');
    const encodedUrl = encodeURIComponent(url);
    return (
        <div id="projectsNav" className="grid gtc12 gc1s12 ggap1-00 items-center justify-between pa1-00 bg-blue0 white-90 f1-00 tracked-tight">
            {/* Projects main tile */}
            <div id="projects" className="gc1s1 gr1s1 gc1s1-m w10-00 h10-00 bg-blue0 br0-50 ba shadow-yellow">
                <div className="flex flex-column justify-start w-100 h-100 pa0-50">
                    <Link to="/projects" className="white-90">Projects</Link>
                </div>
            </div>
            {/* Project categories column 1 */}
            <div id="projectCategories--nav1" className="gr1s1 gc2s1 w10-00 h10-00 bg-blue0 br0-50 ba shadow-yellow">
                <ul id="projectCategories_list_1" className="pa0-50">
                    {projectCategories.slice(0,5).map((project) => (
                        <li className="mb0-50" key={project.url}>
                            <Link to={`/projects/${project.url}`} className="white-90">{project.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Project categories column 2 */}
            <div id="projectCategories--nav2" className="gr2s1 gr1s1-m gc1s1 gr1s1-s gc3s1-s gc3s1-m w10-00 h10-00 bg-blue0 br0-50 ba shadow-yellow">
                <ul id="projectCategories_list_2" className="flex flex-column justify-start w-100 h-100 pa0-50">
                    {projectCategories.slice(5,10).map((project) => (
                        <li className="mb0-50" key={project.url}>
                            <Link to={`/projects/${project.url}`} className="white-90">{project.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Project info links */}
            <div id="project_info" className="gc2s1 gc3s1-s gr2s1 gr1s1-m gc12s1-m flex items-center justify-center w10-00 h10-00 shadow-yellow br0-50">
                <ul className="w-100 h-100 pa0-50 blue0 bg-white br0-50 ba">
                    <li><Link to="/projects/projects-list" className="blue0">Projects List</Link></li>
                    <li><Link to="/projects/projects-map" className="blue0">Projects Map</Link></li>
                    <li><Link to="/projects/project-films" className="blue0">Project Films</Link></li>
                </ul>
            </div>
            {/* Social media icons as grid child */}
            <div className="flex flex-column items-center justify-center w10-00 h10-00 bg-blue0 br0-50 ba b--white pa1-00 shadow-yellow" style={{ borderRadius: '0.5rem' }}>
                <div className="mb0-50 flex items-center justify-center">
                    <span className="f1-50 b" aria-label="Share">
                        <FiShare2 style={{ color: 'white' }} />
                    </span>
                </div>
                <div className="flex ggap0-75 items-center justify-between w-100">
                    <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter"><FaTwitter className="f1-25" style={{ color: 'white' }} /></a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><FaFacebookF className="f1-25" style={{ color: 'white' }} /></a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${text}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><FaLinkedinIn className="f1-25" style={{ color: 'white' }} /></a>
                    <a href={`https://wa.me/?text=${text}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp"><FaWhatsapp className="f1-25" style={{ color: 'white' }} /></a>
                    <a href={`mailto:?subject=${text}&body=${encodedUrl}`} aria-label="Share by Email"><FaEnvelope className="f1-25" style={{ color: 'white' }} /></a>
                </div>
            </div>
        </div>
    );
}

export default AESLProjectsNav;