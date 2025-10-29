import React from 'react';
import ProjectDetailCard from '../../../components/organisms/cards/ProjectDetailCard';
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter';

const ProjectConstruction = ({ project, onImageClick }) => {
    if (!project || !project.projectConstruction) {
        return null;
    }
    const { construction1, construction2, construction3, constructionGallery = [] } = project.projectConstruction;
    return (
        <div className="grid gtc12 ggap1-00 ph1-00 mb3-00">
       {/* <!-- Project constuction Title --> */}
      <hgroup id="project_constuction Title" className="gc1s12">
        <h2 className="mv1-00 f2-00 f3-00-m">PROJECT CONSTRUCTION</h2>
      </hgroup>
        {/* <!-- Project constuction Title --> */}

        {/* <!-- Project constuction Description --> */}
            <article id="project_constuction_Description" className="gr2s1 gc1s12 ggap2-00 flex w-100 tj">
                <div className="f1-25 tj lh-copy">
                    <ul>
                        <li>{construction1}</li>
                        <li>{construction2}</li>
                        <li>{construction3}</li>
                    </ul>
                </div>
            </article>
        {/* <!-- Project constuction Description --> */}

        {/* <!-- Project constuction gallery --> */}
      {/* Project Construction Gallery */}
      {constructionGallery.length > 0 && (
        <section id="project_constuction_gallery" className="gc1s12">
          <div className="grid gtc5 ggap1-00">
            {constructionGallery.map((img, idx) => (
              <ProjectDetailCard
                key={img}
                image={img}
                title={`Construction Image ${idx + 1}`}
                description={project.name}
                onClick={onImageClick ? () => onImageClick(constructionGallery, idx) : undefined}
              />
            ))}
          </div>
        </section>
      )}

            <footer id="project_Concept_gallery_5" className="gr9s1 gc1s12 items-center justify-center h-100 relative">
                <ProjectSectionFooter />
            </footer>
        </div>
    );
};

export default ProjectConstruction;
