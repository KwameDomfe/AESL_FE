import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import AESLPeopleNav from '../../components/organisms/navs/AESL_PeopleNav'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import CategoryOverview from '../../components/molecules/CategoryOverview'
import StaffImage from '../../components/shared/StaffImage.js';

import PeopleBanner from '../../images/people/00.jpeg'
import sky from '../../images/placeholders/regular_images/sky.jpg'

import { Link } from 'react-router-dom'
import { BsPeople } from 'react-icons/bs'

const PeopleIndex = () => {
  
    return (
        <article id = ""
            className = ""
        >
            {/* Page Header Start */}
            <header id=""
                className="bg-green"
            >
                <CategoryHeaderBanner 
                    image = {PeopleBanner}
                    title ='People'
                    icon = {<BsPeople />}
                />
                <AESLPeopleNav />
            </header>
            {/* Page Header End */}
            
            {/* Page Main Start */}
            <main id="peoplePage__Main"
                    className="ph1-00"
                >
                    {/* <!-- AESL People Start --> */}
                    <div id="AESL__People"
                        className="
                            mb1-00"
                    >            
                        {/* <!-- AESL People Categories Start --> */}
                            <article id="AESL__People--Categories"
                                className="blue0 grid gtc12 ggap1-00"   
                            >   
                                <CategoryOverview
                                    description="AESL teams consist of experienced architects, engineers, project managers, consultants, and support staff, with whom they bring a diverse range of skills, knowledge, and expertise to the table, allowing the company to tackle complex projects and deliver innovative solutions.The team's collective expertise and passion enables the company to meet the needs of clients and contribute to the successful completion of diverse construction projects. Our teams consist of experienced architects, engineers, project managers, consultants, and support staff who bring a diverse range of skills, knowledge, and expertise to the table. This team's collective expertise and passion enable the company to meet the needs of clients and contribute to the successful completion of construction projects.
"
                                />
                                <section id="AESL__PeopleConsultants" 
                                    className="ma4-00 bg-blue0 pa4-00 gc1s12"
                                >
                                    <div id="4x4_Grid_PeopleConsultants"
                                        className="grid gtc12 ggap1-00"
                                    >
                                        <article id="AESL__PeopleConsultants--PrincipalConsultants"
                                            className="gr1s1 gc1s4
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to ="/people/principal-consultants"
                                                className= ""  
                                            >
                                                <figure className="items-center justify-center">
                                                                                                        <StaffImage
                                                                                                            src={sky}
                                                                                                            alt=""
                                                                                                            className="br0-50 gc1s1 gr1s1"
                                                                                                        />
                                                    <figcaption id = ""
                                                        className="gr1s1 gc1s1 
                                                            flex flex-column items-center justify-center
                                                            
                                                            pv1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc"
                                                    >
                                                        <h3 className="dib 
                                                            w-100 
                                                            pa0-50 mb0-00 
                                                            white-90 bg-white-10 ba b--white br0-50 
                                                            f1-00"
                                                        >
                                                            Principal Consultants
                                                        </h3>
                                                    </figcaption>
                                                </figure> 
                                            </Link>
                                        </article>
                                        
                                        <article id="AESL__PeopleConsultants--SeniorConsultants"
                                            className="gr2s1 gc1s4
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to ="/people/senior-consultants"
                                                className= ""  
                                            >    
                                                <figure className="items-center justify-center">
                                                                                                        <StaffImage
                                                                                                            src={sky}
                                                                                                            alt=""
                                                                                                            className="br0-50 gc1s1 gr1s1"
                                                                                                        />
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            pv1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc"
                                                    >
                                                        <h3 className="dib 
                                                            w-100 
                                                            pa0-50 mb0-00 
                                                            white-90 bg-white-10 ba b--white br0-50 
                                                            f1-00"
                                                        >
                                                            Senior Consultants
                                                        </h3>
                                                    </hgroup>
                                                </figure>
                                            </Link> 
                                        </article>

                                        <article id="AESL__PeopleConsultants--Consultants" 
                                            className="gr3s1 gc1s4
                                            grid items-center justify-center"
                                        >
                                            <Link to ="/people/consultants"
                                                    className= ""  
                                            >
                                                <figure className="items-center justify-center"
                                                >
                                                                                                        <StaffImage
                                                                                                            src={sky}
                                                                                                            alt=""
                                                                                                            className="gc1s1 gr1s1 br0-50"
                                                                                                        />
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            pv1-00
                                                            bg-blue0-50
                                                            f0-75 tc"
                                                    >
                                                        <h3 className="dib 
                                                            w-100 
                                                            pa0-50 mb0-00 
                                                            white-90 bg-white-10 ba b--white br0-50 
                                                            f1-00"
                                                        >
                                                            Consultants
                                                        </h3>
                                                    </hgroup>
                                                </figure>
                                            </Link>
                                        </article> 
                                            
                                        <article id="AESL__PeopleConsultants--ConsultantsSummary" 
                                            className="gr1s3 gc5s8
                                                grid"
                                        >
                                            <figure className="shadow-5 items-center justify-center">
                                                <hgroup id = ""
                                                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                        h-100
                                                        pa1-00
                                                        bg-white-90
                                                        br0-50
                                                        f1-25 tc"
                                                    >
                                                    <h1 className= "mv1-00 f2-00 ttu">
                                                        AESL Consultants
                                                    </h1>
                                                    <p className="lh-copy mb2-00"
                                                    >
                                                        AESL’s consultants encompass a wide range of disciplines, including architectural design, structural engineering, civil engineering, electrical engineering, mechanical engineering, and more.
                                                    </p>
                                                    <p className="lh-copy mb2-00">
                                                        AESL’s consultants assist in various stages of project development, from concept design and feasibility studies to construction documentation and quality assurance. Collaborating with in-house professionals, they provide valuable insights and innovative solutions that enhance the company’s breadth and depth of services.
                                                    </p>
                                                    <p className="lh-copy mb2-00">
                                                        They are also client-focused and prioritize effective communication throughout the project life cycle.
                                                    </p>
                                                    <p className="lh-copy mb2-00">
                                                        AESL's consultants have a wide range of disciplines, including architectural design, structural engineering, civil engineering, electrical engineering, mechanical engineering, and more.
                                                    </p>
                                                    <p className="lh-copy mb2-00">
                                                        They assist in various stages of project development, from concept design and feasibility studies to construction documentation and quality assurance. They are client-focused and prioritize effective communication throughout the project life-cycle.
                                                    </p>
                                                </hgroup> 
                                            </figure>
                                        </article>
                                    </div>
                                </section>
                                <SectionFooter 
                                    sectionTitle ="People || Consultants"
                                    />
                                
                                <section id="AESL__PeopleProfessionals" 
                                    className="ma4-00 bg-white pa4-00 gc1s12"
                                >
                                    <div id="4x4_Grid_PeopleProfessionals"
                                        className="grid gtc12 ggap1-00"
                                    >
                                        <article id="AESL__PeopleProfessionals--ProfessionalsSummary" 
                                            className="gr1s3 gc1s8
                                                grid"
                                        >
                                            <figure className="grid items-center justify-center
                                               "
                                            >
                                                <hgroup id = ""
                                                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                        h-100
                                                        pa1-00
                                                        bg-blue0 br1-00 
                                                        white-90
                                                        f1-25
                                                        tc"
                                                >
                                                    <h1 className= "f2-00 mv1-00 ttu">
                                                        AESL Professionals
                                                    </h1>
                                                    <p className="lh-copy mb2-00 red">
                                                        AESL has a highly qualified and experienced team of engineers that can provide a wide range of capabilities including general infrastructure, heavy civil engineering and building structure design. 
                                                    </p>
                                                    <p className="lh-copy mb2-00 red">
                                                        AESL has a highly qualified and experienced team of engineers that can provide a wide range of capabilities including general infrastructure, heavy civil engineering and building structure design. 
                                                    </p>
                                                    <p className="lh-copy mb2-00 red">
                                                        AESL has a highly qualified and experienced team of engineers that can provide a wide range of capabilities including general infrastructure, heavy civil engineering and building structure design. 
                                                    </p>
                                                </hgroup> 
                                            </figure>
                                        </article>
                                        <article id="AESL__PeopleProfessionals--SeniorProfessionals"
                                            className="gr1s1 gc9s4
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to ="/people/senior-professionals"
                                                className= ""  
                                            >
                                                <figure className="grid items-center justify-center">
                                                    <img src={sky}            
                                                        alt=""
                                                        className="br1-00 gc1s1 gr1s1 "
                                                    /> 
                                                    <figcaption id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            h-100 w-100
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc"
                                                    >
                                                        <h3 className="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Senior Professionals
                                                        </h3>    
                                                        
                                                    </figcaption>
                                                </figure> 
                                            </Link>
                                        </article>
                                        
                                        <article id="AESL__PeopleProfessionals--Professionals"
                                            className="gr2s1 gc9s4
                                            grid items-center justify-center
                                            white-90"      
                                        >
                                            <Link to ="/people/professionals"
                                                className= ""  
                                            >    
                                                <figure className=" grid items-center justify-center">
                                                    <img src={sky}            
                                                        alt=""
                                                        className="br1-00 gc1s1 gr1s1"
                                                    /> 
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc"
                                                        >
                                                            <h3 className="blue0 bg-white ba pa0-50 mb0-00 f1-00">
                                                                Professionals
                                                            </h3>
                                                    </hgroup>
                                                </figure>
                                            </Link> 
                                        </article>

                                        <article id="AESL__PeopleProfessionals--AssistantProfessionals" 
                                            className="gr3s1 gc9s4
                                                grid items-center justify-center"
                                        >
                                            <Link to ="/people/assistant-professionals"
                                                className= ""  
                                            >
                                                <figure className="grid items-center justify-center
                                                    "
                                                >
                                                    <img src={sky}
                                                        alt=""
                                                        className="gc1s1 gr1s1 br1-00"
                                                    /> 
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc"
                                                    >
                                                        <h3 className="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Assistant Professionals
                                                        </h3>
                                                    </hgroup>
                                                </figure>
                                            </Link>        
                                        </article>
                                    </div>
                                </section>
                                <SectionFooter 
                                sectionTitle ="People || Professionals"
                                />
                                <section id="AESL__PeopleSupportTeam" 
                                    className="ma4-00 bg-blue0 pa4-00 gc1s12"
                                >
                                    <div id="4x4_Grid_PeopleSupportTeam"
                                        className="grid gtc12 ggap1-00"
                                    >
                                        <article id="AESL__PeopleSupportTeam--SupportTeam"
                                            className="gr1s1 gc1s4
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to ="/people/support-team"
                                                className= ""  
                                            >
                                                <figure className="grid  items-center justify-center"
                                                >
                                                    <img src={sky}
                                                        alt=""
                                                        className="br1-00 gc1s1 gr1s1 "
                                                    /> 
                                                    <figcaption id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            h-100 w-100
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75 white-90 tc"
                                                    >
                                                        <h3 className="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Support Team
                                                        </h3>
                                                    </figcaption>
                                                </figure> 
                                            </Link>
                                        </article>
                                        
                                        <article id="AESL__PeopleSupportTeam--NationalServicePersonnel"
                                            className="gr2s1 gc1s4
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to ="/people/service-personnel"
                                                className= ""  
                                            >    
                                                <figure className="grid items-center justify-center
                                                    "
                                                >
                                                    <img src={sky}
                                                        alt=""
                                                        className="br1-00 gc1s1 gr1s1 "
                                                    /> 
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 
                                                            flex flex-column items-center justify-center
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75 white-90 tc"
                                                    >
                                                        <h3 className="pa0-50 mb0-00 
                                                            blue0 bg-white ba 
                                                            f1-00"
                                                        >
                                                            National Service Personnel
                                                        </h3>
                                                    </hgroup>
                                                </figure>
                                            </Link> 
                                        </article>

                                        <article id="AESL__PeopleSupportTeam--Probationers" 
                                            className="gr3s1 gc1s4
                                                grid items-center justify-center"
                                        >
                                            <Link to ="/people/probationers"
                                                    className= ""  
                                                >
                                                <figure className="grid  items-center justify-center">
                                                    <img src={sky}
                                                        alt=""
                                                        className="br1-00 gc1s1 gr1s1 "
                                                    /> 
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            tc
                                                            
                                                                ">
                                                        <h3 className="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Probationers
                                                        </h3>
                                                    </hgroup>
                                                </figure>
                                            </Link>
                                        </article> 
                                    
                                        <article id="AESL__PeopleSupportTeam--SupportTeamSummary" 
                                            className="gr1s3 gc5s8
                                                grid"
                                        >
                                            <figure className="grid  items-center justify-center">
                                                <hgroup id = ""
                                                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                        h-100
                                                        mv2-00 ph4-00
                                                        bg-white-90
                                                        f1-25 tc blue0 
                                                        br1-00"
                                                >
                                                    <h1 className= "f2-00 mv1-00 ttu">
                                                    AESL Support Team
                                                    </h1>
                                                    <p className="lh-copy red">
                                                        We provide a range of Professional Quantity Surveying, Land Surveying and Valuation services tailored to meet our clients requirements. We always take challenges and bring them to a conclusion.
                                                    </p>
                                                    <p className="lh-copy red">
                                                        We provide a range of Professional Quantity Surveying, Land Surveying and Valuation services tailored to meet our clients requirements. We always take challenges and bring them to a conclusion.
                                                    </p>
                                                    <p className="lh-copy red">
                                                        We provide a range of Professional Quantity Surveying, Land Surveying and Valuation services tailored to meet our clients requirements. We always take challenges and bring them to a conclusion.
                                                    </p>
                                                </hgroup> 
                                            </figure>
                                        </article>
                                    </div>
                                </section>
                                <SectionFooter 
                                sectionTitle ="People || SupportTeam"
                                />
                            </article>
                        {/* <!-- AESL People Categories End --> */}
                    </div>
                    {/* <!-- AESL People End --> */}
                </main>
            {/* Page Main End */} 

            {/* Page Footer Start */}
            <footer id="" 
                className=""
            >
                <AESLPageFooter
                    pageTitle = 'People'
                />
            </footer>
            {/* Page Footer End */}
      </article>
    )
}

export default PeopleIndex