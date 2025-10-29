
// Components
import SectionHeader from '../../components/organisms/headers/SectionHeader'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import ProjectCategoryCard from '../../components/organisms/cards/ProjectCategoryCard'

// Images
import projectsbgImage from '../../images/_partials/backgrounds/01.jpg'
import civicAndCulture from '../../images/projects/civic_and_culture/civic/civic_2.jpg'
import education from '../../images/projects/education/5_2.jpg'
import health from '../../images/projects/health/1_1a.jpg'
import office_and_mixed_use from '../../images/projects/office_retail_and_mixed_use/6_1a.jpg'
import industrial_and_retail from '../../images/projects/hospitality/2_2a.jpg'
import hospitality from '../../images/projects/hospitality/1_1a.jpg'
import infrastructure_and_survey from '../../images/projects/industrial_and_infrastructure/1_2.jpg'
import residential from '../../images/projects/residential/proposal_5/5_4a.jpg'
import landscape_and_master_planning from '../../images/projects/landscape_planning_and_survey/00.jpg'
import sports_and_leisure from '../../images/projects/sports_and_leisure/00.jpg'
import { Link } from 'react-router-dom'

const ProjectCategories = () => {
    return (
        <section id="HomePageMain--ProjectCategories"
                    className="bg-black-20 mb1-00"            
                >
                    <SectionHeader 
                        bgImage= {projectsbgImage}
                        title = 'Projects' 
                        overview = 'Our impressive portfolio of diverse and notable projects is characterized by innovative and sustainable design solutions that prioritize functionality, aesthetics, and the well-being of occupants. Our projects also cuts across all the tribal cultures and the socioeconomic sectors of the Ghanaian economy.'
                    />
                    <article id="ProjectCategories__content"
                        className="flex items-center justify-center
                            pa2-00 pa4-00-m"
                    >
                        <div id="4x4_Grid_projectCategories__content"
                            className="grid gtc12 ggap1-00 
                                pa1-00
                                bg-blue0"
                        >
                            <div id="projectCategories__civicAndCulture"
                                className="gr1s1 gc1s12
                                    gc1s6-s
                                    gr1s3-m gc1s3-m 
                                    grid items-center justify-center
                                    white-90"
                            >
                                <ProjectCategoryCard 
                                    url='projects/civic-and-culture'
                                    image={civicAndCulture}
                                    caption='Civic and Culture'
                                />
                            </div>
                            
                            <div id="projectCategories__education"
                                className="gr2s1 gc1s12 
                                    gr1s1-s gc7s6-s 
                                    gr1s3-m gc4s3-m 
                                    grid items-center justify-center
                                    white-90"
                            >
                                <ProjectCategoryCard 
                                    url='projects/education'
                                    image={education}
                                    caption='Education'
                                />
                            </div>

                            <div id="projectCategories__health" 
                                className="gr3s1 gc1s12 
                                    gr2s1-s gc1s6-s 
                                    gr1s3-m gc7s3-m
                                    grid items-center justify-center"
                            >
                                <ProjectCategoryCard 
                                    url='projects/health'
                                    image={health}
                                    caption='Health'
                                />
                            </div> 
                                
                            <div id="projectCategories__officeAndMixedUse" 
                                className="gr4s1 gc1s12
                                    gr2s1-s gc7s6-s
                                    gr1s3-m gc10s3-m
                                    grid items-center justify-center
                                    r"
                            >
                                <ProjectCategoryCard 
                                    url='projects/office-and-mixed-use'
                                    image={office_and_mixed_use}
                                    caption='Office and Mixed-Use'
                                />
                            </div>
            
                            <div id="projectCategories__industrialAndRetail" 
                                className="gr5s1 gc1s12
                                    gr3s1-s gc1s6-s
                                    gr4s3-m gc1s3-m
                                    grid items-center justify-center"
                            >
                                <ProjectCategoryCard 
                                    url='projects/industrial-and-retail'
                                    image={industrial_and_retail}
                                    caption='Industrial and Retail'
                                />
                            </div>
                            
                            <div id="projectCategories__hospitality" 
                                className="gr6s1 gc1s12
                                    gr3s1-s gc7s6-s
                                    gr4s3-m  gc10s3-m
                                    grid items-center justify-center" 
                            >
                                <ProjectCategoryCard 
                                    url='projects/hospitality'
                                    image={hospitality}
                                    caption='Hospitality'
                                />
                            </div>
                            
                            <div id="projectCategories__infrastructureAndSurvey" 
                                className="gr7s1 gc1s12
                                    gr4s1-s gc1s6-s
                                    gr7s3-m gc4s3-m
                                    grid items-center justify-center "
                            >
                                <ProjectCategoryCard 
                                    url='projects/infrastructure-and-survey'
                                    image={infrastructure_and_survey}
                                    caption='Infrastructure and Survey'
                                />
                            </div>
                            
                            <div id="projectCategories__residential" 
                                className="gr8s1 gc1s12
                                    gr4s1-s gc7s6-s
                                    gr7s3-m gc10s3-m
                                    grid items-center justify-center"
                            >
                                <ProjectCategoryCard 
                                    url='projects/residential'
                                    image={residential}
                                    caption='residential'
                                />
                            </div>
                            
                            <div id="projectCategories__landscapeAndMmasterplanning" 
                                className="gr9s1 gc1s12
                                    gr5s1-s gc1s6-s
                                    gr7s3-m gc7s3-m
                                    grid items-center justify-center"
                            >
                                <ProjectCategoryCard 
                                    url='projects/landscape-and-master-planning'
                                    image={landscape_and_master_planning}
                                    caption='landscape and master-planning'
                                />
                            </div>
                            
                            <div id="projectCategories__sportsAndLeisure" 
                                className="gr10s1 gc1s12
                                    gr5s1-s gc7s6-s
                                    gr7s3-m gc1s3-m
                                    grid items-center justify-center"
                            >
                                <ProjectCategoryCard 
                                    url='projects/sports-and-leisure'
                                    image={sports_and_leisure}
                                    caption='Sports and Leisure'
                                />
                            </div>
                        
                            <div id="projectCategories__brief" 
                                className="gr11s1 gc1s12
                                    gr6s1-s
                                    gr4s3-m gc4s6-m
                                    grid"
                            >
                                <figure className="shadow-5  grid  items-center justify-center">
                                    <hgroup id = ""
                                        className="gr1s1 gc1s1 flex flex-column items-center justify-center
                                            h-100 w-100 bg-white
                                            ph1-00
                                            blue0
                                            f0-75
                                            tc
                                            
                                                ">
                                        <h1 className = "blue0 f2-00 mv1-00">
                                            Losts of projects and still counting
                                        </h1>    
                                        <Link to="projects"
                                            className="blue0 ba br0-25 dib pa0-50 mb0-50 f1-00"
                                        >
                                            AESL Projects
                                        </Link>   
                                    </hgroup> 
                                </figure>
                            </div>
                        </div>
                    </article>
                    <SectionFooter 
                        sectionTitle = 'Projects'
                    />
                </section>
    )
}

export default ProjectCategories