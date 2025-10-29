// Removed unused import

// console.log(projects)
const ProjectOverview = ({ project }) => {
    if (!project) return null;
    return (
        <div 
                className="gr1s1 gc2s10 pb2-00 mh1-00 blue0 bb"
        >
                <hgroup id="Project_Overview_1" className="f1-25 f1-50-m ">
                    <h2 className="mv1-00 f2-00 f3-00-m ttu">Project Overview</h2>
                </hgroup> 
                <div className="f1-25 tj lh-copy">
                        <ul>
                                {project.description && Object.values(project.description).map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                        </ul>
                </div>
        </div>
    )
}

export default ProjectOverview
