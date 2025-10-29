import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';
const AESL_PrinciplesNav = () => {
    return (
        <div id="pageNav" className="grid gtc12 ggap1-00 gc1s12 pa1-00 mb2-00 w-100 white-90 bg-blue0">
            <nav id="principles_nav1" className="gr1s1 gc1s1 h10-00 w10-00 f1-00 shadow-red ba br0-50">
                <ul className="pa0-50">
                    <li className="mb0-50">
                        <Link to="/principles" className="white-90">Principles</Link>
                    </li>
                </ul>
            </nav>
            <nav id="principles_nav2" className="gr1s1 gc2s1 h10-00 w10-00 br0-50 f1-00 shadow-red ba br0-50">
                <ul className="pa0-50">
                    <li className="mb0-50"><a href="#principles_Civic" className="white-90">Civic</a></li>
                    <li className="mb0-50"><a href="#principles_Professionalism" className="white-90">Professionalism</a></li>
                    <li className="mb0-50"><a href="#principles_Excellence" className="white-90">Excellence</a></li>
                    <li className="mb0-50"><a href="#principles_IntegrityAndHonesty" className="white-90">Integrity and Honesty</a></li>
                </ul>
            </nav>
            <nav id="practice_nav2" className="gr2s1 gr1s1-m gc1s1 gc3s1-m gr1s1-l gc3s1-l h10-00 w10-00 shadow-red ba br0-50">
                <ul className="pa0-50">
                    <li className="mb0-50"><a href="#principles_TimelinessAndCostEffectiveness" className="white-90">Timeliness and Cost Effectiveness</a></li>
                    <li className="mb0-50"><a href="#principles_Sustainability" className="white-90">Sustainability</a></li>
                    <li className="mb0-50"><a href="#principles_Empowerment" className="white-90">Empowerment</a></li>
                </ul>
            </nav>
            <nav id="practice_list" className="gc2s1 gr2s1 gr1s1-m gc4s1-m gr1s1-l gc12s1-l h10-00 w10-00 shadow-red br0-50">
                <ul className="w-100 h-100 pa0-50 blue0 bg-white br0-50"></ul>
            </nav>
            {/* Social media icons as grid child */}
            <div className="flex flex-column items-center justify-center w10-00 h10-00 bg-blue0 br0-50 ba b--white pa1-00 shadow-red" style={{ borderRadius: '0.5rem' }}>
                <div className="mb0-50 flex items-center justify-center">
                    <span className="f1-50 b" aria-label="Share">
                        <FiShare2 style={{ color: 'white' }} />
                    </span>
                </div>
                <div className="flex ggap0-75 items-center justify-between w-100">
                    <a href={`https://twitter.com/intent/tweet?url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : 'https://aesl.com/principles'}&text=${encodeURIComponent('Principles | AESL')}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter"><FaTwitter className="f1-25" style={{ color: 'white' }} /></a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : 'https://aesl.com/principles'}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook"><FaFacebookF className="f1-25" style={{ color: 'white' }} /></a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : 'https://aesl.com/principles'}&title=${encodeURIComponent('Principles | AESL')}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn"><FaLinkedinIn className="f1-25" style={{ color: 'white' }} /></a>
                    <a href={`https://wa.me/?text=${encodeURIComponent('Principles | AESL')}%20${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : 'https://aesl.com/principles'}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp"><FaWhatsapp className="f1-25" style={{ color: 'white' }} /></a>
                    <a href={`mailto:?subject=${encodeURIComponent('Principles | AESL')}&body=${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : 'https://aesl.com/principles'}`} aria-label="Share by Email"><FaEnvelope className="f1-25" style={{ color: 'white' }} /></a>
                </div>
            </div>
        </div>
    );
}


export default AESL_PrinciplesNav