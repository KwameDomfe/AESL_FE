import projectsBanner from '../../images/projects/00.jpeg'
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLProjectsNav from '../../components/organisms/navs/AESL_ProjectsNav'
import SectionFooter from '../../components/organisms/footers/SectionFooter'
import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'

const ProjectFilms = () => {
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
            title ='projects Films'
        />
        <AESLProjectsNav />
    </header>
    {/* Page Header End */}
    
    {/* Page Main Start */}
    <main className="bg-white grid gtc12"
    >
        {/* <!-- Projects List--> */}
        <footer id = "projectsPage__Footer"
            className="gc1s12 mv1-00"
        >
            <SectionFooter 
                sectionTitle = "Projects Films"
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
            pageTitle = 'Projects Films'
        />
    </footer>
    {/* Page Footer End */}
</article>
  )
}

export default ProjectFilms