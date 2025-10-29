// Images
// import proj01 from '../../images/projects/civic_and_culture/civic/police_headquaters/renderings/rendering_0.jpg'
// import proj02 from '../../images/projects/civic_and_culture/civic/police_headquaters/renderings/rendering_1.jpg'

// Components
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import AESLProjectsNav from '../../components/organisms/navs/AESLProjectsNav'
import ProjectCard from '../../components/organisms/cards/ProjectCard'
import SectionFooter from '../../components/organisms/footers/SectionFooter'

// Hooks
import { useParams } from 'react-router-dom'
import { useProjectFilters, useCategories, usePageMeta } from '../../hooks/useContextHooks'
import { useEffect } from 'react'

const ProjectCategoryDetail = () => {
    const { category } = useParams();
    const { setFilter } = useProjectFilters();
    const { categories, setCurrentCategory } = useCategories();
    const { projects } = useProjectFilters();
    const { setPageTitle, setPageMeta } = usePageMeta();

    // Find current category info
    const currentCategory = categories.find(cat => cat.url === category);

    // Set filter and page meta when component mounts or category changes
    useEffect(() => {
        if (!category) return;
        // Only update filter if not already set
        setFilter(prev => {
            if (prev === category) return prev;
            return category;
        });
        const foundCategory = categories.find(cat => cat.url === category);
        setCurrentCategory(prev => {
            if (prev && foundCategory && prev.url === foundCategory.url) return prev;
            return foundCategory;
        });
        if (foundCategory) {
            setPageTitle(prev => {
                if (prev === foundCategory.name) return prev;
                return foundCategory.name;
            });
            setPageMeta(prev => {
                const newMeta = {
                    description: `Explore ${foundCategory.name} projects by AESL`,
                    keywords: `${foundCategory.name}, projects, architecture, engineering, AESL`
                };
                if (prev && prev.description === newMeta.description && prev.keywords === newMeta.keywords) return prev;
                return newMeta;
            });
        }
    }, [category, categories,setCurrentCategory, setFilter, setPageMeta, setPageTitle]);

    return (
        <article id = ""
            className = ""
        >
            {/* Page Header Start */}
            <header id=""
                className="bg-yellow"
            >
                <CategoryHeaderBanner 
                    image={currentCategory?.image}
                    title={currentCategory?.name || category}
                    icon={null}
                    subTitle={currentCategory?.location || ''}
                />
                <AESLProjectsNav />
            </header>
            {/* Page Header End */}
            
            {/* Page Main Start */}
            <main className="bg-white grid gtc12">
                {/* <!-- Overview --> */}
                <header id="overview"
                    className="gc1s12 grid gtc12 ggap1-00"
                >
                    {/* <!-- Project_categories_overview -->  */}
                    <div id="overview"
                        className="gr1s1 gc2s10 
                            w-100 pv4-00
                            blue0 bb"
                    >
                        <hgroup id="Project_Overview_1"
                            className="f1-50"
                        >
                            <p className="mb0-00 lh-copy tracked tj">
                                {currentCategory?.overview}
                            </p>
                        </hgroup>
                    </div>
                </header>
                {/* <!-- Overview --> */}

                {/* <!-- Projects --> */}
                <div id="projects"
                    className = "gc2s10 w-100 mt2-00 mb1-00"
                >
                    {/* Example: Render projects for current category */}
                    {(() => {
                        const filteredProjects = projects.filter(p => p.category && p.category.url === category);
                        
                        if (filteredProjects.length === 0) {
                            return (
                                <div className="tc pv4-00">
                                    <div className="bg-near-white br3 pa4-00 mv3-00">
                                        <h3 className="f2-00 mb2-00 blue0">No Projects Available</h3>
                                        <p className="f1-25 lh-copy mb3-00 gray">
                                            There are currently no projects available in the {currentCategory?.name || 'this'} category.
                                        </p>
                                        <p className="f1-00 lh-copy mb3-00 gray">
                                            Please check back later or explore our other project categories.
                                        </p>
                                        <div className="mt3-00">
                                            <a href="/projects" className="link dim bg-blue0 white-90 pa1-00 br2 dib">
                                                View All Projects
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                        
                        return (
                            <ul className="grid gtc2-s gtc3-m ggap1-00 justify-start mt2-00 mb1-00">
                                {filteredProjects.map(
                                    project => (
                                        <li key={project.id} className="h-100 w-100">
                                            <ProjectCard
                                                name={project.name}
                                                client={project.client}
                                                location={project.location}
                                                thumbnail={project.thumbnail}
                                                description={project.overview || project.description?.p1}
                                                url={`/projects/${project.category.url}/${project.category.subCategory}/${project.name.replace(/\s+/g, '-').toLowerCase()}`}
                                                category={project.category}
                                            />
                                        </li>
                                    )
                                )}
                            </ul>
                        );
                    })()}
                </div>
                {/* <!-- Projects --> */}
                
                {/* <!--Projects page Footer --> */}
                <footer id = "projectsPage__Footer"
                    className="gc1s12 mb1-00"
                >
                    <SectionFooter 
                        sectionTitle = "Projects"
                    />
                </footer>
                {/* <!--Projects page Footer --> */}
            </main>
            {/* Page Main End */} 

            {/* Page Footer Start */}
            <footer id="" 
                className=""
            >
                <AESLPageFooter
                    pageTitle = 'Projects'
                />
            </footer>
            {/* Page Footer End */}
        </article>
    )
}

export default ProjectCategoryDetail