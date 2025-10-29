
import mandate from '../../../images/practice/mandate/00.jpg'
import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import SectionFooter from '../../../components/organisms/footers/SectionFooter'
import { Link } from 'react-router-dom'
import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'

const Mandate = () => {
    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {mandate}
                    title = 'Mandate'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main id="" 
                className="ph1-00"
            >
                <div id="l__3:1"
                    className="grid gtc4"
                >
                    <div id="pageMain"
                        className="gc1s3
                            mb1-00 min-v-100"
                    >   
                        <article id="pageDetails"
                            className="gc1s3
                                mb1-00 min-v-100"
                        >   
                            {/* Practice Mandate */}
                            <div id="p--mandate"
                                className="grid gtc12 ggap1-00"
                            >
                                <article id="Project_Overview_1" 
                                    className="gr2s1 gc1s12"
                                >   
                                    <div className="ggap1-00 
                                        pv4-00 mh4-00
                                        tj blue0 lh-copy f1-25"
                                    >
                                        <p>
                                        Our company provides comprehensive architectural and engineering services to clients, including conceptualizing, designing, and managing projects with high-quality, innovative, and sustainable solutions. 

                                        </p>
                                        <p>
                                        The company strives to create functional, aesthetically pleasing and environmentally responsible designs that enhance the built environment and contribute positively.
                                        </p>
                                    </div>
                                </article>
                            </div>
                            
                            {/* Practice */}
                            {/* <div id="p--mandateGallery"
                                className="gr3s1 gc1s12
                                    grid gtc12 ggap1-00
                                    white-90"
                            >
                                <article id="" 
                                    className="gr1s1 gc1s3
                                    flex items-center justify-center
                                    relative"
                                >
                                     <hgroup 
                                        className="flex flex-column items-center justify-center
                                            pa0-50 bg-blue0 
                                            absolute
                                                ">
                                        <h3>
                                            practice_2
                                        </h3>    
                                        <span>
                                            - Techiman, Ghana.
                                        </span>    
                                    </hgroup>  
                                    <figure 
                                    >
                                        <img src={mandate}
                                            alt=""
                                            className="
                                                w-100 h-100
                                                cover"
                                        /> 
                                    </figure>
                                </article>
                                
                                <article id="passport_office" 
                                    className="gr1s1 gc6s4
                                        flex items-center justify-center
                                        relative"
                                >
                                    <figure className="shadow-5"
                                    >
                                        <img src={mandate}
                                            alt=""
                                            className="pa0-50"
                                        /> 
                                    </figure>
                                     <hgroup 
                                        className="flex flex-column items-center justify-start
                                            pa0-50
                                            bg-blue0
                                            absolute
                                                ">
                                        <h3>
                                        Refeurbished Passport Office
                                        </h3>    
                                        <span>
                                        - Accra , Ghana.
                                        </span>    
                                    </hgroup>  
                                </article>
                            
                                <article id="proposed_apartment_2" 
                                    className="gr2s2 gc1s3
                                    flex items-center justify-center
                                    relative"
                                >
                                    
                                     <hgroup 
                                        className="flex flex-column items-center justify-start
                                            pa0-50
                                            bg-blue0
                                            absolute
                                                ">
                                        <h3>
                                        Proposed Apartment
                                        </h3>    
                                        <span>
                                        - Accra , Ghana.
                                        </span>    
                                    </hgroup>  
                                    <figure className="shadow-5"
                                    >
                                        <img src={mandate}            
                                            alt=""
                                            className="w-100
                                            
                                                ba b--gold 
                                                "
                                        /> 
                                    </figure>
                                </article>
                            
                                <article id="Office_Techiman" 
                                    className="gr4s1 gc8s5
                                        flex items-center justify-center
                                        relative"
                                >
                                    
                                    <hgroup 
                                        className="flex items-center justify-center
                                            bg-blue0
                                            absolute
                                                ">
                                        <h3 className="
                                                flex items-center justify-around
                                                pa0-50
                                                white-90">
                                            OFFICE BLOCK
                                        </h3>    
                                        <span className="white-90 flex items-center justify-center">
                                            - Techiman, Ghana.
                                        </span>    
                                    </hgroup>  
                                    <figure 
                                    >
                                        <img src={mandate}
                                            alt=""
                                            className="
                                                ba b--gold 
                                                "
                                        /> 
                                    </figure>
                                </article>
                            
                                <article id="misc_gold" 
                                    className="gr3s1 gc6s1
                                        flex items-center justify-center
                                        bg-gray"
                                >
                                </article>
                            
                                <article id="misc_blue" 
                                    className="gr2s1 gc6s3
                                        flex items-center justify-center
                                        bg-black-90"
                                >
                                </article>
                            </div> */}
                            {/* Practice */}
                        </article>
                        <SectionFooter
                            sectionTitle = 'Mandate'
                        />
                    </div>
                    {/* Practice Mandate */}

                    <div id="pageAside" 
                        className="gc4s1 
                            w-100 blue0 relative"
                    >
                        <div 
                            className="flex flex-column justify-between
                                min-vh-100 
                                ph2-00 pb1-00
                                pt5-00
                                sticky top-0"
                        >
                            <div
                            >
                                <a href= "/practice"
                                    className="dib mb1-00 
                                        f1-25 blue0 ttu fw6"
                                >
                                    Back to Practice
                                </a>
                                <ul className="mb1-00 bl bw4 pa1-00 b--gray gray f0-75"
                                >
                                    <h3 >Mandate</h3>
                                    <li className="mb1-00 i">
                                        <a href="#p--mandate"
                                            className="gray"
                                        >
                                            AESL Mandate
                                        </a>
                                    </li>
                                </ul>
                            </div> 

                            <div className="h6-00 gray">
                                <small>Previous</small><br/>
                                <Link to="/practice/history" 
                                    className="mb1-00 f0-75 gray b"
                                >
                                    AESL History
                                </Link> <br/><br/>
                                <small>Next</small><br/>
                                <Link to="/practice/functions" 
                                    className="mb1-00 f0-75 gray b"
                                >
                                    AESL Functions
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageTitle="Mandate"/>
             {/* Page Footer End */}
        </div>
    )
}

export default Mandate