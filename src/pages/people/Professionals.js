import React from 'react'
import { Link } from 'react-router-dom'
import professionals from '../../images/practice/management/management-07.jpeg'
import AESLPeopleNav from '../../components/organisms/navs/AESL_PeopleNav'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import professionalsList from '../../data/professionalsList'
import StaffImage from '../../components/shared/StaffImage'

const Professionals = () => {

    return (
        <div id=""
        className="min-vh-100 w-100"
        >
        {/* <!-- Page Header --> */}
        <header id="peope_professionals_pageHeader"
            className="grid gtc12
                "
        >
            <figure className="gc1s12"
            >
                <img src={professionals}
                    alt=""
                    className="vh-60 cover"
                />
            </figure>
            <hgroup className="gc1s12 w-100 blue0">
                <h2 className="w-100 h-100
                    pa1-00 ph1-00 pb1-00 mb0-00
                    f3-00 ttu"
                >
                    Professionals
                </h2>
            </hgroup> 
            {/* <!-- Page Navigation -->*/}
            <AESLPeopleNav />
            {/* <!-- Page Navigation -->  */}
        </header>
        {/* <!-- Page Header --> */}

        {/* <!-- Page Main --> */}
        <main id = "professionals_pagemain"
            className="bg-white"
        >
            <div id="l_3:1_professionals" 
                className="grid gtc4 w-100"
            >
                {/* <!-- AESL Professionals Main Start --> */}
                <div id="lc_gc1s3__professionals_pageContent"
                    className="gc1s4 gc1s3-l
                        min-vh-100 ph1-00 mb1-00"
                >   
                    {/* <!-- Consultants --> */}
                    <div id="people_professionals"
                        className="grid gtc12 ggap1-00
                            
                            mb1-00"
                    >
                        {/* <!-- Professionals Description Start --> */}
                        <header id="people_professionals_description" 
                            className="gr1s1 gc2s10"
                        > 
                            <div id=""
                                className="flex ggap1-00 
                                    w-100 blue0
                                    mt6-00 mb4-00 
                                    lh-copy f1-25 tj"
                            >
                                <div>
                                    Our company boasts a team of highly skilled professionals dedicated to delivering exceptional design and engineering solutions. With expertise in various disciplines, including architecture, structural engineering, and environmental planning, we tackle diverse project challenges. Their collaborative approach fosters innovation, ensuring that each project meets the highest standards of quality and functionality. Committed to professional development, these experts stay abreast of industry trends and advancements. Their focus on sustainability and client satisfaction drives the creation of spaces that are not only beautiful but also environmentally responsible.
                                </div>
                            </div>

                        </header>
                        {/* <!-- Professionals Description End --> */}

                        {/* <!-- Professionals Gallery Start --> */}
                        <div className="gc1s12 blue0">
                          {professionalsList.length === 0 ? (
                            <div className="tc pv4-00 f2-00 fw7 red">No professionals available.</div>
                          ) : (
                            <ul className="gr1s1 gc1s12 grid gtc1 gtc2-s gtc4-m ggap1-00 w-100 blue0">
                              {professionalsList.map((person) => (
                                <li key={person.id} className="blue0 w-100">
                                  <article className="gr1s1 gc1s3 flex flex-column items-center justify-center">
                                    <figure className="shadow-5 mb0-50">
                                                                            <StaffImage
                                                                                src={person.thumbnailImage || '/images/placeholder.png'}
                                                                                alt={person.thumbnailImageAlt || person.name}
                                                                                className="pa0-50"
                                                                            />
                                    </figure>
                                    <hgroup className="flex flex-column items-center justify-start pa0-25 blue0">
                                      <h5 className="mb0-50">
                                        <Link className="blue0" to={`/people/professionals/${person.slug}`}>{person.title ? `${person.title} ` : ''}{person.name}</Link>
                                      </h5>
                                      <h6>{person.role}</h6>
                                      <h6>{person.office}</h6>
                                      <h6>{person.department}</h6>
                                    </hgroup>
                                  </article>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        {/* <!-- Professionals Gallery End --> */}

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
                      sectionTitle ="Professionals"
                    />
                </div>
                {/* <!-- AESL Professionals Main End -->

                <!-- AESL Professionals Aside Start --> */}
                <div id="lc_gc4s1__professionals_pageAside" 
                    className="gc4s1 
                    blue0 relative"
                >
                    <div className="flex flex-column justify-between
                        min-vh-100 
                        ph2-00 pt6-00
                        sticky top-0"
                    >
                        <ul className="mb1-00 bl bw4 b--green pl2-00 f0-75">
                            <h3 >Professionals</h3>
                            <li className="mb1-00">
                                <a href="#people_professionals_description"
                                    className="blue0 i"
                                    >
                                    AESL Professionals
                                </a>
                            </li>
                            <li className="mb1-00">
                                <a href="#people_professionals_gallery"
                                    className="blue0 i"
                                    >
                                    AESL Professionals List
                                </a>
                            </li>
                        </ul>
        
                        <div className="mb1-00" >
                            <small>Previous</small> <br/>
                            <Link to ="/people/senior-professionals" 
                                className="mb1-00 blue0 f0-75 b"
                            >
                                Senior Professionals
                            </Link><br/><br/>
                            <small>Next</small> <br/>
                            <Link to ="/people/assistant-professionals" 
                                className="mb1-00 blue0 f0-75 b"
                                >Assistant Professionals
                            </Link> 
                        </div>
                    </div>
                </div>
                {/* <!-- AESL Professionals Aside End --> */}
            </div>
        </main>
        {/* <!-- Page Main -->  */}
        {/* <!-- Page Footer -->   */}
        <AESLPageFooter 
            pageTitle = "Professionals"
        />
        {/* <!-- Page Footer -->  */}
    </div>
    )
}

export default Professionals