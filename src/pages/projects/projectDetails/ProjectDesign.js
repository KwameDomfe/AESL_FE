import ProjectDetailCard from '../../../components/organisms/cards/ProjectDetailCard'
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter'


const ProjectDesign = ({ project, onImageClick }) => {
    if (!project || !project.projectDesign) return null;
    const { design1, design2, design3, designGallery } = project.projectDesign;
    return (
        <div className="grid gtc12 ggap1-00 ph1-00 mb3-00">
            {/* <!-- Project Design Title --> */}
            <hgroup id="project_design_title" className="gc1s12">
                <h2 className="mv1-00 f2-00 f3-00-m">PROJECT DESIGN</h2>
            </hgroup>
            {/* <!-- Project Design Title --> */}

            {/* <!-- Project design Description --> */}
            <article id="project_design_description" className="gr2s1 gc1s12 flex w-100 ggap2-00 tj">
                <div className="f1-25 tj lh-copy">
                    {design1 && <p>{design1}</p>}
                    {design2 && <p>{design2}</p>}
                    {design3 && <p>{design3}</p>}
                </div>
            </article>
            {/* <!-- Project design Description --> */}

            {/* <!-- Project design gallery --> */}
            {designGallery && designGallery.map((img, i) => (
                <article key={i} id={`project_design_gallery_${i+1}`}
                    className={`gr${3+i}s2 gc${i%2===0?2:7}s4 flex items-center justify-center relative`}>
                    <ProjectDetailCard
                        image={img}
                        title={project.name}
                        description={project.overview}
                        onClick={onImageClick ? () => onImageClick(designGallery, i) : undefined}
                    />
                </article>
            ))}
            <footer id="project_Concept_gallery_5" className="gr9s1 gc1s12 items-center justify-center h-100 relative">
                <ProjectSectionFooter />
            </footer>
        </div>
    );
}

export default ProjectDesign
