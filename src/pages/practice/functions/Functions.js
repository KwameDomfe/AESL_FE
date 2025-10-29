
import functions from '../../../images/practice/functions/00.jpg'
import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'
import { Link } from 'react-router-dom'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
import { FaBuildingColumns } from "react-icons/fa6";
import { SiPytest } from "react-icons/si";
import { MdBiotech } from "react-icons/md";
import { RiGovernmentLine } from "react-icons/ri";
const Functions = () => {
    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {functions}
                    title = 'Functions'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            
            <main id=""
                className="ph1-00"
            >
                <div id="" 
                    className="grid gtc4"
                >
                    <div id="pageDetails"
                        className="gc1s3 grid gtc12
                            min-vh-100 mb1-00
                            blue0"
                    >   
                            {/* <!-- Header Start --> */}
                            <header id="functions--overview"
                                className="gr1s1 gc2s10 f1-25"
                            >
                                <hgroup id=""
                                    className="mv6-00"
                                >
                                    <p className=" 
                                         lh-copy tj"
                                    >
                                        AESL provides an extensive variety of architectural and engineering services, including architectural design, engineering analysis and design, project management, construction documentation, construction supervision, sustainable design and energy efficiency, and client communication as well as collaboration.
                                    </p>     
                                    <p className=" 
                                        lh-copy tj"
                                    >
                                        The objects of the Corporation were:
                                    </p>     
                                </hgroup> 
                            </header>
                            {/* <!-- Header End --> */}

                            {/* <!-- Functions 01 Start --> */}
                            <figure id="functions--01" 
                                className="gr2s1 gc1s12 flex items-center justify-end
                                    grid gtc12 ggap1-00 mb3-00"
                            >
                                <FaBuildingColumns className='f4-00 gc2s1' />
                                <figcaption className="gc4s8 mb0-00 lh-copy">
                                    To investigate, survey, design, administration and management both in Ghana and elsewhere of all kinds of architectural and engineering consultancy works, whether public or private including the design of houses, highways, airfields, bridges, harbour, water supplies and sewerage systems, soils and foundations investigation;
                                </figcaption>
                            </figure>
                            {/* <!-- Functions 01 End --> */}

                            {/* <!-- Functions 02 Start --> */}
                            <figure id="functions--02" 
                                className="gr3s1 gc1s12 
                                    grid gtc12 ggap1-00 mb3-00"
                            >
                                


                                <SiPytest className='f4-00 gc2s1' />
                                <figcaption className="gc4s8 mb0-00 lh-copy">
                                    To undertake the testing of construction materials, surveying and mapping, valuation and appraisal of property, and design of irrigation works; 
                                </figcaption>
                            </figure>
                            {/* <!-- Functions 02 End -->  */}

                            {/* <!-- Functions 03 Start --> */}
                            <figure id="functions--03" 
                                className="gr4s1 gc1s12 
                                    grid gtc12 ggap1-00 mb3-00"
                            >
                                <RiGovernmentLine className='f4-00 gc2s1' />
                                <figcaption className="gc4s8 mb0-00 lh-copy">
                                    To carry out such other activities as appear to the Corporation to be conducive or incidental to the attainment of all or any of the foregoing objects To provide consultancy services in respect of all works required by or on behalf of the Government in the fields of engineering, building and architecture, urban and regional planning and development;
                                </figcaption>
                            </figure>
                            {/* <!-- Functions 03 End -->  */}
                
                            {/* <!-- Functions 04 Start --> */}
                            <figure id="functions--04" 
                                className="gr5s1 gc1s12 
                                    grid gtc12 ggap1-00 mb3-00"
                            >
                                <MdBiotech className='f4-00 gc2s1' />
                                


                                <figcaption className="gc4s8 mb0-00 lh-copy">
                                    To carry out technical studies in planning, designing as well as the supervision of such infrastructural works as will assist the economic and social development of the country;
                                </figcaption>
                            </figure>
                            {/* <!-- Functions 04 End -->  */}

                            {/* Page Footer Start */}
                            <SectionFooter className="gc1s12"  sectionTitle="Functions"/>
                            {/* Page Footer End */}
                    </div>

                    <div id="pageNav" 
                        className="gc4s1 
                            w-100 blue0 relative"
                    >
                        <div className="flex flex-column justify-between
                            min-vh-100 
                            ph2-00 pb1-00
                            pt6-00
                            sticky top-0"
                        >
                            <div
                            >
                                <Link to = "/practice"
                                    className="dib mb1-00 
                                        f1-25 blue0 ttu fw6">Back to Practice
                                </Link>
                                <ul className="mb1-00 bl bw4 pa1-00 b--gray gray f0-75">
                                    <h3 >Functions</h3>
                                    <li className="mb1-00 i">
                                        <a href="#functions--overview"
                                            className="gray"
                                        >
                                            AESL Object
                                        </a>
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#functions--01"
                                            className="gray"
                                        >
                                            AESL Functions
                                        </a>
                                    </li>
                                </ul>
                            </div> 

                            <div className="h6-00 gray"
                            >
                                <small>Previous</small><br/>
                                <Link to ="/practice/mandate" 
                                    className="mb1-00 f0-75 gray b"
                                >
                                    AESL Mandate
                                </Link> <br/><br/>
                                <small>Next</small><br/>
                                <Link to ="/practice/mission-vision-and-values" 
                                    className="mb1-00 f0-75 gray b"
                                >
                                    AESL Mission vision and Values
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
           
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageTitle="Functions"/>
             {/* Page Footer End */}
        </div>
    )
}

export default Functions