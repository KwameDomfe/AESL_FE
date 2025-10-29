// Components
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLPrinciplesNav from '../../components/organisms/navs/AESLPrinciplesNav'
import CategoryOverview from '../../components/molecules/CategoryOverview'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import PrinciplesCard from './PrinciplesCard'
import SectionFooter from '../../components/organisms/footers/SectionFooter'

// Icons
import { LuFootprints } from 'react-icons/lu'

// Images
import principlesBanner from '../../images/principles/00.png'
import principles01 from '../../images/practice/_partials/practice_2.jpg'


const PrinciplesIndex = () => {
    
    return (
        <div id="principles-home-page"
            className=""
        > 
            {/* Page Header Start */}
            <header id = "pageHeader"
                className="bg-red"
            >
                <CategoryHeaderBanner 
                    image = {principlesBanner}
                    title ='principles'
                    icon = {<LuFootprints />}
                />
                <AESLPrinciplesNav />
            </header>
            {/* Page Header End  */}
        
            {/* Page Main  */}
            <main id="" 
                className="bg-white "
            >
                {/* Overview  */}
                <div id="ContentHeader"
                    className="grid gtc12 ggap1-00
                        mb2-00"
                >
                    <CategoryOverview
                        description="Our company is committed to excellence, innovation, sustainability, collaboration, and ethical conduct in order to deliver architectural and engineering services. We strive for excellence, innovation, sustainability, collaboration, and ethical conduct."
                    />
                </div>
                {/* Overview  */}
                
                <div id="Content"
                    className="grid gtc12 ggap1-00 mb1-00
                        white-90"
                >
                    <article id="principles_Civic" 
                        className="gr1s1 gc1s12 gc2s10-s gc2s7-m
                            grid items-center z-2 justify-center"
                    > 
                        <PrinciplesCard 
                            bgImage= {principles01}
                            title= "Civic"
                            overview="Architectural and Engineering Services Limited (A.E.S.L) collaborates with local governments to address civic needs through safety-focused designs and engineering projects. They ensure structures meet regulatory standards and contribute positively to the public sector. AESL supports urban planning initiatives, promoting sustainable growth and efficient land use. They educate local schools and organizations on architecture and engineering, raising industry awareness through internship programs and National Services."
                            url="/principles/"
                            colour = "red"
                        />
                    </article>
                    <article id="misc_gold" 
                        className="gr1s1 gc9s3
                            grid items-center justify-center
                            ba b--red bw3 br0-25"
                    >
                    </article>
                    
                    <article id="principles_Professionalism" 
                        className="gr2s1 gc1s12 gc2s10-s gc5s7-m
                            grid items-center justify-center 
                            z-2"
                    >
                        <PrinciplesCard 
                            bgImage= {principles01}
                            title= "PROFESSIONALISM"
                            overview="As a reputable company, Architectural and Engineering Services Limited (A.E.S.L) upholds high industry standards and ethical practices. Our team of skilled professionals is dedicated to continuous learning and innovation, ensuring they stay at the forefront of design and engineering advancements. We prioritize clear communication, transparency, trust, and reliability, delivering quality results and exceeding client expectations in every project."
                            url="/principles/"
                            colour = "blue0"
                        />
                    </article>
                    <article id="misc_black" 
                        className="gr2s1 gc2s3
                            flex items-center justify-center
                            ba b--blue0 bw3 br0-25
                            ">
                    </article>
                    
                    <article id="principles_Excellence" 
                        className="gr3s1 gc1s12 gc2s10-s gc2s7-m
                        grid items-center justify-center z-2"
                    >
                        <PrinciplesCard 
                            bgImage= {principles01}
                            title= "excellence"
                            overview="Architectural and Engineering Services Limited (AESL) is committed to providing innovative, high-quality design and engineering solutions to clients. They use advanced technologies and best practices to ensure timely and budget-friendly project completion. They continuously seek feedback and incorporate lessons learned to improve processes. Their culture of collaboration and accountability aims to exceed client expectations in every aspect of their work."
                            url="/principles/"
                            colour = "red"
                        />
                    </article>
                
                    <article id="principles_IntegrityAndHonesty" 
                        className="gr4s1 gc1s12 gc2s10-s gc5s7-m
                            grid items-center justify-center
                            z-2"
                    >
                        <PrinciplesCard 
                            bgImage= {principles01}
                            title= "Integrity and Honesty"
                            overview="Architectural and Engineering Services Limited (AESL) upholds integrity, honesty, and transparency in all interactions, fostering trust, credibility, and lasting relationships through accurate information, fair pricing, and reliable timelines."
                            url="/principles/"
                            colour = "blue0"
                        />
                    </article>

                    <article id="principles_TimelinessAndCostEffectiveness" 
                        className="gr5s1 gc1s12 gc2s10-s gc2s7-m
                            grid items-center justify-center
                            z-2"
                    >
                        <PrinciplesCard 
                            bgImage= {principles01}
                            title= "Timeliness And Cost Effectiveness"
                            overview="Architectural and Engineering Services Limited (AESL) prioritizes timeliness through effective project management techniques, offering affordable solutions while maintaining quality. Their staff meticulously organizes and distributes resources to maximize efficiency and reduce waiting times. They complete projects on time and within budget, exceeding client expectations and improving satisfaction levels."
                            url="/principles/"
                            colour = "red"
                        />
                    </article>
                
                    <article id="principles_Sustainability" 
                        className="gr6s1 gc1s12 gc2s10-s gc5s7-m
                            grid items-center justify-center z-2"
                        
                    >
                        <PrinciplesCard 
                            bgImage= {principles01}
                            title= "Sustainability"
                            overview="Architectural and Engineering Services Limited (AESL) is dedicated to sustainability in all aspects of their work, prioritizing eco-friendly design principles and minimizing environmental impact. They actively seek innovative solutions for energy efficiency and resource conservation in every project. They collaborate with clients and stakeholders to integrate sustainability into planning and execution stages, aiming to create lasting positive impacts on communities and the environment"
                            url="/principles/"
                            colour = "blue0"
                        />
                    </article>

                    <article id="misc_gold" 
                        className="gr3s1 gc9s3 ba b--red bw3 br0-25"
                    >
                    </article>
                
                    <article id="misc_black" 
                        className="gr4s1 gc2s3
                            ba b--blue0 bw3 br0-25"
                    >
                    </article>

                    <article id="misc_gold" 
                        className="gr5s1 gc9s3
                            ba b--red bw3 br0-25"
                    >
                    </article>
                
                    <article id="misc_black" 
                        className="gr6s1 gc2s3
                            ba b--blue0 bw3 br0-25"
                    >
                    </article>
                    {/* Practice  */}
                </div>
                    <div id="ContentFooter"
                        className="mb1-00 gc2s10"
                    >
                        <SectionFooter
                            sectionTitle ="Principles"
                        />
                    </div>

            </main>
            {/* Page Main  */}
            
            {/* Footer */}
            <div id="PageFooter">
                <AESLPageFooter 
                    pageTitle ="Principles"
                />
            </div>
            {/* Footer */}

        </div>
    )
}

export default PrinciplesIndex