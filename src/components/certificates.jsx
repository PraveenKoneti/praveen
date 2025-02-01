import certificates from "../data/certificates";

const Certifications = () => {
    return (
        <div className="container-fluid bg-black pb-5 pt-4">
            <h2 className="text-center text-white mb-3 pt-4" style={{ fontWeight: "bold" }}>
                Certifications
            </h2>
            <div
                className="row col-11 m-auto pt-3 pb-3 justify-content-center custom-certificates"
                style={{
                    // background: "linear-gradient(to right, #6a11cb, #2575fc)",
                    borderRadius: "15px",
                    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
                    color: "white",
                }}
            >
                {certificates.map((cert, index) => (
                    <div
                        key={index}
                        className="col-md-6 mb-4 mt-4 d-flex justify-content-center"
                        style={{ maxWidth: "600px" }} // Custom width for the columns
                    >
                        <div
                            className="card border-0 shadow-sm text-center"
                            style={{
                                borderRadius: "15px",
                                overflow: "hidden",
                                transform: "scale(1)",
                                transition: "all 0.3s ease-in-out",
                                width: "90%", // Make the card take the full column width
                            }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.transform = "scale(1.05)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.transform = "scale(1)")
                            }
                        >
                            <div
                                className="d-flex justify-content-center align-items-center"
                                style={{
                                    height: "250px",
                                    backgroundColor: "#f8f9fa",
                                }}
                            >
                                <img
                                    src={cert.certificateImage}
                                    alt={`${cert.title} Certificate`}
                                    className="img-fluid"
                                    style={{
                                        maxHeight: "100%",
                                        maxWidth: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>
                            <div
                                className="card-body"
                                style={{
                                    background: "#ffffff",
                                    borderRadius: "15px",
                                    color: "#000",
                                }}
                            >
                                <h5 className="card-title text-center fw-bold">{cert.title}</h5>
                                <p className="text-center mb-1">
                                    <strong>Duration:</strong> {cert.duration}
                                </p>
                                <p className="text-center">
                                    <strong>Project:</strong> {cert.project}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
