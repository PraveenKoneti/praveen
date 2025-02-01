
import skills from "../data/skills";

const Skills = () => {
  

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <i
          key={i}
          className={`bi ${i <= rating ? "bi-star-fill" : "bi-star"} star m-1`}
        ></i>
      );
    }
    return stars;
  };

  return (
    <div className="container-fluid py-5 bg-black text-white">
      <h2 className="text-center text-white mb-4">My Skills</h2>
      <div className="row">
        {skills.map((skillCategory, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card bg-transparent border-0 shadow-lg">
              <div className="card-body p-4 rounded skills">
                <h4 className="text-white mb-3">{skillCategory.category}</h4>
                <div
                  className="skills-list p-3 rounded"
                  style={{
                    color: '#CCCCCC',
                    height: '320px',
                    overflowY: 'auto',
                  }}
                >
                  {skillCategory.items.map((skills, index1) => (
                    <div
                      key={index1}
                      className="d-flex justify-content-between align-items-center mb-3 p-3 shadow-sm rounded custom-skills"
                      style={{
                        backgroundColor: '#000000',
                        color: 'white',
                      }}
                    >
                      <span className="text-start">{skills.name}</span>
                      <span className="text-end text-warning">{renderStars(skills.rating)}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
