import PropTypes from 'prop-types'
import '../projects/projects.css'

const Projects = ({project, ...props}) => {
    const technic = project.technic;
    
    return (
        <div className="detail-project" {...props}>
            <img src={project.sourceImage} alt={project.name}/>
            <div className="detail-project-text">
                <h3 className="detail-project-text-title">{project.name}</h3>
                <p className="detail-project-text-technic">
                    {technic.map(element => (
                        <span key={element}>{element}</span>
                    ))}
                </p>
            </div>
        </div>
    )
}

Projects.propTypes = {
    project: PropTypes.array
}

export default Projects