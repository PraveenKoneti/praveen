import { useState } from "react";
import education from "../data/education";
import EducationModal from "./common/educationModal";

const Education = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedEdu, setSelectedEdu] = useState(null); // to store the selected education

    const showEducationModal = (edu) => {
        setSelectedEdu(edu); // set the selected education data
        setShowModal(true); // open the modal
    };

    const closeModal = () => {
        setShowModal(false); // close the modal
    };

    return (
        <div className="bg-black p-4 m-auto">
            <h2 className="text-center text-white mb-4">Education</h2>
            <div
                className="container-fluid col-11 m-auto p-4 rounded shadow education text-white"
                style={{
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.3)", // Softer shadow for depth
                }}
            >
                {education.map((edu, index) => (
                    <div key={index} className="row p-4 align-items-center rounded custom-education ">
                        {/* Degree and Institution */}
                        <div className="col-md-4">
                            <h5 className="text-white">{edu.degree}</h5>
                            <p className="mb-1">
                                <strong className="text-white">Institution:</strong> {edu.institution}
                            </p>
                            <p className="">
                                <strong className="text-white">Stream:</strong> {edu.stream}
                            </p>
                        </div>

                        {/* Year */}
                        <div className="col-md-2">
                            <h5 className="text-white">Year</h5>
                            <p className="">{edu.year}</p>
                        </div>

                        {/* Percentage */}
                        <div className="col-md-2">
                            <h5 className="text-white">Percentage</h5>
                            <p className="">{edu.percentage ? `${edu.percentage}` : "N/A"}</p>
                        </div>

                        {/* Details */}
                        <div className="col-md-4">
                            <p className="">
                                <strong className="text-white">Details:</strong> {edu.details[0]}
                            </p>
                            <button onClick={() => showEducationModal(edu)} className="btn btn-sm btn-outline-light">
                                More Info
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Education details */}
            {showModal && selectedEdu && (
                <EducationModal
                    edu={selectedEdu}
                    showModal={showModal}
                    closeModal={closeModal} // pass closeModal function to close the modal
                />
            )}
        </div>
    );
};

export default Education;
