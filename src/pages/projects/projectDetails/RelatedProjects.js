import ProjectDetailCard from '../../../components/organisms/cards/ProjectDetailCard'
import ProjectSectionFooter from '../../../components/organisms/footers/ProjectSectionFooter'
import xxx from '../../../images/placeholders/regular_images/sky.jpg'
const RelatedProjects = (props) => {

    // const {} = props
    return (
        <div className="grid gc1s12 gtc12
            min-vh-50 
            pa1-00"
        >
            <hgroup id="project_data Title"
                className="gc1s12 gr1s1"
            >
                <h2 className="mv1-00 ttu
                    f2-00 f3-00-m"
                >
                    related projects
                </h2>     
            </hgroup>

            <article id="" 
                className="gr2s4 gc1s4
                    flex items-center justify-center
                    pa0-50
                    relative"
            >
                <ProjectDetailCard 
                    image = {xxx}
                    title = "Project Name"
                    location = "Location"
                    description = "Project Contruction Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repellendus rerum explicabo, quam modi odit. Eum perferendis quibusdam accusantium rem "
                />
            </article>
            
            <article id="" 
                className="gr2s4 gc5s4
                    flex items-center justify-center
                    pa0-50
                    relative"
            >
                <ProjectDetailCard 
                    image = {xxx}
                    title = "Project Name"
                    location = "Location"
                    description = "Project Contruction Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repellendus rerum explicabo, quam modi odit. Eum perferendis quibusdam accusantium rem "
                />
            </article>

            <article id="" 
                className="gr2s4 gc9s4
                    flex items-center justify-center
                    pa0-50
                    relative"
            >
                <ProjectDetailCard 
                    image = {xxx}
                    title = "Project Name"
                    location = "Location"
                    description = "Project Contruction Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis repellendus rerum explicabo, quam modi odit. Eum perferendis quibusdam accusantium rem "
                />
            </article>
            <footer className='gr6s1 gc1s12 mt1-00'>
                <ProjectSectionFooter />
            </footer>
        </div>
    )
}

export default RelatedProjects
