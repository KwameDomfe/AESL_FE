import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { publicationCategories } from '../../../data/publications'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { FiShare2, FiSearch } from 'react-icons/fi';
import { publications } from '../../../data/publications';

const toSlug = (name) => name.toLowerCase().replace(/\s+/g, '-');

// Helper: Only show categories that have at least one publication
function getActiveCategories() {
  const categorySet = new Set(publications.map(p => p.category));
  return publicationCategories.filter(catObj => categorySet.has(catObj.name));
}

const AESL_PublicationsNav = ({
  navShadow = 'shadow-yellow',
  navText = 'white-90',
  navBg = 'bg-blue0',
  q,
  setQ,
  cat,
  setCat,
  year,
  setYear,
  years
}) => {
  // Defensive: fallback to noop if setter is not a function
  const safeSetQ = typeof setQ === 'function' ? setQ : () => {};
  const safeSetCat = typeof setCat === 'function' ? setCat : () => {};
  const safeSetYear = typeof setYear === 'function' ? setYear : () => {};
  const location = useLocation();
  const isRoot = location.pathname === '/publications';
  const url = typeof window !== 'undefined' ? window.location.href : 'https://aesl.com/publications';
  const text = encodeURIComponent('Publications | AESL');
  const encodedUrl = encodeURIComponent(url);
  // Use only active categories for navigation
  const activeCategories = getActiveCategories();
  return (
    <nav
      className={`grid gtc12 gc1s12 ggap1-00 items-center justify-between pa1-00 ${navBg} ${navText} f1-00 tracked-tight`}
      aria-label="Publications navigation"
    >
      {/* All Publications tile */}
      <div className={`gc1s1 gr1s1 w10-00 h10-00 bg-blue0 br0-50 ba ${navShadow}`}>
        <div className="flex flex-column justify-start w-100 h-100 pa0-50">
          <NavLink to="/publications" end className={({isActive}) => `${navText} ${isActive || isRoot ? 'b' : ''}`}> 
            All Publications
          </NavLink>
        </div>
      </div>

      {/* Categories list split across two columns for balance, similar to projects/practice navs */}
      <div className={`gr1s1 gc2s1 w10-00 h10-00 bg-blue0 br0-50 ba ${navShadow}`}>
        <ul className="pa0-50">
          {activeCategories.slice(0, Math.ceil(activeCategories.length/2)).map((cat) => (
            <li key={cat.name} className="mb0-50">
              <NavLink to={`/publications/${toSlug(cat.name)}`} className={({isActive}) => `${navText} ${isActive ? 'b' : ''}`}>
                {cat.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className={`gr2s1 gr1s1-m gc3s1-m w10-00 h10-00 bg-blue0 br0-50 ba ${navShadow}`}>
        <ul className="pa0-50">
          {activeCategories.slice(Math.ceil(activeCategories.length/2)).map((cat) => (
            <li key={cat.name} className="mb0-50">
              <NavLink to={`/publications/${toSlug(cat.name)}`} className={({isActive}) => `${navText} ${isActive ? 'b' : ''}`}>
                {cat.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Social media icons as child */}
      <div className={`flex flex-column items-center justify-center w10-00 h10-00 bg-blue0 br0-50 ba b--white pa0-50 ${navShadow}`} style={{ borderRadius: '0.5rem' }}>
        <div className="mb0-50 flex items-center justify-center">
          <span className="f1-50 b" aria-label="Share">
            <FiShare2 style={{ color: 'white' }} />
          </span>
        </div>
        <div className="flex ggap0-75 items-center justify-between w-100">
          <a
            href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${text}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Twitter"
          >
            <FaTwitter className="f1-25" style={{ color: 'white' }} />
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on Facebook"
          >
            <FaFacebookF className="f1-25" style={{ color: 'white' }} />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${text}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn"
          >
            <FaLinkedinIn className="f1-25" style={{ color: 'white' }} />
          </a>
          <a
            href={`https://wa.me/?text=${text}%20${encodedUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp"
          >
            <FaWhatsapp className="f1-25" style={{ color: 'white' }} />
          </a>
          <a
            href={`mailto:?subject=${text}&body=${encodedUrl}`}
            aria-label="Share by Email"
          >
            <FaEnvelope className="f1-25" style={{ color: 'white' }} />
          </a>
        </div>
      </div>
      <section className="gr1s1 gc5s1 w16-00 h10-00 bg-white-90 br0-50 blue0 ba b--white pa0-50" aria-label="Publication filters">
        <div className="flex items-center mb1-00">
          <input
            type="text"
            value={q}
            onChange={e => safeSetQ(e.target.value)}
            placeholder="Search publications..."
            className="w-100 pv0-25 ph0-50 br0-25 bn outline-0"
            aria-label="Search publications"
          />
        </div>
        <div className="mb1-00">
          <label className="mr0-50" htmlFor="category-select">Category:</label>
          <select id="category-select" value={cat} onChange={e => safeSetCat(e.target.value)} 
            className="pa0-25 blue0 b" aria-label="Filter by category">
            <option value="All">All</option>
            {
              publicationCategories.map(
                catObj => (
                  <option key={catObj.name} value={catObj.name}
                  >
                    {catObj.name}
                  </option>
                )
              )
            }
          </select>
        </div>
        <div>
          <label className="mr0-50" htmlFor="year-select">Year:</label>
          <select id="year-select" value={year} onChange={e => safeSetYear(e.target.value)} 
            className="pa0-25 blue0 b" aria-label="Filter by year">
            <option value="All">All</option>
            {years && years.map(y => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>
        </div>
      </section>
    </nav>
  )
}

export default AESL_PublicationsNav
