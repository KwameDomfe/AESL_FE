import React from 'react'
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FiShare2 } from 'react-icons/fi';

const AESLPeopleNav = () => {
    const url = typeof window !== 'undefined' ? window.location.href : 'https://aesl.com/people';
    const text = encodeURIComponent('People | AESL');
    const encodedUrl = encodeURIComponent(url);
    return (
        <div
            id=""
            className="gc1s12 grid gtc12 ggap1-00 mb1-00 pa1-00 white-90 bg-blue0 fw5 tracked-tight"
        >
            <article id="people_nav1" className="gr1s1 gc1s1 w10-00 h0-00 pb-100 f1-00 bg-blue0 ba br0-50 shadow-green">
                <div id="" className="pa0-50">
                    <Link to="/people" className="white-90">
                        <li className="mb0-75">People</li>
                    </Link>
                </div>
            </article>

            {/* Social media icons as grid child */}
            <div className="flex flex-column items-center justify-center w10-00 h10-00 bg-blue0 br0-50 ba b--white pa1-00 shadow-green" style={{ borderRadius: '0.5rem' }}>
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

            <article id="people_nav2" className="gr1s1 gc2s1 w10-00 h0-00 pb-100 br0-50 ba shadow-green">
                <ul id="" className="ma0-50 ">
                    <li className="mb0-75">
                        <Link to="/people/principal-consultants/" className="white-90">Principal Consultants</Link>
                    </li>
                    <li className="mb0-75">
                        <Link to="/people/senior-consultants/" className="white-90">Senior Consultants</Link>
                    </li>
                    <li className="mb0-75">
                        <Link to="/people/consultants" className="white-90">Consultants</Link>
                    </li>
                </ul>
            </article>

            <article id="people_nav3" className="gr1s1 gc3s1 w10-00 h0-00 pb-100 br0-50 ba shadow-green">
                <ul id="" className="ma0-50 ">
                    <li className="mb0-75">
                        <Link to="/people/senior-professionals" className="white-90">Senior Professionals</Link>
                    </li>
                    <li className="mb0-75">
                        <Link to="/people/professionals" className="white-90">Professionals</Link>
                    </li>
                    <li className="mb0-75">
                        <Link to="/people/assistant-professionals" className="white-90">Assistant Professionals</Link>
                    </li>
                </ul>
            </article>

            <article id="people_nav4" className="gr1s1 gc4s1 w10-00 h0-00 pb-100 br0-50 ba shadow-green">
                <ul id="" className="ma0-50 ">
                    <li className="mb0-75">
                        <Link to="/people/probationers" className="white-90">Probationers</Link>
                    </li>
                    <li className="mb0-75">
                        <Link to="/people/service-personnel" className="white-90">Service Personnel</Link>
                    </li>
                    <li className="mb0-75">
                        <Link to="/people/support-team" className="white-90">Support Team</Link>
                    </li>
                </ul>
            </article>

            <article id="alumni" className="gr1s1 gc12s1 w10-00 h0-00 pb-100 br0-50 bg-white shadow-green">
            </article>
        </div>
    );
}

export default AESLPeopleNav