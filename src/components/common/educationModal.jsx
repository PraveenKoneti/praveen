import PropTypes from 'prop-types';

const EducationModal = ({ edu, showModal, closeModal }) => {

    console.log(edu,"   \n  ",showModal,"\n",closeModal);
    if (!showModal) return null;

    return (
        <div className="modal" id="myModal" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content bg-dark text-white shadow-lg modal-xl">
                    <div className="modal-header">
                        <h4 className="modal-title">Education Details</h4>
                        <button
                            type="button"
                            className="btn-close btn-light"
                            onClick={closeModal} // Close modal when clicked
                        ></button>
                    </div>

                    <div className="modal-body">
                        <h2 className="text-warning mb-4">{edu.degree}</h2>
                        <h6 className="text-white mb-3"><strong className="text-primary me-2">Institution / University :</strong> {edu.institution}</h6>
                        <h6 className="text-white mb-3"><strong className="text-primary me-2">Stream :</strong> {edu.stream}</h6>
                        <h6 className="text-white mb-3"><strong className="text-primary me-2">Year :</strong> {edu.year}</h6>
                        <h6 className="text-white mb-3"><strong className="text-primary me-2">Percentage :</strong> {edu.percentage ? edu.percentage : "N/A"}</h6>
                        <h6 className="text-white"><strong className="text-primary">Details:</strong></h6>
                        <ul className="text-white">
                            {edu.details.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>


                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-outline-light"
                            onClick={closeModal} // Close modal when clicked
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Correcting PropTypes
EducationModal.propTypes = {
    edu: PropTypes.object.isRequired,  // Corrected from PropTypes.array to PropTypes.object
    showModal: PropTypes.bool.isRequired,  // Optionally add validation for showModal
    closeModal: PropTypes.func.isRequired, // Validating that closeModal is a function
};

export default EducationModal;
