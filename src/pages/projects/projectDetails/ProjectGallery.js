import ProjectDetailCard from '../../../components/organisms/cards/ProjectDetailCard'
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter'


const ProjectGallery = ({ project, onImageClick }) => {
  if (!project) return null;
  const images = project.gallery && project.gallery.length > 0 ? project.gallery : (project.visuals || []);
  if (!images.length) return null;

  return (
    <div className="grid gtc12 ggap1-00 ph1-00 w-100 mb2-00">
      <hgroup className="gc1s12">
        <h2 className="mv1-00 f2-00 f3-00-m ttu">project 3d visualizations</h2>
      </hgroup>
      {
        images.map(
          (img, i) => (
            <article key={i} 
              className={
                `gr${2 + Math.floor(i/2)}s1 gc${(i%2===0)?'1s6':'7s6'} flex items-center justify-center`}>
              <ProjectDetailCard
                image={img}
                title={project.name}
                description={project.overview}
                onClick={onImageClick ? () => onImageClick(images, i) : undefined}
              />
            </article>
          )
        )
      }
      <footer id="project_Concept_gallery_5" className="gc1s12 items-center justify-center">
        <ProjectSectionFooter />
      </footer>
    </div>
  );
}

export default ProjectGallery
