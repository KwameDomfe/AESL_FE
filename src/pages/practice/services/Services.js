import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import services from '../../../images/practice/services/00.jpg'
import portrait01 from '../../../images/placeholders/portrait/portrait-1.png'
import landscape01 from '../../../images/placeholders/landscape_Images/landscape_01.png'
import { Link } from 'react-router-dom'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'
const Services = () => {
    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {services}
                    title = 'Services'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main className="ph1-00">
                <div className="grid gtc4"
                >
                    <div id="pageDetails"
                        className="gc1s3
                            mb1-00 min-vh-100"
                    >   
                        {/* <!-- Practice client_Speak --> */}
                        <div id="services"
                            className="grid gtc12 ggap1-00
                                
                                "
                        >
                            <header id="services--overview"
                                className="gr1s1 gc2s10 w-100"
                            >

                                <p className="mv4-00 
                                    f1-50 tj blue0"
                                >
                                    AESL offers a comprehensive suite of services that encompass architectural design, engineering, project management, and consulting, with the goal of delivering high-quality, sustainable, and innovative solutions that meet client requirements and contribute to the development of robust and well-executed construction projects.
                                </p>
                                <p className="mv4-00 
                                    f1-50 tj blue0"
                                >
                                    AESL offers a range of services to deliver high-quality, sustainable and innovative solutions that meet client requirements and contribute to successful construction projects.
                                </p>
                              
                            </header>
                            <article id="Project_Overview_1" 
                                className="gr2s1 gc1s12"
                            >
                                {/* <!-- Services Start --> */}
                                <div id="services--architecture" 
                                    className="mb6-00">
                                    <div id="4x4_Grid_services"
                                        className="grid gtc12 ggap1-00 pv4-00"
                                    >
                                        <article id="services__urbanPlanning"
                                            className="gr1s1 gc1s3
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to="urban-planning"
                                                className = ""  
                                            >
                                                <figure className="shadow-5 bg-red grid  items-center justify-center"
                                                >
                                                    <img src={portrait01}
                                                        alt=""
                                                        className="br0-50 br0-50 gc1s1 gr1s1 "
                                                    /> 
                                                    <figcaption id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            h-100 w-100
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc
                                                            
                                                                ">
                                                        <h3 className="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Urban Planning
                                                        </h3>    
                                                        
                                                    </figcaption>
                                                </figure> 
                                            </Link>
                                        </article>
                                        
                                        <article id="service__buildingDesign"
                                            className="gr1s1 gc4s3
                                            grid items-center justify-center
                                            white-90"      
                                        >
                                            <Link to="building-design"
                                                className = ""  
                                            >    
                                                <figure className="shadow-5 bg-gold grid  items-center justify-center">
                                                    <img src={portrait01}
                                                        alt=""
                                                        className="br0-50 gc1s1 gr1s1 "
                                                    /> 
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                        
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc
                                                            
                                                                ">
                                                        <h3 className="blue0 bg-white ba pa0-50 mb0-00 f1-00">
                                                            Building Design
                                                        </h3>    
                                                        
                                                    </hgroup>
                                                </figure>
                                            </Link> 
                                        </article>

                                        <article id="landscapeDesign" 
                                            className="gr2s1 gc4s3
                                            grid items-center justify-center
                                        "
                                        >
                                            <Link to="landscape-design"
                                                    className = ""  
                                                >
                                                <figure className="shadow-5 bg-black grid  items-center justify-center">
                                                    <img src={portrait01}
                                                        alt=""
                                                        className="br0-50 gc1s1 gr1s1 "
                                                    /> 
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            tc
                                                            
                                                                ">
                                                        <h3 className="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Landscape Design
                                                        </h3>    
                                                        
                                                    </hgroup>
                                                </figure>
                                            </Link>
                                        </article> 
                                            
                                        <article id="interiorDesign" 
                                            className="gr2s1 gc1s3
                                                grid items-center justify-center
                                                
                                                "
                                        >
                                            <Link to="interior-design"
                                            className = ""  
                                            >
                                                <figure className="shadow-5 bg-blue0 grid  items-center justify-center">
                                                    <img src={portrait01}
                                                        alt=""
                                                        className="br0-50 gc1s1 gr1s1 "
                                                    /> 
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc"
                                                    >
                                                        <h3 className="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            interior Design
                                                        </h3>    
                                                    </hgroup>
                                                </figure>
                                            </Link>        
                                        </article>
                        
                                        <article id="" 
                                            className="gr1s2 gc7s6
                                                grid
                                                "
                                        >
                                            <figure className="shadow-5  grid  items-center justify-center">
                                                <hgroup id = ""
                                                    className="gr1s1 gc1s1 flex flex-column items-center justify-between
                                                        
                                                        ph4-00 pv4-00
                                                        blue0
                                                        f1-25
                                                        tc
                                                        
                                                            ">
                                                    <h1 className = "blue0 f2-00 mv1-00">
                                                        Architectural Services
                                                    </h1>
                                                    <p className="lh-copy mb2-00">Our Architectural designs promotes ideas that fosters unity between the client’s project needs and budget. It’s the philosophy of our architecture to define space that not only satisfies the shelter needs for habitation and business but also meets sustainable design goals in the context of the cityscape.
                                                        </p>  
                                                    <Link  to="/practice/services/architectural-services"
                                                        className="blue0 ba br0-25 dib pa0-50 f1-00"
                                                    >
                                                        EXPLORE 
                                                    </Link>   
                                                </hgroup> 
                                            </figure>
                                        </article>
                                    </div>
                                    <SectionFooter 
                                        sectionTitle = "practice/services/architectural services"
                                    />
                                </div>
                                
                                <div id="services--engineering" 
                                    className="mb6-00"
                                >
                                    <div id="4x4_Grid_services"
                                        className="grid gtc12 ggap1-00 pv4-00"
                                    >
                                        <article id="services__civil__structural__design"
                                            className="gr1s1 gc7s3
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to="civil-design"
                                                className = ""  
                                            >
                                                <figure className="shadow-5 bg-red grid  items-center justify-center">
                                                    <img src={portrait01}
                                                        alt=""
                                                        className="br0-50 br0-50 gc1s1 gr1s1 "
                                                    /> 
                                                    <figcaption id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            h-100 w-100
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc
                                                            
                                                                ">
                                                        <h3 className="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Civil/Structural Design
                                                        </h3>    
                                                        
                                                    </figcaption>
                                                </figure> 
                                            </Link>
                                        </article>
                                        
                                        <article id="service__installations"
                                            className="gr1s1 gc10s3
                                            grid items-center justify-center
                                            white-90"      
                                        >
                                            <Link to="installations"
                                                className = ""  
                                            >    
                                                <figure className="shadow-5 bg-gold grid  items-center justify-center">
                                                    <img src={portrait01}
                                                        alt=""
                                                        className="br0-50 gc1s1 gr1s1 "
                                                    /> 
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                        
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc
                                                            
                                                                ">
                                                        <h3 className="blue0 bg-white ba pa0-50 mb0-00 f1-00">
                                                            Installations
                                                        </h3>    
                                                        
                                                    </hgroup>
                                                </figure>
                                            </Link> 
                                        </article>

                                        <article id="services__water" 
                                            className="gr2s1 gc10s3
                                            grid items-center justify-center
                                        "
                                        >
                                            <Link to="water"
                                                    className = ""  
                                                >
                                                <figure className="shadow-5 bg-black grid  items-center justify-center">
                                                    <img src={portrait01}
                                                        alt=""
                                                        className="br0-50 gc1s1 gr1s1 "
                                                    /> 
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            tc
                                                            
                                                                ">
                                                        <h3 className="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Water
                                                        </h3>    
                                                        
                                                    </hgroup>
                                                </figure>
                                            </Link>
                                        </article> 
                                            
                                        <article id="services__geoTechnical" 
                                            className="gr2s1 gc7s3
                                                grid items-center justify-center
                                                
                                                "
                                        >
                                            <Link to ="geo-technical"
                                            className = ""  
                                            >
                                                <figure className="shadow-5 bg-blue0 grid  items-center justify-center">
                                                    <img src={portrait01}
                                                        alt=""
                                                        className="br0-50 gc1s1 gr1s1 "
                                                    /> 
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc"
                                                    >
                                                        <h3 className="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Geo-Technical
                                                        </h3>    
                                                    </hgroup>
                                                </figure>
                                            </Link>        
                                        </article>
                        
                                        <article id="services__engineering__description" 
                                            className="gr1s2 gc1s6
                                                grid
                                                "
                                        >
                                            <figure className="shadow-5  grid  items-center justify-center">
                                                <hgroup id = ""
                                                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                        mv4-00
                                                        ph4-00
                                                        blue0
                                                        f1-25
                                                        tc
                                                        
                                                            ">
                                                    <h1 className = "blue0 f2-00 mv1-00">
                                                        Engineering Services
                                                    </h1>
                                                    <p className="lh-copy mb2-00">AESL has a highly qualified and experienced team of engineers that can provide a wide range of capabilities including general infrastructure, heavy civil engineering and building structure design. </p>  
                                                    <Link  to="/practice/services/engineering-services"
                                                        className="blue0 ba br0-25 pa0-50 f1-00"
                                                    >
                                                        EXPLORE 
                                                    </Link>   
                                                </hgroup> 
                                            </figure>
                                        </article>
                                    </div>
                                    <SectionFooter 
                                        sectionTitle = "practice/services/engineering services"
                                    />
                                </div>

                                <div id="services--surveying" 
                                    className=""
                                >
                                    <div id="4x4_Grid_services"
                                        className="grid gtc12 ggap1-00 pv4-00"
                                    >
                                        <article id="services__urbanPlanning"
                                            className="gr1s1 gc1s6
                                                grid items-center justify-center
                                                white-90"
                                        >
                                            <Link to="quantities"
                                                className = ""  
                                            >
                                                <figure className="shadow-5 bg-red grid  items-center justify-center">
                                                    <img src={landscape01}
                                                        alt=""
                                                        className="br0-50 br0-50 gc1s1 gr1s1 "
                                                    /> 
                                                    <figcaption id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            w-100
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc
                                                            
                                                                ">
                                                        <h3 className="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Quantities
                                                        </h3>
                                                    </figcaption>
                                                </figure> 
                                            </Link>
                                        </article>

                                        <article id="service__buildingDesign"
                                            className="gr2s1 gc1s6
                                                grid items-center justify-center
                                                white-90"      
                                        >
                                            <Link to ="valuations"
                                                className = ""  
                                            >    
                                                <figure className="shadow-5 bg-gold grid  items-center justify-center">
                                                    <img src={landscape01}
                                                        alt=""
                                                        className="br0-50 gc1s1 gr1s1 "
                                                    /> 
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                        
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            white-90 tc
                                                            
                                                                ">
                                                        <h3 className="blue0 bg-white ba pa0-50 mb0-00 f1-00">
                                                            Valuations
                                                        </h3>    
                                                        
                                                    </hgroup>
                                                </figure>
                                            </Link> 
                                        </article>

                                        <article id="landscapeDesign" 
                                            className="gr3s1 gc1s6
                                            grid items-center justify-center"
                                        >
                                            <Link to="geomatics"
                                                    className = ""  
                                                >
                                                <figure className="shadow-5 bg-black grid  items-center justify-center">
                                                    <img src={landscape01}
                                                        alt=""
                                                        className="br0-50 gc1s1 gr1s1"
                                                    /> 
                                                    <hgroup id = ""
                                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                            
                                                            pa1-00
                                                            bg-blue0-50
                                                            f0-75
                                                            tc
                                                            
                                                                ">
                                                        <h3 className="blue0 bg-white ba dib pa0-50 mb0-00 f1-00">
                                                            Land (Geomatics)
                                                        </h3>    
                                                        
                                                    </hgroup>
                                                </figure>
                                            </Link>
                                        </article> 

                                        <article id="" 
                                            className="gr1s3 gc7s6
                                                grid"
                                        >
                                            <figure className="shadow-5  grid  items-center justify-center">
                                                <hgroup id = ""
                                                    className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                                        mv2-00
                                                        ph4-00
                                                        blue0
                                                        f1-25
                                                        tc
                                                        
                                                            ">
                                                    <h1 className = "blue0 f2-00 mv1-00">
                                                    Surveying Services
                                                    </h1>
                                                    <p className="lh-copy">We provide a range of Professional Quantity Surveying, Land Surveying and Valuation services tailored to meet our clients requirements. We always take challenges and bring them to a conclusion.</p>  
                                                    <Link  to="/practice/services/surveying-services"
                                                        className="blue0 ba br0-25 dib pa0-50 mb0-50 f1-00"
                                                    >
                                                        EXPLORE 
                                                    </Link>   
                                                </hgroup> 
                                            </figure>
                                        </article>
                                    </div>
                                    <SectionFooter 
                                        sectionTitle = "practice/services/surveying services"
                                    />
                                </div>
                                {/* <!-- Services End --> */}
                            </article>
                            <footer className="gr3s1 gc1s12 pa1-00 bg-gray white-90 w-100">
                                Practice || Services
                            </footer>
                        </div>
                        {/* <!-- Practice client_Speak --> */}
                    </div>

                    <div id="pageNav" 
                        className="gc4s1 
                            w-100 blue0 relative">
                        <div className="flex flex-column justify-between
                            min-vh-100 
                            ph2-00 pb1-00
                            pt5-00
                            sticky top-0"
                        >
                            <div>
                                <Link to= "/practice"
                                    className="dib mb1-00 
                                        f1-25 blue0 ttu fw6"
                                >
                                    Back to Practice
                                </Link>
                                <ul className="mb1-00 bl bw4 pa1-00 b--gray gray f0-75"
                                >
                                    <h3 >AESL Services</h3>
                                    <li className="mb1-00 i">
                                        <a href="#services--overview"
                                            className="gray"
                                        >Overview</a>
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#services--architecture"
                                            className="gray"
                                        >Architectural Services</a>
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#services--engineering"
                                            className="gray"
                                        >Engineering Services</a>
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#services--surveying"
                                            className="gray"
                                        >Surveying Services</a>
                                    </li>
                                </ul> 
                            </div>
                            <div className="h6-00" >
                                <small>Previous</small> <br/>
                                <Link to ="/practice/management/" 
                                    className="mb1-00 gray f0-75 b">
                                    AESL Management
                                </Link> <br/><br/>
                                <small>Next</small> <br/>
                                <Link to ="/practice/client-speak/" 
                                    className="mb1-00 gray f0-75 b">
                                    AESL Client Speak
                                </Link> <br/><br/>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </main>
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageTitle="Services"/>
            {/* Page Footer End */}
        </div>
    )
}

export default Services