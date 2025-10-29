import StaffImage from '../../../components/shared/StaffImage';
import React from 'react';
import { useParams } from 'react-router-dom';
import consultantList from '../../../data/consultantList';
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter';
import SectionFooter from '../../../components/organisms/footers/SectionFooter';

const ConsultantDetails = () => {
    const { slug } = useParams();
    const consultant = consultantList.find(c => c.slug === slug);

    if (!consultant) {
        return <div className="min-vh-100 w-100 pa4-00">Consultant not found.</div>;
    }

    return (
        <div id="" className="min-vh-100 w-100 bg-black-10">
            <header id="consultant_pageHeader" className="grid gtc12 bg-white">
                <figure className="gc1s12">
                    <img src={consultant.thumbnailImage || consultant.image || '/images/placeholder.png'} 
                        alt={consultant.thumbnailImageAlt || consultant.imageAlt || consultant.name} 
                        className="vh-50 contain"
                    />
                </figure>
                <hgroup className="gc1s12 w-100 blue0">
                    <h2 className="w-100 h-100 pa1-00 pb1-00 mb0-00 f3-00">
                        {consultant.name}
                    </h2>
                </hgroup>
            </header>
            <main id="consultant-pagemain">
                <div id="l_3:1" className="grid gtc4 ph1-00">
                    <div id="lc_gc1s3__pageMain--Consultant" className="gc1s3 min-vh-100 mb1-00">
                        <div id="consultants_summary" className="pt2-00">
                            <div id="pageNav" className="grid gtc12 gc1s12 ggap1-00 white-90 mb2-00 tracked-tight">
                                <article id="people_nav1" className="gr1s1 gc1s1 h10-00 w10-00 f1-00 bg-blue0">
                                    <hgroup className="w-100 h-100 pa1-00 bg-green">
                                        <h3>CV</h3>
                                    </hgroup>
                                </article>
                                <article id="brief_summary" className="gr1s1 gc2s11 w-100 pa0-50 bg-blue0">
                                    <p className="mb1-50 f1-25">
                                        {consultant.bio?.summary || 'No bio available.'}
                                    </p>
                                    <p className="mb0-00">
                                        {consultant.name}
                                    </p>
                                </article>
                            </div>
                        </div>
                        <div id="consultant" className="grid gtc12 ggap1-00 mb2-00">
                            <div id="consultants_gallery" className="gr1s1 gc1s12 grid gtc12 ggap1-00 mb2-00 white-90">
                                <article className="gr1s1 gc1s6 pa2-00 white-90 bg-blue1">
                                    <figure className="shadow-5 bg-blue2 mb0-50">
                                                                                <StaffImage
                                                                                    src={consultant.thumbnailImage || consultant.image || '/images/placeholder.png'}
                                                                                    alt={consultant.thumbnailImageAlt || consultant.imageAlt || consultant.name}
                                                                                    className="pa0-50 bg-blue0"
                                                                                />
                                    </figure>
                                    <hgroup className="flex flex-column w-100 bg-blue0 white-90 pa0-50">
                                        <h5 className="mb0-50">{consultant.role}</h5>
                                        <h6>{consultant.department}</h6>
                                    </hgroup>
                                </article>
                            </div>
                            <article className="gr2s1 gc1s12">
                                <div className="flex ggap1-00 w-100 tj">
                                    <div className="w-50">
                                        <p>{consultant.office}</p>
                                        <p>{consultant.department}</p>
                                    </div>
                                    <div className="w-50">
                                        <p>{consultant.role}</p>
                                    </div>
                                </div>
                            </article>
                            <section className="mb1-00">
                                <hgroup id="consultants_related_projects" className="gc1s12 w-100 blue0">
                                    <h2 className="w-100 h-100 pv1-00 pb1-00 mb0-00 f2-00 ttu">
                                        Achievements
                                    </h2>
                                </hgroup>
                                <ul className="pl3-00">
                                    {(consultant.bio?.achievements && consultant.bio.achievements.length > 0)
                                        ? consultant.bio.achievements.map((ach, idx) => <li key={idx} className="mb0-50">{ach}</li>)
                                        : <li>No achievements listed.</li>}
                                </ul>
                            </section>
                            <SectionFooter sectionTitle="Consultant Details" />
                        </div>
                        <aside className="gc4s1 blue0 relative">
                            <div className="flex flex-column justify-start min-vh-100 pl1-00 sticky top-0">
                                <h2 className="ttu ma0-50 pv1-00 f1-00">
                                    <a href="/consultants">Back To Consultants</a>
                                </h2>
                                <ul className="mb1-00 bl bw4 b--green pl1-00 f0-75">
                                    <h3>On this page</h3>
                                    <li className="mb1-00 i"><a href="#consultant_pageHeader" className="blue0">Consultant Summary</a></li>
                                    <li className="mb1-00 i"><a href="#consultants_gallery" className="blue0">Consultant's Gallery</a></li>
                                    <li className="mb1-00 i"><a href="#consultant" className="blue0">Consultant's Description</a></li>
                                    <li className="mb1-00 i"><a href="#consultants_related_projects" className="blue0">Achievements</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
            <AESLPageFooter pageTitle="Consultant Details" />
        </div>
    );
};

export default ConsultantDetails;