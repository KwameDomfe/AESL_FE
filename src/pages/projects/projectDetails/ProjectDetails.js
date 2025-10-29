import SubCategoryHeaderBanner from "../../../components/molecules/banners/SubCategoryHeaderBanner"
import AESLPageFooter from "../../../components/organisms/footers/AESLPageFooter"
import AESLProjectDetailsNav from "../../../components/organisms/navs/AESLProjectDetailsNav"
import ProjectOverview from "./ProjectOverview"
import ProjectGallery from "./ProjectGallery"
import ProjectConcept from "./ProjectConcept"
import ProjectDesign from "./ProjectDesign"
import ProjectConstruction from "./ProjectConstruction"
import ProjectData from "./ProjectData"
import RelatedProjects from "./RelatedProjects"
import { Link } from "react-router-dom"
import {projects} from '../../../data/projectsInfo'
import { useParams, useLocation } from "react-router-dom"
import { useEffect, useState, useCallback } from "react"
import LightboxModal from "../../../components/shared/LightboxModal"

const ProjectDetails = () => {
    const { category, subcategory, slug } = useParams();
    const slugify = name => name.replace(/\s+/g, '-').toLowerCase();
    const project = projects.find(p =>
        slugify(p.name) === slug &&
        p.category &&
        p.category.url === category &&
        p.category.subCategory === subcategory
    );


    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        if (project) {
            document.title = project.name;
        } else {
            document.title = "Project Not Found";
        }
    }, [project]);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [lightboxCaptions, setLightboxCaptions] = useState([]);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = useCallback((images = [], startIndex = 0, captions = []) => {
        if (!Array.isArray(images) || images.length === 0) return;
        setLightboxImages(images);
        setLightboxCaptions(captions);
        setLightboxIndex(Math.max(0, Math.min(startIndex, images.length - 1)));
        setLightboxOpen(true);
    }, []);

    const closeLightbox = useCallback(() => setLightboxOpen(false), []);
    const nextImage = useCallback(() => setLightboxIndex(i => (i + 1) % (lightboxImages.length || 1)), [lightboxImages.length]);
    const prevImage = useCallback(() => setLightboxIndex(i => (i - 1 + (lightboxImages.length || 1)) % (lightboxImages.length || 1)), [lightboxImages.length]);

    if (!project) {
        return (
            <article className="min-vh-100 flex items-center justify-center">
                <h1 className="f2-00 red">Project not found</h1>
                <Link to="/projects" className="blue0 ml1-50">Back to Projects</Link>
            </article>
        );
    }

    return (
        <>
        <article>
            {/* Page Header Start */}
            <header className="bg-yellow pb1-00">
                <SubCategoryHeaderBanner 
                    image={project.thumbnail}
                    title={project.name}
                    subTitle={project.location}
                />
                <AESLProjectDetailsNav project={project} />
            </header>
            {/* Page Header End */}
            
            {/* Page Main Start */}
            <div id="l_3:1_Layout_ProjectDetails" 
                className="grid gtc4"
            >    
                {/* <!--Page Main Start --> */}
                    <main id="lc_gc1s3_Main_ProjectDetils"
                        className="gc1s4 gc1s3-l
                            min-vh-100"
                    >   
                        {/* <!-- Project Details--> */}
                        <article id="projectDetails"
                            className="min-vh-100 w-100 bg-white blue0"
                        >
                            {/* <!-- Projects Overview --> */}
                            <section id="projectDetails--Overview">
                                <ProjectOverview project={project} />
                            </section>
                            {/* <!-- Projects Overview --> */}

                            {/* <!-- Projects gallery --> */}
                            <section id="projectDetails--Gallery">
                                <ProjectGallery project={project} onImageClick={(images, index, captions=[]) => openLightbox(images, index, captions)} />
                            </section>
                            {/* <!-- Projects gallery --> */}
                            
                            {/* <!-- Projects Concept --> */}
                            <section id="projectDetails--Concept">
                                <ProjectConcept project={project} onImageClick={(images, index, captions=[]) => openLightbox(images, index, captions)} />
                            </section>
                            {/* <!-- Projects Concept -->  */}

                            {/* <!-- Projects Design --> */}
                            <section id="projectDetails--Design">
                                <ProjectDesign project={project} onImageClick={(images, index, captions=[]) => openLightbox(images, index, captions)} />
                            </section>
                            {/* <!-- Projects Design -->  */}

                            {/* <!-- Projects Construction --> */}
                            <section id="projectDetails--Construction">
                                <ProjectConstruction project={project} onImageClick={(images, index, captions=[]) => openLightbox(images, index, captions)} />
                            </section>
                            {/* <!-- Projects Construction -->  */}

                            {/* <!-- Project Data Start --> */}
                            <section id="projectDetails--Data">
                                <ProjectData project={project} />
                            </section>
                            {/* <!-- Project Data End --> */}
                            
                            {/* <!-- Related Projects Start --> */}
                            <section id="projectDetails--RelatedProjects">
                                <RelatedProjects project={project} />
                            </section>
                            {/* <!-- Related Projects End --> */}
                            {/* <!-- Page Footer Start--> */}
                            {/* Only keep one footer below */}
                            {/* <!-- Page Footer End --> */}
                        </article>
                            {/* <!-- Project Data -->  */}
                    </main>
                {/* <!-- Page Main End --> */}

                {/* <!-- Page Aside Start --> */}
                    <aside id="lc_gc4s1_Aside_ProjectDetils" 
                        className="gc4s1-l bg-yellow"
                    >
                        <nav id=""
                            className="dn flex-l flex-column-l justify-start-l
                                min-vh-100 w-100 
                                 
                                sticky top-0"
                        >
                            <hgroup className="ttu f1-00 pb1-00 bg-white pv1-00 ma0-50">
                                <Link to="/projects"
                                    className="blue0 ml1-50"    
                                >Back to Projects</Link>
                            </hgroup>
                            <ul className="bl bw3 b--blue0 pa1-00 f0-75 blue0 bg-white-20 ma0-50"
                            >
                                <h2 className="pb0-50 bb ttc">On this page</h2>
                                <li className="mb1-00 i">
                                    <a href="#projectDetails--Overview"
                                        className="blue0"
                                    >Project Overview</a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#projectDetails--Gallery"
                                                className="blue0"
                                            >Project Gallery</a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#projectDetails--Concept"
                                                className="blue0"
                                            >Project Concept</a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#projectDetails--Design"
                                                className="blue0"
                                            >Project Design</a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#projectDetails--Construction"
                                                className="blue0"
                                            >Project Construction</a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#projectDetails--Data"
                                                className="blue0"
                                            >Project Data</a>
                                </li>
                                <li className=" i">
                                    <a href="#projectDetails--RelatedProjects"
                                                className="blue0"
                                            >Related Projects</a>
                                </li>
                            </ul>
                        </nav>
                    </aside>
                {/* <!-- Page Aside End --> */}
            </div>
            {/* Page Main End */} 

            {/* Page Footer Start */}
            <footer>
                <AESLPageFooter pageTitle={project ? `Projects / ${project.name}` : 'Projects'} />
            </footer>
            {/* Page Footer End */}
        </article>
        {lightboxOpen && (
            <LightboxModal
                images={lightboxImages}
                captions={lightboxCaptions}
                index={lightboxIndex}
                title={project?.name}
                onClose={closeLightbox}
                onNext={nextImage}
                onPrev={prevImage}
            />
        )}
        </>
  )
}

export default ProjectDetails
