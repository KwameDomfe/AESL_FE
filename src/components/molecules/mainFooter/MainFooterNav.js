import React from 'react'
import { BsPeople } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'
import { LuFootprints } from 'react-icons/lu'
import { PiBuildingOfficeBold } from 'react-icons/pi'
import { Link } from 'react-router-dom'

const MainFooterNav = () => {
    return (
        <div className="grid
            items-start justify-between ggap0-50 
            w-100"
        >
            <div id="footer__projects"
                className= "gr1s1 gc1s12 gc1s6-s gc1s3-m"
                data-use-new="true" 
                role="tabpanel" 
                aria-label="projects" 
                section-index="1" 
            >
                <h2 className=""
                >
                    <span className="f1-00"><GrProjects /></span>
                    <Link className="white-90 ml0-50" 
                        to="projects"
                        role="button" 
                        aria-expanded="false"
                    >
                        PROJECTS
                    </Link>
                </h2>
                <ul className="flex flex-column items-center justify-center"
                >
                    <li className="w-100 
                        mb1-00"
                    >
                        <Link to="projects/civic-and-culture"
                            className="white-90 dib"
                        >
                            Civic and Culture
                        </Link>
                    </li>
                    <li className="w-100 
                        mb1-00"
                    >
                        <Link to="projects/education"
                            className="white-90 dib"
                        >
                            Education
                        </Link>
                    </li>
                    <li className="w-100 
                        mb1-00"
                    >
                        <Link to="projects/health"
                            className="white-90 dib"
                        >
                            Health
                        </Link>
                    </li>
                    <li className="w-100 
                        mb1-00"
                    >
                        <Link to="projects/office-retail-and-mixed-use"
                            className="white-90 dib"
                        >
                            Office Retail and Mixed-Use
                        </Link>
                    </li>
                    <li className="w-100 
                        mb1-00"
                    >
                        <Link to="projects/sports-and-leisure"
                            className="white-90 dib"
                        >
                            Sports and Leisure
                        </Link>
                    </li>
                    <li className="w-100 
                        mb1-00"
                    >
                        <Link to="projects/residential"
                            className="white-90 dib"
                        >
                            Residential
                        </Link>
                    </li>
                    <li className="w-100 
                        mb1-00"
                    >
                        <Link to="projects/industrial-and-infrastructure"
                            className="white-90 dib"
                        >
                            Industrial and Infrastructure
                        </Link>
                    </li>
                    <li className="w-100 
                        mb1-00"
                    >
                        <Link to="projects/hospitality"
                            className="white-90 dib"
                        >
                            Hospitality
                        </Link>
                    </li>
                    <li className="w-100 
                        mb1-00"
                    >
                        <Link to="projects/landscape-planning-and-survey"
                            className="white-90 dib"
                        >
                            Landscape, Planning and Survey
                        </Link>
                    </li>
                </ul>
            </div>

            <div id="footer__practice"  
                aria-label="practice"
                className="gr2s1 gr1s1-s gc1s12 gc7s6-s gc4s3-m" 
                data-use-new="true" 
                role="tabpanel"  
                section-index="2"
            >
                <h2 className=""
                >
                    <span className="f1-00"><PiBuildingOfficeBold /></span>
                    <Link className="white-90 ml0-50"  
                        to="practice"
                    >
                        PRACTICE
                    </Link>
                </h2>
                <ul className=""
                >
                    <li className="mb1-00 "
                    >
                        <Link  className="white-90" 
                            to="practice/history"
                        >
                            History
                        </Link>
                    </li>
                    <li className="mb1-00 ">
                        <Link  className="white-90" 
                            to="practice/mandate"
                        >
                            Mandate
                        </Link>
                    </li>
                    <li className="mb1-00 "
                    >
                        <Link  className="white-90" 
                            to="practice/functions"
                        >
                            Functions
                        </Link>
                    </li>
                    <li className="mb1-00 "
                    >
                        <Link  className="white-90" 
                            to="practice/mission-vision-and-values"
                        >
                            Mission, Vision & Values
                        </Link>
                    </li>
                    <li className="mb1-00 "
                    >
                        <Link  className="white-90" 
                            to="practice/sector-ministry"
                        >
                            Sector Ministry
                        </Link>
                    </li>
                    <li className="mb1-00 "
                    >
                        <Link  className="white-90" 
                            to="practice/corporate-governance"
                        >
                            Corporate Governance
                        </Link>
                    </li>
                    <li className="mb1-00 "
                    >
                        <Link  className="white-90" 
                            to="practice/management"
                        >
                            Management
                        </Link>
                    </li>
                    <li className="mb1-00 "
                    >
                        <Link  className="white-90" 
                            to="practice/services"
                        >
                            Services
                        </Link>
                    </li>
                    <li className="mb1-00 "
                    >
                        <Link  className="white-90" 
                            to="practice/client-speak"
                        >
                            Client Speak
                        </Link>
                    </li>
                    <li className="mb1-00 "
                    >
                        <Link  className="white-90" 
                            to="practice/alliances"
                        >
                            Alliances
                        </Link>
                    </li>
                    <li className="mb1-00 "
                    >
                        <Link  className="white-90" 
                            to="practice/corporate-responsibilities"
                        >
                            Corporate Responsibilities
                        </Link>
                    </li>
                </ul>
            </div>
            
            <div id="footer__principles" 
                className="gr3s1 gr2s1-s gr1s1-m gc1s12 gc1s6-s gc7s3-m
                " 
                data-use-new="true" 
                role="tabpanel" 
                aria-label="principles" 
                section-index="3"
            >
                <header
                >
                    <h2 className=""
                    >
                        <span className="f1-00"><LuFootprints /></span>
                        <Link className="white-90 ml0-50"  
                            to="principles"
                           
                        >
                            PRINCIPLES
                        </Link>
                    </h2>
                </header>

                <nav aria-label=""
                >
                    <ul className=""
                    >
                        <li className="mb1-00 ">
                            <Link  className="white-90" 
                                to="principles"
                            >
                                Civic
                            </Link>
                        </li>
                        <li className="mb1-00 ">
                            <Link  className="white-90" 
                                to="principles"
                            >
                                Professionalism
                            </Link>
                        </li>
                        <li className="mb1-00 ">
                            <Link  className="white-90" 
                                to="principles"
                            >
                                Excellence
                            </Link>
                        </li>
                        <li className="mb1-00 ">
                            <Link  className="white-90" 
                                to="principles"
                            >
                                Integrity and Honesty
                            </Link>
                        </li>
                        <li className="mb1-00 ">
                            <Link  className="white-90" 
                                to="principles"
                            >
                                Timeliness and Cost Effectiveness
                            </Link>
                        </li>
                        <li className="mb1-00 ">
                            <Link  className="white-90" 
                                to="principles"
                            >
                                Sustainability
                            </Link>
                        </li>
                        <li className="mb1-00 ">
                            <Link  className="white-90" 
                                to="principles"
                            >
                                Empowerment
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            
            <div id="footer__people" 
                className="gr4s1 gr2s1-s gr1s1-m gc1s12 gc7s6-s gc10s3-m
                " 
                data-use-new="true" 
                role="tabpanel" 
                aria-label="people" 
                section-index="4"
            >
                <header>
                    <h2 className="">
                    <span className="f1-00"><BsPeople /></span>
                    <Link className="white-90 ml0-50"   
                            to="people"
                            
                        >PEOPLE</Link>
                    </h2>
                </header>

                <nav aria-label="">
                    <ul className="">
                        <li className="mb1-00 "> 
                            <Link  className="white-90" 
                                to="people/principal-consultants">Principal Consultants</Link>
                        </li>
                        <li className="mb1-00 "> 
                            <Link  className="white-90" 
                                to="people/senior-consultants">Senior Consultants</Link>
                        </li>
                        <li className="mb1-00 "> 
                            <Link  className="white-90" 
                                to="people/consultants">Consultants</Link>
                        </li>
                        <li className="mb1-00 "> 
                            <Link  className="white-90" 
                                to="people/senior-professionals">Senior Professionals</Link>
                        </li>
                        <li className="mb1-00 "> 
                            <Link  className="white-90" 
                                to="people/professionals">Professionals</Link>
                        </li>
                        <li className="mb1-00 "> 
                            <Link  className="white-90" 
                                to="people/assistant-professionals">Assistant Professionals</Link>
                        </li>
                        <li className="mb1-00 "> 
                            <Link  className="white-90" 
                                    to="people/probationers">Probationers</Link>
                        </li>
                        <li className="mb1-00 "> 
                            <Link  className="white-90" 
                                    to="people/service-personnel">Service Personnels</Link>
                        </li>
                        <li className="mb1-00 "> 
                            <Link  className="white-90" 
                                    to="people/support-team">Support Team</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default MainFooterNav