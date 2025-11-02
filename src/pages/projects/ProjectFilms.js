import projectsBanner from '../../images/projects/00.jpeg'
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import AESLProjectsNav from '../../components/organisms/navs/AESLProjectsNav'
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
    <main className="bg-white grid gtc12">
        <div className="gc2s10 tc pv4-00">
            <div className="bg-near-white br3 pa4-00 mv3-00">
                <h3 className="f2-00 mb2-00 blue0">No Project Films Available</h3>
                <p className="f1-25 lh-copy mb3-00 gray">There are currently no project films available to be displayed.</p>
                <p className="f1-00 lh-copy mb3-00 gray">Please check back later or explore our other project categories.</p>
                <div className="mt3-00">
                    <a href="/projects" className="link dim bg-blue0 white-90 pa1-00 br2 dib">View All Projects</a>
                </div>
            </div>
        </div>
        <footer id="projectsPage__Footer" className="gc1s12 mv1-00">
            <SectionFooter sectionTitle="Projects Films" />
        </footer>
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