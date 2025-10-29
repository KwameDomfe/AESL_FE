import projectsBanner from '../../images/projects/00.jpeg'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLProjectsNav from '../../components/organisms/navs/AESLProjectsNav'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import { Link } from 'react-router-dom'
import { projects } from '../../data/projectsInfo'

const ProjectsList = () => {
    return (
        <article id = ""
            className = ""
        >
            {/* Page Header Start */}
            <header id=""
                className="bg-yellow"
            >
                <CategoryHeaderBanner
                    image = {projectsBanner}
                    title ='projects List'
                />
                <AESLProjectsNav />
            </header>
            {/* Page Header End */}
            
            {/* Page Main Start */}
            <main className="bg-white grid gtc12"
            >
                <header id="functions--overview"
                                className="gr1s1 gc2s10 f1-25"
                            >
                    <hgroup id=""
                        className="mv2-00"
                    >
                        <p className=" 
                                lh-copy tj"
                        >
                            These are the Projects of The Architectural and Engineering Services Corporation (AESC) as it was then called, was established in 1973 under the National Redemption Council Decree (NRCD) 193 to take over the consultancy functions of the then Public Works Department (PWD). 
                        </p>
                        <p className="lh-copy tj"
                        >
                        </p>
                    </hgroup>
                </header>
    
                {/* <!-- Projects List--> */}
                <div id="projects"
                    className= "gc1s12 ph1-00 mt2-00"
                >
                    <div 
                        className="flex ggap1-00
                            b
                            bb"
                    >
                        <span className="w8-00 pb0-50 mb0-50 ">Start Date</span>
                        <span className="w10-00 pb0-50 mb0-50 ">Category</span>
                        <span className="w8-00 pb0-50 mb0-50">SubCategory</span>
                        <span className="w20-00 pb0-50 mb0-50">Project Name</span>
                        <span className="w14-00 pb0-50 mb0-50">Client Name</span>
                        <span className="w12-00 pb0-50 mb0-50">Location</span>
                    </div>
                    <ul className="mb1-00"
                    >
                        {projects.map((project, index) => {
                            // Create slugified project name for URL
                            const slugify = name => name.replace(/\s+/g, '-').toLowerCase();
                            const slug = slugify(project.name);
                            const category = project.category?.url || '';
                            const subcategory = project.category?.subCategory || '';
                            
                            return (
                                <li key={project.id} className="flex items-center justify-between
                                    w-100 f1-00"
                                >
                                    <Link to={`/projects/${category}/${subcategory}/${slug}`}
                                        className="dib w-100"
                                    >
                                        <article id="" 
                                            className="flex items-center justify-center"
                                        >
                                            <hgroup 
                                                className="flex justify-start 
                                                w-100 ggap1-00
                                                blue0 bb"
                                            >
                                                <p className="w8-00">{project.dates?.start || 'N/A'}</p>
                                                <p className="w10-00">{project.category?.name || 'N/A'}</p>
                                                <p className="w8-00">{project.category?.subCategory || 'N/A'}</p>
                                                <p className="w20-00">{project.name}</p>
                                                <p className="w14-00">{project.client || 'N/A'}</p>
                                                <p className="w12-00">{project.location || 'N/A'}</p>
                                            </hgroup>
                                        </article>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>

                    <article id="misc_gold" 
                        className="gr3s2 gc1s3
                            flex items-center justify-center
                            bg-gold h4-00 w8-00
                        ">
                    </article>
        
                    <article id="misc_blue" 
                        className="gr3s2 gc10s3
                            flex items-center justify-center
                            bg-black-90 h6-00 w2-00
                            ">
                    </article>

                </div>
                <footer id = "projectsPage__Footer"
                    className="gc1s12 mv1-00"
                >
                    <SectionFooter 
                        sectionTitle = "Projects List"
                    />
                </footer>
                {/* <!-- Projects List --> */}
                {/* <!-- Page Main --> */}
            </main>
            {/* Page Main End */} 

            {/* Page Footer Start */}
            <footer id="" 
                className=""
            >
                <AESLPageFooter
                    pageTitle = 'Projects List'
                />
            </footer>
            {/* Page Footer End */}
        </article>
    )
}

export default ProjectsList