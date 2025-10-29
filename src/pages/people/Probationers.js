import React from 'react'
import { Link } from 'react-router-dom'
import probationers from '../../images/practice/management/management-07.jpeg'
import AESLPeopleNav from '../../components/organisms/navs/AESLPeopleNav.js'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import probationersList from '../../data/probationersList'
import StaffImage from '../../components/shared/StaffImage.js'

const Probationers = () => {

    return (
        <div id=""
        className="min-vh-100 w-100"
        >
        {/* <!-- Page Header --> */}
        <header id="peope_probationers_pageHeader"
            className="grid gtc12
                "
        >
            <figure className="gc1s12"
            >
                <img src={probationers}
                    alt=""
                    className="vh-60 cover"
                />
            </figure>
            <hgroup className="gc1s12 w-100 blue0">
                <h2 className="w-100 h-100
                    pa1-00 ph1-00 pb1-00 mb0-00
                    f3-00 ttu"
                >
                    Probationers
                </h2>
            </hgroup> 
            {/* <!-- Page Navigation -->*/}
            <AESLPeopleNav />
            {/* <!-- Page Navigation -->  */}
        </header>
        {/* <!-- Page Header --> */}

        {/* <!-- Page Main --> */}
        <main id = "probationers_pagemain"
            className="bg-white"
        >
            <div id="l_3:1_probationers" 
                className="grid gtc4 w-100"
            >
                {/* <!-- AESL Probationers Main Start --> */}
                <div id="lc_gc1s3__probationers_pageContent"
                    className="gc1s4 gc1s3-l
                        min-vh-100 ph1-00 mb1-00"
                >   
                    {/* <!-- Consultants --> */}
                    <div id="people_probationers"
                        className="grid gtc12 ggap1-00
                            
                            mb1-00"
                    >
                        {/* <!-- Probationers Description Start --> */}
                        <header id="people_probationers_description" 
                            className="gr1s1 gc2s10"
                        > 
                            <div id=""
                                className="flex ggap1-00 
                                    w-100 blue0
                                    mt6-00 mb4-00 
                                    lh-copy f1-25 tj red"
                            >
                                <div>
                                Probationers Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta nulla asperiores pariatur, fugit autem sed eos blanditiis sint quia possimus ex voluptatem qui incidunt adipisci sit in optio, saepe, sequi debitis cumque at ad quas iure! Saepe quam corrupti magni doloremque numquam minima harum blanditiis sed amet? Porro, temporibus nobis.
                                </div>
                            </div>

                        </header>
                        {/* <!-- Probationers Description End --> */}

                        {/* <!-- Probationers Gallery Start --> */}
                        <div id="people_probationers_gallery"
                            className="gc1s12 blue0"
                        >
                          {probationersList.length === 0 ? (
                            <div className="tc pv4-00 f2-00 fw7 red">No probationers available.</div>
                          ) : (
                            <ul className="gr1s1 gc1s12 
                                grid gtc1 gtc2-s gtc4-m ggap1-00 
                                w-100 
                                blue0"
                            >
                                {probationersList.map((person) => (
                                  <li key={person.id} className="blue0 w-100">
                                    <article className="gr1s1 gc1s3
                                        flex flex-column items-center justify-center"
                                    >
                                        <figure className="shadow-5 mb0-50">
                                                                                        <StaffImage
                                                                                            src={person.thumbnailImage || '/images/placeholder.png'}
                                                                                            alt={person.thumbnailImageAlt || person.name}
                                                                                            className="pa0-50"
                                                                                        />
                                        </figure>
                                        <hgroup 
                                            className="flex flex-column items-center justify-start
                                                pa0-25
                                                blue0"
                                        >
                                            <h5 className="mb0-50">
                                                <Link className="blue0" to={`/people/probationers/${person.slug}`}>{person.title ? `${person.title} ` : ''}{person.name}</Link>
                                            </h5> 
                                            <h6>
                                                {person.role}
                                            </h6>
                                            <h6>
                                                {person.office}
                                            </h6>
                                            <h6>
                                                {person.department}
                                            </h6>
                                        </hgroup>
                                    </article>
                                  </li>
                                ))}
                            </ul>
                          )}
                        </div>
                        {/* <!-- Probationers Gallery End --> */}

                        <article id="misc_gold" 
                            className="gr3s1 gc2s3
                                flex items-center justify-center
                                bg-green h6-00
                            ">
                        </article>

                        <article id="misc_blue" 
                            className="gr4s1 gc6s1
                                flex items-center justify-center
                                bg-blue0 h6-00 
                                ">
                        </article>
                    </div>
                    <SectionFooter 
                      sectionTitle ="Probationers"
                    />
                </div>
                {/* <!-- AESL Probationers Main End -->

                <!-- AESL Probationers Aside Start --> */}
                <div id="lc_gc4s1__probationers_pageAside" 
                    className="gc4s1 
                    blue0 relative"
                >
                    <div className="flex flex-column justify-between
                        min-vh-100 
                        ph2-00 pt6-00
                        sticky top-0"
                    >
                        <ul className="mb1-00 bl bw4 b--green pl2-00 f0-75">
                            <h3 >Probationers</h3>
                            <li className="mb1-00">
                                <a href="#people_probationers_description"
                                    className="blue0 i"
                                    >
                                    AESL Probationers
                                </a>
                            </li>
                            <li className="mb1-00">
                                <a href="#people_probationers_gallery"
                                    className="blue0 i"
                                    >
                                    AESL Probationers List
                                </a>
                            </li>
                        </ul>
        
                        <div className="mb1-00" >
                            <small>Previous</small> <br/>
                            <Link to ="/people/assistant-professionals" 
                                className="mb1-00 blue0 f0-75 b"
                            >
                                Assistant Professionals
                            </Link><br/><br/>
                            <small>Next</small> <br/>
                            <Link to ="/people/service-personnel" 
                                className="mb1-00 blue0 f0-75 b"
                            >
                                Service Personnel
                            </Link> 
                        </div>
                    </div>
                </div>
                {/* <!-- AESL Probationers Aside End --> */}
            </div>
        </main>
        {/* <!-- Page Main -->  */}
        {/* <!-- Page Footer -->   */}
        <AESLPageFooter 
            pageTitle = "Probationers"
        />
        {/* <!-- Page Footer -->  */}
    </div>
    )
}

export default Probationers