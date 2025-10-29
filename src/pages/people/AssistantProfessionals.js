import React from 'react'
import { Link } from 'react-router-dom'
import assistantProfessionals from '../../images/practice/management/management-07.jpeg'
import AESLPeopleNav from '../../components/organisms/navs/AESLPeopleNav'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import assistantProfessionalsList from '../../data/assistantProfessionalsList'
import StaffImage from '../../components/shared/StaffImage'

const AssistantProfessionals = () => {

    return (
        <div id=""
        className="min-vh-100 w-100"
        >
        {/* <!-- Page Header --> */}
        <header id="peope_assistant_assistant_professionals_pageHeader"
            className="grid gtc12
                "
        >
            <figure className="gc1s12"
            >
                <img src={assistantProfessionals}
                    alt=""
                    className="vh-60 cover"
                />
            </figure>
            <hgroup className="gc1s12 w-100 blue0">
                <h2 className="w-100 h-100
                    pa1-00 ph1-00 pb1-00 mb0-00
                    f3-00 ttu"
                >
                    Assistant Professionals
                </h2>
            </hgroup> 
            {/* <!-- Page Navigation -->*/}
            <AESLPeopleNav />
            {/* <!-- Page Navigation -->  */}
        </header>
        {/* <!-- Page Header --> */}

        {/* <!-- Page Main --> */}
        <main id = "assistant_professionals_pagemain"
            className="bg-white"
        >
            <div id="l_3:1_assistant_professionals" 
                className="grid gtc4 w-100"
            >
                {/* <!-- AESL Assistant Professionals Main Start --> */}
                <div id="lc_gc1s3__assistant_professionals_pageContent"
                    className="gc1s4 gc1s3-l
                        min-vh-100 ph1-00 mb1-00"
                >   
                    {/* <!-- Consultants --> */}
                    <div id="people_assistant_professionals"
                        className="grid gtc12 ggap1-00
                            
                            mb1-00"
                    >
                        {/* <!-- Professionals Description Start --> */}
                        <header id="people_assistant_professionals_description" 
                            className="gr1s1 gc2s10"
                        > 
                            <div id=""
                                className="flex ggap1-00 
                                    w-100 blue0
                                    mt6-00 mb4-00 
                                    lh-copy f1-25 tj"
                            >
                                <div>
                                Assistant professionals at Architectural and Engineering Services Limited play a crucial role in supporting project teams and ensuring smooth operations. They assist in research, drafting, and design processes, contributing to the development of innovative solutions. With a focus on detail and accuracy, they help prepare technical documentation and reports that meet industry standards. Their proactive approach and strong communication skills facilitate collaboration among team members and clients. Committed to professional growth, they continuously seek to enhance their knowledge and skills within the field.
                                </div>
                            </div>

                        </header>
                        {/* <!-- Professionals Description End --> */}

                        {/* <!-- Professionals Gallery Start --> */}
                        <div className="gc1s12 blue0">
                          {assistantProfessionalsList.length === 0 ? (
                            <div className="tc pv4-00 f2-00 fw7 red">No assistant professionals available.</div>
                          ) : (
                            <ul className="gr1s1 gc1s12 grid gtc1 gtc2-s gtc4-m ggap1-00 w-100 blue0">
                              {assistantProfessionalsList.map((person) => (
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
                                        <Link className="blue0" to={`/people/assistant-professionals/${person.slug}`}>{person.title ? `${person.title} ` : ''}{person.name}</Link>
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
                {/* <!-- AESL Assistant Professionals Main End -->

                <!-- AESL Assistant Professionals Aside Start --> */}
                <div id="lc_gc4s1__assistant_professionals_pageAside" 
                    className="gc4s1 
                    blue0 relative"
                >
                    <div className="flex flex-column justify-between
                        min-vh-100 
                        ph2-00 pt6-00
                        sticky top-0"
                    >
                        <ul className="mb1-00 bl bw4 b--green pl2-00 f0-75">
                            <h3 >Assistant Professionals</h3>
                            <li className="mb1-00">
                                <a href="#people_assistant_professionals_description"
                                    className="blue0 i"
                                    >
                                    AESL Assistant Professionals
                                </a>
                            </li>
                            <li className="mb1-00">
                                <a href="#people_assistant_professionals_gallery"
                                    className="blue0 i"
                                    >
                                    AESL Assistant Professionals List
                                </a>
                            </li>
                        </ul>
        
                        <div className="mb1-00" >
                            <small>Previous</small> <br/>
                            <Link to ="/people/professionals" 
                                className="mb1-00 blue0 f0-75 b"
                            >
                                Professionals
                            </Link><br/><br/>
                            <small>Next</small> <br/>
                            <Link to ="/people/probationers" 
                                className="mb1-00 blue0 f0-75 b"
                            >
                                Probationers
                            </Link> 
                        </div>
                    </div>
                </div>
                {/* <!-- AESL Assistant Professionals Aside End --> */}
            </div>
        </main>
        {/* <!-- Page Main -->  */}
        {/* <!-- Page Footer -->   */}
        <AESLPageFooter 
            pageTitle = "Asssstant Professionals"
        />
        {/* <!-- Page Footer -->  */}
    </div>
    )
}

export default AssistantProfessionals