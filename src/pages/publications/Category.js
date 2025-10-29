import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner';
import PageMeta from '../../components/molecules/seo/PageMeta';
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter';
import { publications as allPublications, publicationCategories } from '../../data/publications';
import headerImage from '../../images/publications/00.jpg';
import { FiDownload, FiExternalLink, FiSearch } from 'react-icons/fi';
import AESL_PublicationsNav from '../../components/organisms/navs/AESL_PublicationsNav';
import ShareButtons from '../../components/molecules/social/ShareButtons';

const slugToLabel = {
  'technical-reports': 'Technical Reports',
  'financial-reports': 'Financial Reports',
  'articles': 'Articles',
  'white-papers': 'White Papers',
  'reviews': 'Reviews',
};
function PublicationsCategory() {
  const { category } = useParams();
  // Filter state
  const [q, setQ] = useState('');
  const [year, setYear] = useState('All');
  const [cat, setCat] = useState(category ? slugToLabel[category] || 'All' : 'All');

  // Make header and overview reactive to filter
  const currentLabel = cat === 'All' ? 'All Publications' : cat;
  const currentOverview = cat === 'All'
    ? null
    : publicationCategories.find(catObj => catObj.name === cat)?.overview;

  // UI constants
  const headerBg = 'bg-green';
  const navShadow = 'shadow-green';
  const footerText = 'white-90';
  const navBg = 'bg-blue0';
  const footerBg = 'bg-blue0';

  useEffect(() => {
    document.title = `${currentLabel} | AESL`;
  }, [currentLabel]);

  // Update 'cat' when the route param 'category' changes
  useEffect(() => {
    if (category && slugToLabel[category]) {
      setCat(slugToLabel[category]);
    } else {
      setCat('All');
    }
  }, [category]);

  // Reset year filter to 'All' only when switching to a specific category, not when switching to 'All Publications'
  useEffect(() => {
    const isAll = cat === 'All' || cat === 'All Publications';
    if (!isAll) {
      setYear('All');
    }
  }, [cat]);

  // Filter publications by category, year, and search query
  const filtered = useMemo(() => {
    let pubs = allPublications;
    if (cat !== 'All') pubs = pubs.filter(p => p.category === cat);
    if (year !== 'All') pubs = pubs.filter(p => String(p.year) === String(year));
    if (q) pubs = pubs.filter(p => (p.title + p.description).toLowerCase().includes(q.toLowerCase()));
    return pubs;
  }, [cat, year, q]);

  // Get all years for dropdown
  const years = useMemo(() => {
    if (cat === 'All' || cat === 'All Publications') {
      // Show all years for 'All Publications'
      const yearList = allPublications.map(p => p.year).filter(y => y !== undefined && y !== null);
      const set = new Set(yearList);
      return Array.from(set).sort((a, b) => b - a);
    } else {
      // Show only years for selected category
      const yearList = allPublications.filter(p => p.category === cat).map(p => p.year).filter(y => y !== undefined && y !== null);
      const set = new Set(yearList);
      return Array.from(set).sort((a, b) => b - a);
    }
  }, [cat, allPublications]);

  // Meta tags for SEO/social
  const meta = {
    title: 'Publications | AESL',
    description: 'Browse AESL publications by year, category, and more. Download or view online.',
    image: headerImage,
    url: window.location.href,
  };

  // DEBUG: Log filter state and years array for all publications
  useEffect(() => {
    if (cat === 'All' || cat === 'All Publications') {
      // eslint-disable-next-line no-console
      console.log('DEBUG (All Publications):', { cat, year, years });
    }
  }, [cat, year, years]);

  return (
    <>
      <PageMeta {...meta} />
      <div id="PublicationsCategoryPage">
        {/* DEBUG: Show filter state and years array for all publications */}
        {(cat === 'All' || cat === 'All Publications') && (
          <div style={{background: '#fffbe6', color: '#333', padding: '0.5rem', marginBottom: '1rem', fontSize: '0.95rem', border: '2px solid #f7c948'}}>
            <strong>DEBUG (All Publications):</strong> cat: {String(cat)} | year: {String(year)} | years: [{years.join(', ')}]
          </div>
        )}
        <header className={headerBg}>
          <CategoryHeaderBanner image={headerImage} title={currentLabel} />
          <AESL_PublicationsNav
            navShadow={navShadow}
            navText={footerText}
            navBg={navBg}
            q={q}
            setQ={setQ}
            cat={cat}
            setCat={setCat}
            year={year}
            setYear={setYear}
            years={years} // <-- Pass all years here
          />
          {currentOverview && (
            <div className="bg-white pa2-00 ba blue0 b--black-10 br0-25 pv4-00">
              <h2 className="f2-00 mb1-00">{currentLabel} Overview</h2>
              {currentOverview.map((para, idx) => (
                <p key={idx} className="f1-00 gray0 f1-50 lh-copy">{para}</p>
              ))}
            </div>
          )}
        </header>
        <main className="ph1-00">
          <section className="grid gtc12 ggap1-00 pv1-00">
            {/* Results */}
            <section className="gc1s12 grid gtc12 ggap1-00">
              {filtered.length === 0 ? (
                <div className="gc1s12 pa2-00 tc">
                  <h3 className="mt0-00">No {currentLabel?.toLowerCase() || ''} found</h3>
                  <p className="gray">Try changing the year or search term.</p>
                </div>
              ) : (
                filtered.map(p => (
                  <article key={p.id} className="bg-white ba b--black-10 br0-25 overflow-hidden grid gtc12 gc1s12">
                    <figure className="gr1s1 gc1s5 bg-blue1">
                      <img src={p.thumbnail} alt={`${p.title} — ${p.category}`} className="w-100 h-100 cover" loading="lazy" decoding="async" />
                    </figure>
                    <div className="gr1s1 gc6s7 pa1-00 flex flex-column justify-between">
                      <div>
                        <h3 className="mt0-00 mb0-25">{p.title}</h3>
                        <div className="f0-875 gray mb0-50">{p.category} • {p.year}</div>
                        {p.description && <p className="lh-copy mt0-00">{p.description}</p>}
                      </div>
                      <div className="flex ggap0-50 mt1-00">
                        {p.fileUrl && (
                          <a href={p.fileUrl} target="_blank" rel="noopener noreferrer" className="ba br0-25 pa0-50 flex items-center">
                            <FiDownload className="mr0-25" /> Download
                          </a>
                        )}
                        {p.externalUrl && (
                          <a href={p.externalUrl} target="_blank" rel="noopener noreferrer" className="ba br0-25 pa0-50 flex items-center">
                            <FiExternalLink className="mr0-25" /> View online
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                ))
              )}
            </section>
          </section>
        </main>
        <footer>
          <AESLPageFooter pageTitle={currentLabel} textclassName={footerText} bgclassName={footerBg} />
        </footer>
      </div>
    </>
  );
}

export default PublicationsCategory;
