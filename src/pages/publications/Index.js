import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AESLPublicationsNav from '../../components/organisms/navs/AESL_PublicationsNav'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import PageMeta from '../../components/molecules/seo/PageMeta'
import publicationsHeader from '../../images/publications/00.jpg'
import { PiBookBold } from 'react-icons/pi'
import { FiDownload, FiExternalLink, FiSearch } from 'react-icons/fi'
import { publicationCategories, publications as allPublications } from '../../data/publications'

const Index = () => {
    const [q, setQ] = useState('');
    const [category, setCategory] = useState('All');
    const [year, setYear] = useState('All');

    useEffect(() => {
        document.title = 'Publications | AESL';
    }, []);

    const years = useMemo(() => {
        const ys = Array.from(new Set(allPublications.map(p => p.year))).sort((a,b) => b - a);
        return ys;
    }, []);

    // Pick a random header background color from brand palette once per mount
    // Match header background and nav shadow color
    // Use green for publications header to match people page
    // Match technical reports and reviews header style
    const headerBg = 'bg-green';
    const navShadow = 'shadow-green';
    const footerText = 'white-90';
    const navBg = 'bg-blue0';
    const footerBg = 'bg-blue0';

    const filtered = useMemo(() => {
        return allPublications.filter(p => {
            const matchesQ = q
                ? (p.title?.toLowerCase().includes(q.toLowerCase()) || p.description?.toLowerCase().includes(q.toLowerCase()))
                : true;
            const matchesCat = category === 'All' ? true : p.category === category;
            const matchesYear = year === 'All' ? true : String(p.year) === String(year);
            return matchesQ && matchesCat && matchesYear;
        });
    }, [q, category, year]);

    const meta = {
        title: 'Publications | AESL',
        description: 'Browse AESL publications including technical reports, reviews, and more.',
        image: '/images/_partials/logos/aesl_logo.png',
        url: typeof window !== 'undefined' ? window.location.href : 'https://aesl.com/publications'
    };
    return (
        <>
            <PageMeta {...meta} />
            <div id="PublicationsPage">
            {/* Page Header Start */}
            <header className={headerBg}>
                <CategoryHeaderBanner 
                    image={publicationsHeader}
                    title='publications'
                    Icon={<PiBookBold />}
                />
                <AESLPublicationsNav navShadow={navShadow} navText={footerText} navBg={navBg} />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main className="ph1-00">
                <section className="grid gtc12 ggap1-00 pv1-00">
                    {/* Controls */}
                    <header className="gc1s12 gc2s10-m gr1s1 f1-25-s f1-50-m pv4-00 blue0 lh-copy tracked tj">
                        <p>
                            At Architectural and Engineering Services Limited, we are dedicated to sharing knowledge, promoting innovation, and expanding the progress of the engineering profession. Publications features a carefully curated collection of Technical Reports, Financial Reports, Articles related to our Institution, White Papers, and Reviews. We are proud to present these works to you and confident that they serve as a fine reflection of our commitment to excellence, our culture of continuous learning, and our habit of always being at the leading edge of engineering and infrastructure development.
                        </p>
                    </header>
                    
                    {/* Publications Gallery */}
                    <div className="gc1s12 gr3s1">
                        {filtered.length === 0 ? (
                            <div className="tc pa2-00">No publications found.</div>
                        ) : (
                            <ul className="grid gtc1 gtc2-s gtc3-l ggap1-00 pa0 list blue0">
                                {filtered.map(pub => (
                                    <li key={pub.id || pub.title} className="ba b--black-10 br0-25 bg-white shadow-2 pa1-00 flex flex-column justify-between">
                                        <figure className="mb1-00 tc">
                                            <img src={pub.thumbnail} alt={pub.title} className="h8-00 w-100 contain br0-25" />
                                        </figure>
                                        <hgroup className="mb1-00 tc">
                                            <h3 className="f1-00 mb0-25">{pub.title}</h3>
                                            <h4 className="f0-75 gray0 mb0-25">{pub.category} &bull; {pub.year}</h4>
                                        </hgroup>
                                        <p className="f0-90 gray0 mb1-00">{pub.description}</p>
                                        <div className="flex justify-center items-center ggap1-00">
                                            {pub.fileUrl && (
                                                <a href={pub.fileUrl} target="_blank" rel="noopener noreferrer" className="pa0-50 ba br0-25 bg-green white-90 flex items-center">
                                                    <FiDownload className="mr0-25" /> Download
                                                </a>
                                            )}
                                            {pub.externalUrl && (
                                                <a href={pub.externalUrl} target="_blank" rel="noopener noreferrer" className="pa0-50 ba br0-25 bg-blue0 white-90 flex items-center">
                                                    <FiExternalLink className="mr0-25" /> View Online
                                                </a>
                                            )}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </section>
            </main>
            {/* Page Main End */}
            {/* Page Footer Start */}
            <footer>
                <AESLPageFooter pageTitle='Publications' textclassName={footerText} bgclassName={footerBg} />
            </footer>
            {/* Page Footer End */}
        </div>
    </>
                                    );
}

export default Index;