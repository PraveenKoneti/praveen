
import { Link } from "react-router-dom";

const Navbar = () => {

    return(
        
        <nav className="navbar navbar-expand-xl navbar-dark bg-black sticky-top">
            <div className="container">
                <h1 className="navbar-brand fs-2"> Praveen Koneti</h1>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mynavbar"
                    aria-controls="mynavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/about" className="nav-link active me-2"> <i className="bi bi-info-circle me-1"></i> About </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/certifications" className="nav-link active me-2">
                                <i className="bi bi-award"></i> Certifications
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/experience" className="nav-link active"> <i className="bi bi-person-workspace me-1"></i> Experience </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/projects" className="nav-link active "> <i className="bi bi-briefcase me-1"></i> Projects </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/skills" className="nav-link active"> <i className="bi bi-gear me-1"></i> Skills </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/education" className="nav-link active"> <i className="bi bi-mortarboard me-1"></i> Education </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link active"> <i className="bi bi-envelope me-1"></i> Contact </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;