import React from 'react'
import { Link } from 'react-router-dom'
import seniorConsultants from '../../../images/practice/management/management-07.jpeg'
import AESLPeopleNav from '../../../components/organisms/navs/AESL_PeopleNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'
import seniorConsultantsList from '../../../data/seniorConsultantsList'
import StaffImage from '../../../components/shared/StaffImage'

const SeniorConsultants = () => {

    return (
        <div id=""
        className="min-vh-100 w-100"
        >
        {/* <!-- Page Header --> */}
        <header id="peope_pageHeader"
            className="grid gtc12
                "
        >
            <figure className="gc1s12">
                <img src={seniorConsultants} alt="Senior Consultants" className="vh-60 cover" />
            </figure>
            <hgroup className="gc1s12 w-100 blue0">
                <h2 className="w-100 h-100
                    pa1-00 ph1-00 pb1-00 mb0-00
                    f3-00 ttu"
                >
                    Senior Consultants
                </h2>     
            </hgroup> 
            {/* <!-- Page Navigation -->*/}
            <AESLPeopleNav />
            {/* <!-- Page Navigation -->  */}
        </header>
        {/* <!-- Page Header --> */}

        {/* <!-- Page Main --> */}
        <main id = "principal_consultant_consultant_pagemain"
            className="bg-white"
        >
            <div id="l_3:1_Principal_Consultants" 
                className="grid gtc4 w-100"
            >
                {/* <!-- AESL Senior Consultants Main Start --> */}
                <div id="lc_gc1s3__Principal_Consultants_pageContent"
                    className="gc1s4 gc1s3-l
                        min-vh-100 ph1-00 mb1-00"
                >   
                    {/* <!-- Senior Consultants --> */}
                    <div id="people_senior_consultants"
                        className="grid gtc12 ggap1-00
                            
                            mb1-00"
                    >
                        {/* <!-- Senior Consultants Description Start --> */}
                        <header id="people_senior_consultants_description"
                            className='gc2s10'
                        >
                            <div id=""
                                className="flex ggap1-00 
                                    w-100 blue0
                                    mt6-00 mb4-00 
                                    lh-copy f1-25 tj"
                            >
                                <div
                                >
                                    Senior consultants specialize in project management and design development, guiding multidisciplinary teams to ensure timely and budget-friendly completion. They prioritize client communication, stay updated with industry trends, and prioritize quality and sustainability, ensuring designs meet regulatory standards and environmental considerations.
                                </div>
                            </div>
                        </header>
                        {/* <!-- Senior Consultants Description End --> */}

                        {/* <!-- Senior Consultants Gallery Start --> */}
                        <div className="gc1s12 blue0">
                          {seniorConsultantsList.length === 0 ? (
                            <div className="tc pv4-00 f2-00 fw7 red">No senior consultants available.</div>
                          ) : (
                            <ul className="gr1s1 gc1s12 grid gtc1 gtc2-s gtc4-m ggap1-00 w-100 blue0">
                              {seniorConsultantsList.map((consultant) => (
                                <li key={consultant.id} className="blue0 w-100">
                                  <article className="gr1s1 gc1s3 flex flex-column items-center justify-center">
                                    <figure className="shadow-5 mb0-50">
                                                                            <StaffImage
                                                                                src={consultant.thumbnailImage || '/images/placeholder.png'}
                                                                                alt={consultant.thumbnailImageAlt || consultant.name}
                                                                                className="pa0-50"
                                                                            />
                                    </figure>
                                    <hgroup className="flex flex-column items-center justify-start pa0-25 blue0">
                                      <h5 className="mb0-50">
                                        <Link className="blue0" to={`/people/senior-consultants/${consultant.slug}`}>{consultant.title ? `${consultant.title} ` : ''}{consultant.name}</Link>
                                      </h5>
                                      <h6>{consultant.role}</h6>
                                      <h6>{consultant.office}</h6>
                                      <h6>{consultant.department}</h6>
                                    </hgroup>
                                  </article>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        {/* <!-- Senior Consultants Gallery End --> */}


                        <article id="misc_blue" 
                            className="gr4s1 gc6s1
                                flex items-center justify-center
                                bg-blue0 h6-00 
                                ">
                        </article>
                    </div>
                    <SectionFooter 
                      sectionTitle ="Senior Consiltants"
                    />
                </div>
                {/* <!-- AESL Senior Consultants Main End -->

                <!-- AESL Senior Consultants Aside Start --> */}
                <div id="lc_gc4s1__senior_Consultants_pageAside" 
                    className="gc4s1 
                    blue0 relative"
                >
                    <div className="flex flex-column justify-between
                        min-vh-100 
                        ph2-00 pt6-00
                        sticky top-0"
                    >
                        <ul className="mb1-00 bl bw4 b--green pl2-00 f0-75">
                            <h3 >Senior Consultants</h3>
                            <li className="mb1-00">
                                <a href="#people_senior_consultants_description"
                                    className="blue0 i"
                                    >
                                    AESL Senior Consultants
                                </a>
                            </li>
                            <li className="mb1-00">
                                <a href="#people_senior_consultants_gallery"
                                    className="blue0 i"
                                    >
                                    AESL Senior Consultants List
                                </a>
                            </li>
                        </ul>
        
                        <div className="mb1-00" >
                            <small>Previous</small> <br/>
                            <a href="/people/principal-consultants" 
                                className="mb1-00 blue0 f0-75 b"
                            >
                                Principal Consultants
                            </a> <br/><br/>
                            <small>Next</small> <br/>
                            <Link to ="/people/consultants" 
                                className="mb1-00 blue0 f0-75 b"
                                >Consultants
                            </Link> 
                        </div>
                    </div>
                </div>
                {/* <!-- AESL Senior Consultants Aside Start --> */}
            </div>
        </main>
        {/* <!-- Page Main -->  */}
        {/* <!-- Page Footer -->   */}
        <AESLPageFooter 
            pageTitle = "Senior Consultants"
        />
        {/* <!-- Page Footer -->  */}
    </div>
    )
}

export default SeniorConsultants