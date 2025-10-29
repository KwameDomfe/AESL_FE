import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import AESLPracticeNav from '../../components/organisms/navs/AESL_PracticeNav'
import ShareButtons from '../../components/molecules/social/ShareButtons'
import PageOverview from '../../components/molecules/pages/PageOverview'

import PracticeCard from './PracticeCard'
import PracticeCardReverse from './PracticeCardReverse'

// Images

import practiceBanner from '../../images/practice/00.jpg'
import sectorMinistry from '../../images/practice/sector_ministry/sm-02.jpg'
import corporateGovernance from '../../images/practice/corporate-governance/board-meeting.jpeg'
import management from '../../images/practice/management/00.jpeg'
import history from '../../images/practice/history/History-01.JPG'
import mandate from '../../images/practice/mandate/00.jpg'
import functions from '../../images/practice/functions/00.jpg'
import mvandv from '../../images/practice/mission_vision_values/00.jpg'
import alliances from '../../images/practice/alliances/00.jpg'
import clientSpeaks from '../../images/practice/client_speak/00.jpeg'
import corporateResponsibilities from '../../images/practice/corporate_responsilities/01.jpg'
import { PiBuildingOfficeBold } from 'react-icons/pi'


const Index = () => {
    return (
        <article id = ""
            className = ""
        >
            {/* Page Header Start */}
            <header className="bg-gray">
                <CategoryHeaderBanner 
                    image = {practiceBanner}
                    icon = {<PiBuildingOfficeBold />}
                    title ='practice'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End  */}
          
            <main id = "" 
                className=""
            >
                 {/* <!-- Overview --> */}
            <div id="overview"
                className="grid gtc12 ggap1-00
                    ph1-00 mb2-00
                    blue0"
            >
                {/* <!-- Overview Description -->  */}
                <header 
                    className="gr1s1 gc2s10 
                        w-100
                        blue0 bb"
                >
                   <PageOverview overview = 'Our practice focuses on delivering excellence to clients’ requirements. We are set apart in the industry due to our comprehensive meticulous practice that focuses on delivering excellence. Combining our architectural and engineering expertise, AESL consistently deliver projects that not only meet client requirements but also exceed expectations, resulting in exceptional and enduring built environments.'
                   />
                </header>
                {/* <!-- Overview Description --> */}
            </div>
            {/* <!-- Overview --> */}
            <div id="practice__content" 
                className="bg-blue mb1-00"
            >

                <div className='pa1-00 pa2-00-s pa4-00-m'>
                    <PracticeCardReverse 
                        image = {sectorMinistry}
                        description = 'The Ministry of Works and Housing is a key government agency responsible for the planning, development, and management of infrastructure and housing within the country. With its significant history tied to the country’s development and governance, the Ministry’s evolution reflects Ghana’s changing needs and priorities in infrastructure and housing, positioning it as a key player in the country’s ongoing projects.'
                        title = 'Sector Ministry'
                        url = 'sector-ministry'
                    />
                </div>
                <div className='pa1-00 pa2-00-s pa4-00-m'>
                    <PracticeCard 
                        image = {corporateGovernance}
                        description = "AESL's corporate governance upholds ethical standards and promotes integrity and professionalism through a comprehensive code of conduct and a well-structured Board of Directors."
                        title = 'Corporate Governance'
                        url = 'corporate-governance'
                    />
                </div>
                <div className='pa1-00 pa2-00-s pa4-00-m'>
                    <PracticeCardReverse 
                        image = {management}
                        description = 'The management team is responsible for driving innovation, maintaining high standards of quality, and providing exceptional architectural and engineering services to clients. They provide strategic direction and oversee the day-to-day activities of the company, working closely with employees to ensure projects are executed successfully, budgets and timelines are adhered to, and client satisfaction is achieved.'
                        title = 'Management'
                        url = 'management'
                        
                    />
                </div>
                <div className='pa1-00 pa2-00-s pa4-00-m'>
                    <PracticeCard 
                        image = {history}
                        description = 'AESL initially came to be known as AESC when consultancy services were separated from the Public Works Department (PWD) under NRCD 193, 1973. As a government corporation, AESC became the sole consultant for public works. The company was later restructured by an act of parliament, ACT 461 Statutory Corporation (Conversion to Companies).'
                        title = 'History'
                        url = 'history'
                    />
                </div>
                <div className='pa1-00 pa2-00-s pa4-00-m'>
                    <PracticeCardReverse 
                        image = {functions}
                        description = 'AESL provides an extensive variety of architectural and engineering services, including architectural design, engineering analysis and design, project management, construction documentation, construction supervision, sustainable design and energy efficiency, and client communication as well as collaboration.'
                        title = 'Functions'
                        url = 'functions'
                    />
                </div>
                <div className='pa1-00 pa2-00-s pa4-00-m'>
                    <PracticeCard 
                        image = {mandate}
                        description = 'Our company provides comprehensive architectural and engineering services to clients, including conceptualizing, designing, and managing projects with high-quality, innovative, and sustainable solutions.'
                        title = 'Mandate'
                        url = 'mandate'
                    />
                </div>
                <div className='pa1-00 pa2-00-s pa4-00-m'>
                    <PracticeCardReverse 
                        image = {mvandv}
                        description = 'The Mission, Vision and Values of AESL is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore saepe atque voluptatum, harum vitae..'
                        title = 'Mission Vision and Values'
                        url = 'mission-vision-and-values'
                        altColour='red'
                    />
                </div>
                <div className='pa1-00 pa2-00-s pa4-00-m'>
                    <PracticeCard 
                        image = {alliances}
                        description = 'Aesl partners with other firms, clients, and organizations to manage complex projects, aiming to achieve strategic goals like service expansion, improved outcomes, and combined expertise. They offer comprehensive consulting services, technical expertise, human resources, and collaborative project management approaches.'
                        title = 'Alliances'
                        url = 'alliances'
                    />
                </div>
                <div className='pa1-00 pa2-00-s pa4-00-m'>
                    <PracticeCardReverse 
                        image = {clientSpeaks}
                        description = 'The management of AESL is the Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus tempore saepe atque voluptatum, harum vitae..'
                        title = 'Client Speaks'
                        url = 'client-speaks'
                        altColour = 'red'
                    />
                </div>
                <div className='pa1-00 pa2-00-s pa4-00-m'>
                    <PracticeCard 
                        image = {corporateResponsibilities}
                        description = 'Aesl upholds high ethical standards in business practices, ensuring transparency, integrity, and accountability. It promotes sustainable design and engineering solutions, minimizing ecological impact and promoting resource conservation. The company values diversity and collaboration, fostering a culture of respect and collaboration. This commitment to ethical practices positions Aesl as a responsible leader in the architectural and engineering sectors.'
                        title = 'Corporate Responsibilities'
                        url = 'corporate-responsibilities'
                    />
                </div>

                <div className='pa1-00 pa2-00-s pa4-00-m grey'>
                    <PracticeCardReverse 
                        image = {clientSpeaks}
                        description = 'AESL offers a comprehensive suite of services that encompass architectural design, engineering, project management, and consulting, with the goal of delivering high-quality, sustainable, and innovative solutions that meet client requirements and contribute to the development of robust and well-executed construction projects.'
                        title = 'Services'
                        url = 'services'
                        
                    />
                </div>
            </div>
            </main>
          
            <footer className=""
            >
                <AESLPageFooter 
                pageTitle = 'Practice'
                />
            </footer>
      </article>
  
  )
}

export default Index