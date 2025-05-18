import PropTypes from "prop-types";
import '../modalProject/modalproject.css'

const ModalProject = ({ project }) => {
    
    return (
        <div className="modal-project">
            <div className="modal-project-image">
                <img src={project.sourceImage} alt={project.name}/>
            </div>
            <div className="modal-project-text">
                <h3 className="modal-project-text-title">{project.name}</h3>
                <div className="modal-project-text-description">
                    <div className="modal-project-text-description-category">
                        <h4>Type de projet</h4>
                        <p>{project.category}</p>
                    </div>
                    <div className="modal-project-text-description-technic">
                        <h4>Techniques utilisées</h4>
                        <p>
                        {project.technic.map(element => (
                            <span key={element}>{element}</span>
                        ))}
                        </p>
                    </div>
                <div className="modal-project-text-description-commentary">
                    <h4>Description du projet</h4>
                    <p>{project.description}</p>
                </div>
                <div className="modal-project-text-description-link">
                    <h4>Lien vers le projet</h4>
                    <a href={project.link} target="_blank">voir le projet</a>
                </div>
            </div>
            </div>
            
        </div>
    )
}

ModalProject.propTypes = {
  project: PropTypes.object.isRequired,
}

export default ModalProject