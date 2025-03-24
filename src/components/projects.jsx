

import { useState } from "react";

import projects from "../data/projects";

import ProjectModal from "../components/common/modal";



const Projects = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState([]);
    
    const openModal = (project) => {
        setSelectedProject(project);
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
        setSelectedProject(null);
      };

    return (
        <div className="bg-black py-4">
            <h2 className="text-center text-white mb-4">Projects</h2>
            <div className="row">
                {projects.map((project, index) => (
                    <div key={index} className="col-md-4 mb-3">
                        <div className="card text-white border-light h-100 bg-black custom-projects">
                            <div className="card-body">
                                <h4 className="mb-3 fw-bold custom-projectName">{project.name}</h4>
                                <p><strong className="text-white">Company Name : </strong>{project.company}</p>
                                <p><strong className="text-white">Project Type : </strong>{project.type}</p>
                                <p><strong className="text-white">Technologies:</strong> {project.technologies.join(", ")}</p>
                                <p className="card-text">{project.description[0]}</p>
                            </div>
                            <div className="card-footer d-flex justify-content-end align-items-bottom mb-3">
                                <button onClick={() => openModal(project)} className="btn btn-outline-light btn-sm moreInfo-btn"> <i className="bi bi-info-circle"></i> More info </button>
                                {project.link && project.link !== "#" && (
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-sm ms-4">
                                        Live Project <i className="bi bi-box-arrow-up-right ms-1"></i>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {/* Modal */}
            <ProjectModal 
                project={[selectedProject]}
                showModal={showModal}
                closeModal={closeModal}
            />
          


        </div>
    );
};

export default Projects;
