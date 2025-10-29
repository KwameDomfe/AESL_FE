import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';

const AESL_PracticeNav = () => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://aesl.com/practice';
    const text = encodeURIComponent('Practice | AESL');
    const encodedUrl = encodeURIComponent(url);
    return (
        <div id="pageNav" 
            className="grid gtc12 gc1s12 
                justify-between ggap1-00 
                white-90 
                pv1-00 ph1-00 
                bg-blue0"
        >
            <article id="practice_nav1"
             className="gr1s1 gc1s1 w10-00 h0-00 pb-100 f1-00 ba br0-50 shadow-grey"
            >
                <ul className="pa0-50">
                    <li>
                        <Link to="/practice" className="white-90 hover-gold:focus hover-gold:hover">Practice</Link>
                    </li>
                </ul>
            </article>
            <article id="practice_nav2" className="gr1s1 gc2s1 w10-00 h0-00 pb-100 f1-00 ba br0-50 shadow-grey">
                <ul className="pa0-50">
                    <li><Link to="/practice/history" className="white-90 hover-gold:focus hover-gold:hover">History</Link></li>
                    <li><Link to="/practice/mandate" className="white-90">Mandate</Link></li>
                    <li><Link to="/practice/functions" className="white-90">Functions</Link></li>
                    <li><Link to="/practice/mission-vision-and-values" className="white-90">Mission, Vision and Values</Link></li>
                </ul>
            </article>
            <article id="practice_nav3" className="gr2s1 gr1s1-m gc2s1 gc3s1-m w10-00 h0-00 pb-100 f1-00 ba br0-50 shadow-grey">
                <ul className="pa0-50">
                    <li className="mb0-50"><Link to="/practice/sector-ministry" className="white-90">Sector Ministry</Link></li>
                    <li className="mb0-50"><Link to="/practice/corporate-governance" className="white-90">Corporate Governance</Link></li>
                    <li className="mb0-50"><Link to="/practice/management" className="white-90">Management</Link></li>
                    <li className="mb0-50"><Link to="/practice/services" className="white-90">Services</Link></li>
                </ul>
            </article>
            <article id="practice_nav4" className="gr1s1-m gc1s1 gr2s1 gc12s1-m w10-00 h0-00 pb-100 bg-white blue0 br0-50 ba f1-00 shadow-grey">
                <ul className="pa0-50">
                    <li className="mb0-50"><Link className="blue0" to="/practice/client-speak">Client Speak</Link></li>
                    <li className="mb0-50"><Link className="blue0" to="/practice/alliances">Alliances</Link></li>
                    <li className="mb0-50"><Link className="blue0" to="/practice/corporate-responsibilities">Corporate Responsibilities</Link></li>
                </ul>
            </article>
            {/* Social media icons as grid child */}
            <div className="flex flex-column items-center justify-center w10-00 h10-00 bg-blue0 br0-50 ba b--white pa1-00 shadow-grey" style={{ borderRadius: '0.5rem' }}>
                <div className="mb0-50 flex items-center justify-center">
                    <span className="f1-50 b" aria-label="Share">
                        <FiShare2 style={{ color: 'white' }} />
                    </span>
                </div>
                <div className="flex ggap0-75 items-center justify-between w-100">
                    <a href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter">
                        <FaTwitter className="f1-25" style={{ color: 'white' }} />
                    </a>
                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook">
                        <FaFacebookF className="f1-25" style={{ color: 'white' }} />
                    </a>
                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${text}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn">
                        <FaLinkedinIn className="f1-25" style={{ color: 'white' }} />
                    </a>
                    <a href={`https://wa.me/?text=${text}%20${encodedUrl}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp">
                        <FaWhatsapp className="f1-25" style={{ color: 'white' }} />
                    </a>
                    <a href={`mailto:?subject=${text}&body=${encodedUrl}`} aria-label="Share by Email">
                        <FaEnvelope className="f1-25" style={{ color: 'white' }} />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AESL_PracticeNav