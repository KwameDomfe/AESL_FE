import ProjectDetailCard from '../../../components/organisms/cards/ProjectDetailCard';
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter';

const ProjectConcept = ({ project, onImageClick }) => {
    if (!project) return null;

    // Normalize concept text and gallery
    let conceptText = [];
    let conceptGallery = [];

    if (Array.isArray(project.projectConcept)) {
        conceptText = project.projectConcept;
        conceptGallery = project.ConceptGallery || [];
    } else if (typeof project.projectConcept === 'object') {
        conceptText = [
            project.projectConcept.Concept1 || '',
            project.projectConcept.Concept2 || '',
            project.projectConcept.Concept3 || ''
        ];
        conceptGallery = project.projectConcept.ConceptGallery || [];
    }

    return (
        <div className="grid gtc12 ggap1-00 ph1-00 mb3-00">
            {/* Project Concept Title Start */}
            <hgroup id="project_Concept Title" className="gc1s12 gr1s1">
                <h2 className="mv1-00 f2-00 f3-00-m">PROJECT CONCEPT</h2>
                <div className="f1-25 tj lh-copy">
                    <ul>
                        {conceptText.map((text, idx) => (
                            text ? <li className="mb0-50" key={idx}>{text}</li> : null
                        ))}
                    </ul>
                </div>
            </hgroup>
            {/* Project Concept Title End */}

            {/* Project Concept gallery Start */}
            {conceptGallery.length > 0 && (
                <section id="project_Concept_gallery" className="gc1s12">
                    <div className="grid gtc5 ggap1-00">
                        {conceptGallery.map((img, idx) => (
                            <ProjectDetailCard
                                key={img}
                                image={img}
                                title={`Concept Image ${idx + 1}`}
                                description={project.name}
                                onClick={onImageClick ? () => onImageClick(conceptGallery, idx) : undefined}
                            />
                        ))}
                    </div>
                </section>
            )}
            <footer id="project_Concept_footer" className="gr9s1 gc1s12 items-center justify-center h-100 mt1-00">
                <ProjectSectionFooter />
            </footer>
            {/* Project Concept gallery End */}
        </div>
    );
};

export default ProjectConcept;
