const DeveloperOverview = () => {
        const overviewPoints = [
          "Currently working as a Full Stack Developer at LG Soft India since May 2024, handling both frontend and backend technologies. I work with React.js, PrimeReact, HTML, CSS, JavaScript, Bootstrap on the frontend, and Sails.js and MongoDB on the backend.",
          "As a frontend developer at Cybotrix Technologies (October 2023 – May 2024), I worked on building a multi-vendor e-commerce website using HTML, CSS, JavaScript, React.js, and Redux, gaining hands-on experience in UI/UX design and client-side scripting.",
          "Additionally, I completed professional training at Infocampus (May 2023 – October 2023), where I gained hands-on experience in both frontend and backend development. I focused on React.js for the frontend and the MERN stack (MongoDB, Express.js, React.js, Node.js) for backend development, learning best practices for building clean and efficient code. During this training, I worked on two projects: an e-commerce website and a campus interviews job portal.",
        ];
      
        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4 text-white text-center">
              Overview
            </h2>
            <div className="p-4 col-11 m-auto shadow-lg custom-overView rounded">
                <ul className="list-disc pl-5 text-white leading-relaxed">
                        {overviewPoints.map((point, index) => (
                                <li key={index} className="mb-2">
                                        {point}
                                </li>
                        ))}
                </ul>
            </div>
          </div>
        );
      };
      
      export default DeveloperOverview;
      