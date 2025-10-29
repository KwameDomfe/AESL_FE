import management from '../../../images/practice/management/00.jpeg'
import React, { useEffect, useState } from 'react';

import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import { Link } from 'react-router-dom'
import { deputyManagingDirectors, managingDirectorImages, managingDirector } from '../../../data/managementInfo'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
import ManagementProfileCard from '../../../components/molecules/cards/ManagementProfileCard'
import { apCardsConfig, engCardsConfig, admCardsConfig, rcCardsConfig } from '../../../data/managementLayout'
const Management = () => {
    const [modalImage, setModalImage] = useState(null);
    const [modalAlt, setModalAlt] = useState('');

    // heads.architectureAndPlanning referenced via externalized layout configs
    const dmd = deputyManagingDirectors;

    // Declarative card configurations moved to src/data/managementLayout.js
    useEffect(() => {
        document.title = 'Management | AESL';
    }, []);

    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {management}
                    title = 'Management'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main className="ph1-00"
            >
                <div className="grid gtc4"
                >
                    <div id="pageDetails"
                        className="gc1s3
                            mb1-00 min-vh-100"
                    >   
                        {/* <!-- Practice Management --> */}
                        <div 
                            className=""
                        >
                            {/* <!-- Overview --> */}
                            <div id="management--overview"
                                className="grid gtc12 ggap1-00"
                                style={{ scrollMarginTop: '96px' }}
                            >
                                {/* <!-- Overview Description --> */}
                                <article 
                                    className="gr1s1 gc1s12 ggap1-00 flex"
                                >
                                    <div className="flex flex-column ggap1-00 
                                        pv4-00 mh4-00
                                        tj blue0 lh-copy f1-25"
                                    >
                                            <p>
                                            The management team is responsible for driving innovation, maintaining high standards of quality, and providing exceptional architectural and engineering services to clients. 
                                            </p>
                                            <p>
                                            They provide strategic direction and oversee the day-to-day activities of the company, working closely with employees to ensure projects are executed successfully, budgets and timelines are adhered to, and client satisfaction is achieved.
                                            </p>
                                    </div>
                                </article>
                                {/* <!-- Overview Description --> */}
                            </div>
                            {/* <!-- Overview --> */}

                            {/* <!--Managing Director --> */}
                            <div id="management--managingDirector"
                                className="gr4s1 gc1s12
                                    grid gtc12 ggap1-00
                                    mb3-00"
                                style={{ scrollMarginTop: '96px' }}
                            >
                                <header 
                                    className="gr1s1 gc1s12 
                                        w-100
                                        white-90
                                        bg-gray sticky top-0 z-5" 
                                >
                                    <hgroup 
                                        className=""
                                    >
                                        <h2 className="pv1-00 pl1-00
                                            f2-00 ttu mb0-00"
                                        >
                                            Managing Director
                                        </h2>     
                                    </hgroup> 
                                </header>

                                <article 
                                    className="gr4s1 gc1s12
                                        flex flex-column justify-between
                                        pa2-00 
                                        bg-blue0 white-90"
                                >
                                    <h2 className= "mb0-50">{managingDirector.name}</h2>
                                    <h3 className= "mb0-50">{managingDirector.title}</h3>
                                    {managingDirector.email && (
                                        <p className="mb1-00 f0-875"><a className="white-90" href={`mailto:${managingDirector.email}`}>{managingDirector.email}</a></p>
                                    )}
                                    <p className="lh-copy">
                                        {managingDirector.quote?.text || 'AESL provides strategic direction and oversight to ensure quality service delivery and client satisfaction.'}
                                    </p>
                                    <div>
                                        <Link to ="/practice/management/managing-director"
                                            className="ba br0-25 dib mt2-00 white-90 pa0-50"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </article>
                                
                                <article 
                                    className="gr2s1 gc1s12
                                        flex items-end justify-center
                                        relative
                                        white-90"
                                >
                                    <figure className="shadow-5 w-100">
                                        <img loading="lazy" decoding="async" src={managingDirector.image}
                                            alt={`${managingDirector.name} — ${managingDirector.title}`}
                                            className="pa0-50 w-100" style={{ cursor: 'pointer' }}
                                            onClick={() => { setModalImage(managingDirector.image); setModalAlt(`${managingDirector.name} — ${managingDirector.title}`); }}
                                        /> 
                                    </figure>
                                    <hgroup 
                                        className="flex flex-column justify-start 
                                        pa0-50 ma2-00
                                        bg-gray 
                                        f0-75 ttu fw6
                                        ba
                                        absolute
                                                ">
                                        <h3>
                                            {managingDirector.quote?.author || managingDirector.name}
                                        </h3>
                                        <span>
                                            {managingDirector.title}
                                        </span>
                                    </hgroup> 
                                </article>

                                <article id="managing-director-message" 
                                    className="gr5s1 gc1s12
                                        flex items-end justify-center
                                        pa4-00
                                        white-90"
                                >
                                    <hgroup 
                                        className="flex flex-column justify-start 
                                        pa2-00
                                        bg-gray 
                                        f1-25 fw4
                                        ba
                                        lh-copy"
                                    >
                                        <h2>
                                            Managing Director's Message
                                        </h2>
                                        <p className=" tts">
                                        The achievement so far was against numerous odds and challenges that the construction industry encountered during the recent years.
                                        </p>
                                        <p className=" tts">
                                        The weak growth in the global economy which significantly affected the Ghanaian economy, resulted in the Government of Ghana reducing expenditures, particularly in construction works throughout the country.
                                        </p>    
                                        <p className=" tts">
                                        Nevertheless, number of initiatives were undertaken including the Company’s strategic decision to adopt building information modelling (BIM) for project delivery. This is not only to improve staff skills but also to ensure quality service delivery to our	clients.
                                        </p>
                                        <p className=" tts">
                                        Our major projects for the year including provision of administrative blocks and staff accommodation for the Six New Regions, the Foundry and numerical Tooling Centre, and the Renovation of Jubilee House and the national sports stadia have all been handled with great client satisfaction and continues to be landmark for the company.
                                        </p>    
                                        <p className=" tts">
                                        The conditions of service for our staff are improved to ensure a motivated staff. We want to maintain AESL‘s leadership in the industry and ensure that it a place where people aspire to be to help build places of enduring values.
                                        </p>
                                    
                                    </hgroup> 
                                </article>
            
                                <article 
                                    className="gr3s1 gc1s4
                                    flex items-end justify-center
                                    relative
                                    white-90"
                                >
                                    <hgroup 
                                        className="flex flex-column justify-start 
                                            pa0-50 ma2-00
                                            bg-gray 
                                            f0-75 ttu fw6
                                            ba
                                            absolute
                                                ">
                                        <p>
                                            Managing Director at official engagement
                                        </p>    
                                        <span>
                                            Event highlight
                                        </span>
                                    </hgroup> 
                                    <figure className="shadow-5 w-100">
                                            <img loading="lazy" decoding="async" src={managingDirector.image}
                                                alt="AESL management team at an event"
                                            className="w-100
                                                ba b--gold" style={{ cursor: 'pointer' }}
                                                onClick={() => { setModalImage(managingDirector.image); setModalAlt('AESL management team at an event'); }}
                                            />
                                    </figure>
                                </article>

                                <article 
                                    className="gr3s1 gc5s4
                                        flex items-end justify-center
                                        relative
                                        white-90"
                                >
                                    <hgroup 
                                        className="flex flex-column justify-start 
                                            pa0-50 ma2-00
                                            bg-gray 
                                            f0-75 ttu fw6
                                            ba
                                            absolute"
                                    >
                                        <h3>
                                            MD with President, Hon. Minister for Local Govt
                                        </h3>    
                                        <span>
                                            Official photo
                                        </span>    
                                    </hgroup> 
                                    <figure >
                                        <img loading="lazy" decoding="async" src={managingDirectorImages.md07}
                                            alt="MD with President and Hon. Minister for Local Government"
                                            className="w-100
                                                ba b--gold 
                                                " style={{ cursor: 'pointer' }}
                                            onClick={() => { setModalImage(managingDirectorImages.md07); setModalAlt('MD with President and Hon. Minister for Local Government'); }}
                                        /> 
                                    </figure>
                                </article>

                                <article id="a" 
                                    className="gr3s1 gc9s4
                                        flex items-end justify-center
                                        bg-gold relative
                                        white-90"
                                >
                                    <hgroup 
                                        className="flex flex-column justify-start 
                                            pa0-50 ma2-00
                                            bg-gray 
                                            f0-75 ttu fw6
                                            ba
                                            absolute"
                                    >
                                                    
                                        <h3>
                                            Managing Director engagement
                                        </h3>    
                                        <span>
                                            Event highlight
                                        </span>
                                    </hgroup> 
                                    <figure>
                                        <img loading="lazy" decoding="async" src={managingDirector.image}
                                            alt="AESL management team at an event"
                                            className="w-100
                                                ba b--gold 
                                                "
                                        /> 
                                    </figure>
                                </article>
                            </div>
                            {/* <!--Managing Director --> */}
                            
                            {/* <!-- Deputy Managing Directors Start--> */}
                            <div id="management--deputyManagingDirectors"
                                style={{ scrollMarginTop: '96px' }}
                            >
                                <header 
                                    className="gr1s1 gc1s12 
                                        w-100
                                        bg-gray mb1-00
                                        white-90 sticky top-0 z-5" 
                                >
                                    <hgroup 
                                        className=""
                                    >
                                        <h2 className="pv1-00 pl1-00 mb0-00
                                            f2-00 ttu"
                                        >
                                            Deputy Managing Directors
                                        </h2>     
                                        
                                    </hgroup> 
                                </header>

                                <div id="deputy-managing-director-architecture-and-planning"
                                    className="gr4s1 gc1s12
                                        grid gtc12 ggap1-00
                                        white-90 mb3-00"
                                >
                                    <article 
                                        className="gr3s1 gc1s12
                                            flex flex-column justify-between
                                            relative 
                                            w-100 h-100
                                            pa2-00 ph2-00
                                            bg-blue0"
                                    >
                                        <h2 className= "mb0-50">
                                            {dmd[0].name}
                                        </h2>
                                        <h3 className= "mb0-50">
                                            <span className= "mb0-50">
                                                {dmd[0].title}
                                            </span>
                                        </h3>
                                        {dmd[0].email && (
                                            <p className="mb1-00 f0-875"><a className="white-90" href={`mailto:${dmd[0].email}`}>{dmd[0].email}</a></p>
                                        )}
                                        
                                        <p className ="red">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos veritatis ipsa repudiandae nisi, fugit nulla corporis reprehenderit dolores dolorum vel, mollitia excepturi laborum aperiam voluptates perferendis esse quo voluptate rem.
                                        </p>
                                        <div>
                                            <Link to={dmd[0].link}
                                                className="ba br0-25 dib mt2-00 white-90 pa0-50"
                                            >
                                                    Read More
                                            </Link>
                                        </div>
                                    </article>
                                
                                    <article 
                                        className="gr2s1 gc1s12
                                            flex items-center justify-center
                                            relative"
                                    >
                                        <figure className="shadow-5 w-100">
                                            <img loading="lazy" decoding="async" src={dmd[0].image}
                                                alt={`Deputy Managing Director — ${dmd[0].title} — ${dmd[0].name}`}
                                                className="pa0-50 w-100 vh-50 cover"
                                            /> 
                                        </figure>
                                    </article>
                                </div>

                                <div id="deputy-managing-director-engineering"
                                    className="gr4s1 gc1s12
                                        grid gtc12 ggap1-00
                                        white-90 mb3-00"
                                >
                                    <article 
                                        className="gr3s1 gc1s12
                                            flex flex-column justify-between
                                            relative 
                                            w-100 h-100
                                            pa2-00 ph2-00
                                            bg-blue0"
                                    >
                                        <h2 className= "mb0-50">{dmd[1].name}</h2>
                                        <h3 className= "mb0-50">(<span className= "mb0-50">{dmd[1].title}</span>)</h3>
                                        {dmd[1].email && (
                                            <p className="mb1-00 f0-875"><a className="white-90" href={`mailto:${dmd[1].email}`}>{dmd[1].email}</a></p>
                                        )}
                                        
                                        <p className ="red">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem rerum nihil quidem corrupti quam. Modi magnam ipsam sunt ullam quasi, tempora voluptatibus corrupti neque odio perspiciatis fugit et enim aliquid.</p>
                                        <div>
                                        <Link to={dmd[1].link}
                                            className="ba br0-25 dib mt2-00 white-90 pa0-50">
                                                Read More
                                        </Link>
                                        </div>
                                    </article>
                                    
                                    <article 
                                        className="gr2s1 gc1s12
                                            flex items-center justify-center
                                            relative"
                                    >
                                        <figure className="shadow-5 w-100">
                                            <img loading="lazy" decoding="async" src={dmd[1].image}
                                                alt={`Deputy Managing Director — ${dmd[1].title} — ${dmd[1].name}`}
                                                className="pa0-50 vh-50 cover w-100"
                                            />
                                        </figure>
                                    </article>
                                </div>

                                <footer>

                                </footer>
                            </div>
                            {/* <!-- Deputy Managing Directors End-->    */}
            
                            {/* <!-- Heads of Departments -->    */}
                            <div id="management--headsOfDepartments" style={{ scrollMarginTop: '96px' }}>
                                <header 
                                    className="gr1s1 gc1s12 
                                        w-100
                                        bg-gray white-90 sticky top-0 z-5" 
                                >
                                    <hgroup 
                                        className=""
                                    >
                                        <h2 className="pv1-00 pl1-00 mb0-00
                                            f2-00 ttu"
                                        >
                                        Heads of Departments
                                        </h2>       
                                    </hgroup> 
                                </header> 
                                {/* <!-- Architecture and Planning Start--> */}
                                <div id="heads--architecture-and-planning" 
                                    className="grid gtc12 
                                        mb2-00"
                                >   
                                    <header 
                                        className="gc1s12 gr1s1 
                                        pa1-00 
                                        bg-white sticky top-0 z-4"
                                    >
                                        <h2 className="ma0-00 pb1-00 bb"> 
                                            Architecture and Planning
                                        </h2>
                                    </header>   
                                    {apCardsConfig.map(({ id, data, wrapperClass, textClass, imageClass, imageClassName, containerAs, altText }) => (
                                        <div id={id} className={wrapperClass} key={id}>
                                            <ManagementProfileCard
                                                name={data.name}
                                                subtitle={data.role}
                                                email={data.email}
                                                link={data.link}
                                                image={data.image}
                                                textclassName={textClass}
                                                imageclassName={imageClass}
                                                imageClassName={imageClassName}
                                                containerAs={containerAs}
                                                altText={altText}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* <!--Architecture and Planning End --> */}
                            
                                {/* <!-- Engineering Start -->    */}
                                <div id="heads--engineering" 
                                    className="grid gtc12 ggap2-00 mb2-00"
                                >
                                    <header className="bg-white gc1s12 gr1s1 pa1-00 sticky top-0 z-4">
                                        <h2 className="ma0-00 pb1-00 bb"> Engineering</h2>
                                    </header>
                                
                                    {engCardsConfig.map(({ id, data, wrapperClass, textClass, imageClass, imageClassName, containerAs, altText }) => (
                                        <div id={id} className={wrapperClass} key={id}>
                                            <ManagementProfileCard
                                                name={data.name}
                                                subtitle={data.role}
                                                email={data.email}
                                                link={data.link}
                                                image={data.image}
                                                textclassName={textClass}
                                                imageclassName={imageClass}
                                                imageClassName={imageClassName}
                                                containerAs={containerAs}
                                                altText={altText}
                                            />
                                        </div>
                                    ))}
                                </div>
                                {/* <!-- Engineering End -->  */}
                
                                {/* <!-- Admistratvie Heads - Headquarters Start -->   */}
                                <div id="heads--administrative" 
                                    className="grid gtc12 ggap2-00 mb2-00"
                                >
                                    <header className="bg-white gc1s12 gr1s1 pa1-00 sticky top-0 z-4">
                                        <h2 className="ma0-00 pb1-00 bb">Administrative</h2>
                                    </header>
                                
                                    {admCardsConfig.map(({ id, data, wrapperClass, textClass, imageClass, imageClassName, containerAs, altText }) => (
                                      <div id={id} className={wrapperClass} key={id}>
                                        <ManagementProfileCard
                                          name={data.name}
                                          subtitle={data.role}
                                          link={data.link}
                                          image={data.image}
                                          altText={altText}
                                          email={data.email}
                                          textClass={textClass}
                                          imageClass={imageClass}
                                          imageClassName={imageClassName}
                                          containerAs={containerAs}
                                        />
                                      </div>
                                    ))}
                                    {/* <!-- Head of Department End-->    */}
                                </div>
                                {/* <!-- Admistratvie Heads - Headquarters End -->  */}
                
                                {/* <!-- Admistratvie Heads - Regional Consultants Start -->   */}
                                <div id="heads--regional-consultants" 
                                    className="grid gtc12 ggap2-00"
                                    style={{ scrollMarginTop: '96px' }}
                                >
                                    <header 
                                    className="gr1s1 gc1s12 
                                        w-100
                                        bg-gray white-90 sticky top-0 z-5" 
                                >
                                    <hgroup 
                                        className=""
                                    >
                                        <h2 className="pv1-00 pl1-00 mb0-00
                                            f2-00 ttu"
                                        >
                                        Regional Consultants
                                        </h2>       
                                    </hgroup> 
                                </header> 
                                    {rcCardsConfig.map(({ id, data, wrapperClass, textClass, imageClass, imageClassName, containerAs }) => (
                                        <div id={id} className={wrapperClass} key={id}>
                                            <ManagementProfileCard
                                                name={data.name}
                                                subtitle={data.region}
                                                email={data.email}
                                                link={data.link}
                                                image={data.image}
                                                textclassName={textClass}
                                                imageclassName={imageClass}
                                                imageClassName={imageClassName}
                                                containerAs={containerAs}
                                                altText={`${data.name} — Regional Consultant, ${data.region}`}
                                            />
                                        </div>
                                    ))}
                                    
                                    {/* <!-- Head of Department End-->    */}
                                </div>
                                {/* <!-- Admistratvie Heads - Regional Consultants End -->  */}
                            </div>
                            {/* <!-- Heads of Departments --> */}

                        </div>
                        {/* <!-- Practice Management --> */}
                    </div>

                    <div id="pageNav" 
                        className="gc4s1 
                            w-100 blue0 relative"
                        role="navigation"
                        aria-label="Management page navigation">
                        <div className="flex flex-column justify-between
                            min-vh-100 
                            ph2-00 pb1-00
                            pt5-00
                            sticky top-0"
                        >
                            <div>
                                <Link to = "/practice"
                                    className="dib mb1-00 
                                        f1-25 blue0 ttu fw6"
                                >
                                    Back to Practice
                                </Link>
                                <h3 className="mt1-00">Management</h3>
                                <ul className="mb1-00 bl bw4 pa1-00 b--gray gray f0-75">
                                    <li className="mb1-00 i">
                                        <a href="#management--overview"
                                            className="gray"
                                        >
                                            Management
                                        </a>
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#management--managingDirector"
                                            className="gray"
                                        >
                                            Managing Director
                                        </a>
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#management--deputyManagingDirectors"
                                            className="gray"
                                        >
                                            Deputy Managing Directors
                                        </a>
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#management--headsOfDepartments"
                                            className="gray"
                                        >
                                            Heads of Departments
                                        </a>
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#heads--regional-consultants"
                                            className="gray"
                                        >
                                            Regional Consultants
                                        </a>
                                    </li>
                                </ul>
                            </div> 

                            <div className="h6-00 gray">
                                <small>Previous</small><br/>
                                <Link to ="/practice/corporate-governance" 
                                    className="mb1-00 f0-75 gray b"
                                >
                                    AESL Corporate Governance
                                </Link> <br/><br/>
                                <small>Next</small><br/>
                                <Link to ="/practice/services" 
                                    className="mb1-00 f0-75 gray b"
                                >
                                    AESL Services
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>

                {/* Modal for image display */}
                {modalImage && (
                    <div className="fixed top-0 left-0 w-100 h-100 flex items-center justify-center bg-black-80 z-9999" onClick={() => setModalImage(null)}>
                        <div className="relative bg-white pa2-00 br0-25 shadow-5" style={{ maxWidth: '90vw', maxHeight: '90vh' }}>
                            <img src={modalImage} alt={modalAlt} style={{ maxWidth: '80vw', maxHeight: '80vh' }} />
                            <button className="absolute top-0 right-0 pa0-50 bg-black white br0-25" style={{ cursor: 'pointer' }} onClick={() => setModalImage(null)}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </main>
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageTitle="Management"/>
            {/* Page Footer End */}
        </div>
    )
}

export default Management