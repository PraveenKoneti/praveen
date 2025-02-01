const Footer = () => {
    return (
      <footer
        className="text-white pt-4 pb-4 footer"
        style={{  color: '#d1d1d1' }}
      >
        <div className="container-fluid text-center text-md-start">
          <div className="row text-center text-md-start">
            {/* About Section */}
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4" style={{ color: '#ffb400' }}>
                About Me
              </h5>
              <p>
                A passionate developer specializing in building responsive websites
                and dynamic applications. Skilled in frontend and backend
                technologies, I aim to deliver seamless user experiences.
              </p>
            </div>
  
            {/* Quick Links Section */}
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
              <h5 className="text-uppercase mb-4" style={{ color: '#ffb400' }}>
                Quick Links
              </h5>
              <p>
                <a href="/" className="text-decoration-none text-white">
                  Home
                </a>
              </p>
              <p>
                <a href="/projects" className="text-decoration-none text-white">
                  Projects
                </a>
              </p>
              <p>
                <a href="/skills" className="text-decoration-none text-white" >
                  Skills
                </a>
              </p>
              <p>
                <a href="/contact" className="text-decoration-none text-white">
                  Contact
                </a>
              </p>
            </div>
  
            {/* Contact Section */}
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4" style={{ color: '#ffb400' }}>
                Contact
              </h5>
              <p>
                <i className="bi bi-house-fill me-2"></i> Bangalore, Karnataka, India
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i> kr19pravin@gmail.com
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2"></i> +91 7995171323
              </p>
            </div>
  
            {/* Social Media Section */}
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4" style={{ color: '#ffb400' }}>
                Follow Me
              </h5>
              <a
                href="https://www.linkedin.com/in/praveen-koneti/"
                className="btn btn-outline-light btn-floating m-1"
                role="button"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
  
          {/* Divider */}
          <hr className="my-4" style={{ color: '#d1d1d1' }} />
  
          {/* Footer Bottom */}
          <div className="row align-items-center">
            <div className="col-md-7 col-lg-8">
              <p className="text-center text-md-start">
                © 2025 Praveen Koneti. All rights reserved.
              </p>
            </div>
  
            <div className="col-md-5 col-lg-4">
              <p className="text-center text-md-end">
                Designed by{' '}
                <a href="#" className="text-warning text-decoration-none">
                  Praveen Koneti
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  