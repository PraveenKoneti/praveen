
import PropTypes from 'prop-types';

const ProjectModal = ({ project, showModal, closeModal }) => {
  if (!showModal) return null;

  return (
    <div
      className="modal fade show"
      style={{
        display: 'block',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      }}
      onClick={closeModal}
    >
      <div
        className="modal-dialog modal-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-content bg-dark text-white shadow-lg modal-xl">
          <div className="modal-header border-secondary">
            <button
              type="button"
              className="btn-close btn-close-white"
              onClick={closeModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {project[0]?.companyImage && (
              <div className="text-center mb-4">
                <img
                  src={project[0].companyImage}
                  alt={`${project[0].name} preview`}
                  className="img-fluid rounded"
                  style={{ maxHeight: '75px', objectFit: 'contain' }}
                />
              </div>
            )}
            {project.map((projectdata, index) => (
              <div className="border border-secondary p-3 mb-3" key={index}>
                <div className="d-flex align-items-center mb-3">
                  <h3 className="modal-title fw-bold text-warning">{projectdata.name}</h3>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h6 className="text-primary">
                    <b>Company Name : </b>
                    <span className="text-white">{projectdata.company}</span>
                  </h6>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h6 className="text-primary me-2">
                    <b>Project Type : </b>
                    <span className="text-white">{projectdata.type}</span>
                  </h6>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <h6 className="text-primary me-2">
                    <b>Technologies : </b>
                    <span className="text-white">{projectdata.technologies.join(', ')}</span>
                  </h6>
                </div>
                <div className="mb-3">
                  <h6 className="text-primary">
                    <b>Description : </b>
                  </h6>
                  <ul className="text-white">
                    {projectdata.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="modal-footer border-secondary">
            <button
              type="button"
              className="btn btn-outline-black"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// PropTypes validation
ProjectModal.propTypes = {
  project: PropTypes.array.isRequired,
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ProjectModal;
