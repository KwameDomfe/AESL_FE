import mvv from '../../../images/practice/mission_vision_values/00.jpg'
import mission from '../../../images/practice/mission_vision_values/Mission.PNG'
import vision from '../../../images/practice/mission_vision_values/vision.PNG'
import values from '../../../images/practice/mission_vision_values/values.PNG'

import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import { Link } from 'react-router-dom'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'

const MVV = () => {
    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {mvv}
                    title = 'Mission Vision and Values'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main className="ph1-00">
                <div className="grid gtc4">

                    <div id="pageDetails"
                        className="gc1s4 gc1s3-l
                            mb1-00 min-vh-100"
                    >
                        <div id="mvv" 
                            className="grid gtc12 ggap1-00"
                        >
                            <article id="mvv--overview" 
                                className="gr2s1 gc1s12"
                            >
                                <div className="flex ggap1-00 
                                    pa1-00 pa4-00-m
                                    tj blue0 lh-copy f1-25"
                                >
                                    <div className="red">
                                        <p>
                                            The Mission Vision and Values of AESL established by the British was used for all state works over decades post-colonial.
                                        </p>
                                        <p>
                                            The institutions like State Construction Corporation (SCC), State Housing Corporation (SHC), Highways.
                                        </p>
                                        <p>
                                            No privates businesses were allowed to handle state/ public works except the PWD.
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* <!-- Mission Start --> */}
                        <div id="mvv--mission"
                            className="grid gtc12 ggap1-00
                                
                                mb3-00"
                        >
                            <header id="mission_header"
                                className="gr1s1 gc1s12 bg-gray w-100">
                                <hgroup id=""
                                    className=""
                                >
                                    <h2 className="mv1-00 pl1-00
                                        white-90 f2-00 ttu"
                                    >
                                        Mission
                                    </h2>     
                                </hgroup> 
                            </header>
                            <article id="" 
                                className="gr2s1 gc1s12 grid gtc12 blue0 "
                            >   
                                <div id ="mission_text" 
                                    className="gc1s12 gc2s5-m gr1s1-m f1-25 grid items-center justify-center"
                                >
                                    <p>
                                        “The Architectural and Engineering Services Limited, a firm of Consulting Engineers, Architects and Surveyors, exists to provide innovative and high quality services/ solutions in the design and supervision of projects in an efficient, timely and cost effective manner to delight its Clients within and outside Ghana, using the talents of highly developed, motivated, dedicated and well-managed workforce”.
                                    </p>
                                </div>
                            
                                <div id="mission_gallery"
                                    className="gr1s1 gc1s12 gc7s5-m
                                            ggap1-00
                                            ">
                                    
                                    <article id="" 
                                        className="gr1s1 gc1s12
                                        flex flex-column items-center justify-center"
                                    >
                                        <figure >
                                            <img src={mission}
                                                alt=""
                                                className="
                                                    w-100 h-100
                                                    cover"
                                                /> 
                                        </figure>
                                    </article>
                                </div>
                            
                            </article>
                            <footer id="mission_footer" className="gr3s1 gc1s12 pa1-00 bg-gray white-90 w-100">
                                Practice || Mission Vision and Values / Mission
                            </footer> 
                        </div>
                        {/* <!-- Mission End --> */}

                        {/* <!-- Vision Start --> */}
                        <div id="mvv--vision"
                            className="grid gtc12 ggap1-00
                                
                                mb3-00"
                        >
                            <header className="gr1s1 gc1s12 bg-gray w-100">
                                <hgroup id=""
                                    className=""
                                >
                                    <h2 className="mv1-00 pl1-00
                                        white-90 f2-00 ttu"
                                    >
                                    Vision
                                    </h2>     
                                </hgroup> 
                            </header>
                            <article id="Project_Overview_1" 
                                className="gr2s1 gc1s12 grid gtc12 blue0"
                            >   
                                <div className="gc1s12 gc7s5-m gr2s1 gr1s1-m f1-25 grid items-center justify-center">
                                    <p>
                                        “The Corporate vision is to attain and sustain leadership in the Construction Consultancy Service industry in Ghana as a world class company”.

                                    </p>
                                </div>
                                
                                {/* <!-- Practice --> */}
                                <div id="practice"
                                    className="gr1s1 gr1s1-m gc1s12 gc2s5-m
                                    ggap1-00">
                                    <article id="" 
                                        className="gr1s1 gc1s12
                                        flex items-center justify-center
                                        relative">
                                        <figure >
                                            <img src={vision}
                                                alt=""
                                                className="
                                                    w-100 h-100
                                                    cover"
                                                /> 
                                        </figure>
                                    </article>
                                    {/* <!-- Practice --> */}
                                
                                </div>
                                {/* <!-- Practice --> */}
                            </article>
                            <footer className="gr3s1 gc1s12 pa1-00 bg-gray white-90 w-100">
                                Practice || Mission Vision and Values / Vision
                            </footer>
                        </div>
                        {/* <!-- Vision End --> */}

                        {/* <!-- Values Start --> */}
                        <div id="mvv--values"
                            className="grid gtc12 ggap1-00 
                                mb1-00"
                        >
                            <header id="values_header"
                                className="gr1s1 gc1s12 bg-gray w-100">
                                <hgroup id=""
                                    className=""
                                >
                                    <h2 className="mv1-00 pl1-00
                                        white-90 f2-00 ttu"
                                    >
                                        Values
                                    </h2>     
                                </hgroup> 
                            </header>
                            <article id="values_main" 
                                className="gr2s1 gc1s12 grid gtc12 blue0"
                            >   
                                <div className="gc1s12 gc2s5-m gr2s1 gr1s1-m f1-25 grid items-center justify-center">
                                    <p>
                                        Professionalism
                                        Excellence
                                        Integrity and Honesty
                                        Timely and Cost effectiveness in service delivery to create value for money.
                                    </p>
                                </div>
                                
                                {/* <!-- Practice --> */}
                                <div id="practice"
                                    className="gr1s1 gc1s12 gc7s5-m
                                    ggap1-00">
                                    <article id="proposed_apartment_2" 
                                        className="gr2s2 gc2s10
                                        flex items-center justify-center
                                        relative">
                                        <figure className="shadow-5">
                                            <img src={values}
                                                alt=""
                                                className="w-100
                                                
                                                    ba b--gold 
                                                    "
                                                /> 
                                        </figure>
                                    </article>
                                    <article id="misc_gold" 
                                        className="gr3s1 gc6s1
                                            flex items-center justify-center
                                            bg-gold
                                            ">
                                    </article>
                                    <article id="misc_blue" 
                                        className="gr2s1 gc6s3
                                            flex items-center justify-center
                                            bg-black-90
                                            ">
                                    </article>
                                    {/* <!-- Practice --> */}
                                </div>
                                {/* <!-- Practice --> */}
                            </article>
                            <footer id="page_footer"
                                className="gr3s1 gc1s12 pa1-00 white-90 bg-gray w-100">
                                Practice || Mission Vision and Values / Values
                            </footer>
                        </div>
                        {/* <!-- Values End --> */}
                        <SectionFooter sectionTitle = "Paractice/Mission Vision and Values"/>
                    </div>

                    <div id="pageNav" 
                        className="dn flex-l gc4s1
                            w-100 blue0 relative"
                    >
                        <div className="flex flex-column justify-between
                            vh-100 
                            ph2-00 pb1-00
                            pt5-00
                            sticky top-0"
                        >
                            <div>
                                <Link to = "/practice"
                                    className="dib mb1-00 
                                        f1-25 blue0 ttu fw6">Back to Practice
                                </Link>
                                <ul className="mb1-00 bl bw4 pa1-00 b--gray gray f0-75">
                                    <h3 >Mission vision Values</h3>
                                    <li className="mb1-00 i">
                                        <a href="#mvv--overview"
                                            className="gray"
                                        >
                                        Overview</a> 
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#mvv--mission"
                                            className="gray"
                                        >
                                        Mission</a> 
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#mvv--vision"
                                            className="gray"
                                        >
                                        Vision</a> 
                                    </li>
                                    <li className="mb1-00 i">
                                        <a href="#mvv--values"
                                            className="gray"
                                        >
                                        Values</a> 
                                    </li>
                                </ul>
                            </div> 

                            <div className="h6-00 gray">
                                <small>Previous</small><br/>
                                <Link to ="/practice/functions" 
                                    className="mb1-00 f0-75 gray b"
                                >
                                    AESL Functions
                                </Link> <br/><br/>
                                <small>Next</small><br/>
                                <Link to ="/practice/sector-ministry" 
                                    className="mb1-00 f0-75 gray b"
                                >
                                    AESL Sector Ministry
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                
                </div>
            </main>
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageTitle="Mission Vision and Values"/>
            {/* Page Footer End */}
        </div>
    )
}

export default MVV