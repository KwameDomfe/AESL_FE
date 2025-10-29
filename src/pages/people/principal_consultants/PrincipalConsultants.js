import { Link } from 'react-router-dom'
import principalConsultants from '../../../images/practice/management/management-07.jpeg'
import AESLPeopleNav from '../../../components/organisms/navs/AESL_PeopleNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'
import principalConsultantsList from '../../../data/principalConsultantsList'
import StaffImage from '../../../components/shared/StaffImage'

const PrincipalConsultants = () => {

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
                <img src={principalConsultants} alt="Principal Consultants" className="vh-60 cover" />
            </figure>
            <hgroup className="gc1s12 w-100 blue0">
                <h2 className="w-100 h-100
                    pa1-00 mb0-00
                    f3-00 ttu"
                >
                    Principal Consultants
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
                {/* <!-- AESL Principal Consultants Main Start --> */}
                <div id="lc_gc1s3__Principal_Consultants_pageContent"
                    className="gc1s4 gc1s3-l
                        min-vh-100 ph1-00 mb1-00"
                >   
                    {/* <!-- Principal Consultants --> */}
                    <div id="people_principal_consultants"
                        className="grid gtc12 ggap1-00
                            
                            mb1-00"
                    >
                        {/* <!-- Principal Consultants Description Start --> */}
                        <header id="people_principal_consultants_description" 
                            className="gr1s1 gc2s10"
                        > 
                            <div id=""
                                className="flex ggap1-00 
                                    w-100 blue0
                                    mt6-00 mb4-00 
                                    lh-copy f1-25 tj"
                            >
                                <div>
                                Our principal consultants lead projects from conceptualization to execution, ensuring that client needs are met with precision. Their team integrates architecture, engineering, and project management expertise to create functional and aesthetically pleasing environments. Committed to sustainability, they incorporate eco-friendly practices into their designs. With a strong emphasis on collaboration, our principal consultants foster relationships with clients and stakeholders to achieve successful project outcomes.

                                </div>
                            </div>

                        </header>
                        {/* <!-- Principal Consultants Description End --> */}

                        {/* <!-- Principal Consultants Gallery Start --> */}
                        <div id="people_principal_consultants_gallery"
                            className="gc1s12 blue0"
                        >
                          {principalConsultantsList.length === 0 ? (
                            <div className="tc pv4-00 f2-00 fw7 red">No principal consultants available.</div>
                          ) : (
                            <ul className="gr1s1 gc1s12 grid gtc1 gtc2-s gtc4-m ggap1-00 w-100 blue0">
                              {principalConsultantsList.map((consultant) => (
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
                                        <Link className="blue0" to={`/people/principal-consultants/${consultant.slug}`}>{consultant.title ? `${consultant.title} ` : ''}{consultant.name}</Link>
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
                        {/* <!-- Principal Consultants Gallery End --> */}

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
                      sectionTitle ="Principal Consiltants"
                    />
                </div>
                {/* <!-- AESL Principal Consultants Main End -->

                <!-- AESL Principal Consultants Aside Start --> */}
                <div id="lc_gc4s1__principal_Consultants_pageAside" 
                    className="gc4s1 
                    blue0 relative"
                >
                    <div className="flex flex-column justify-between
                        min-vh-100 
                        ph2-00 pt6-00
                        sticky top-0"
                    >
                        <ul className="mb1-00 bl bw4 b--green pl2-00 f0-75">
                            <h3 >Principal Consultants</h3>
                            <li className="mb1-00">
                                <a href="#people_principal_consultants_description"
                                    className="blue0 i"
                                    >
                                    AESL Principal Consultants
                                </a>
                            </li>
                            <li className="mb1-00">
                                <a href="#people_principal_consultants_gallery"
                                    className="blue0 i"
                                    >
                                    AESL Principal Consultants List
                                </a>
                            </li>
                        </ul>
        
                        <div className="mb1-00" >
                            {/* <small>Previous</small> <br/>
                            <a href="{% url 'website:mission-vision-values' %}" 
                                className="mb1-00 blue0 f0-75 b"
                            >
                                Principal Consultants
                            </a> <br/><br/> */}
                            <small>Next</small> <br/>
                            <Link to ="/people/senior-consultants" 
                                className="mb1-00 blue0 f0-75 b"
                                >Senior Consultants
                            </Link> 
                        </div>
                    </div>
                </div>
                {/* <!-- AESL Principal Consultants Aside Start --> */}
            </div>
        </main>
        {/* <!-- Page Main -->  */}
        {/* <!-- Page Footer -->   */}
        <AESLPageFooter 
            pageTitle = "Principal Consultants"
        />
        {/* <!-- Page Footer -->  */}
    </div>
    )
}

export default PrincipalConsultants