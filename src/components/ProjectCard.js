import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, deploy }) => {
  const buttonStyle = {
    backgroundColor: "#1f1f1f",
    color: "white",
    padding: "10px 20px",
    fontSize: "14px",
    fontWeight: "600",
    border: "2px solid white",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  const buttonHoverStyle = {
    backgroundColor: "white",
    color: "#1f1f1f",
    borderColor: "#1f1f1f",
  };

  return (
    <Col size={12} sm={6} md={5.5}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4 style={{ color: "white" }}>{title}</h4>
          <span style={{ color: "white" }}>{description}</span>

          {deploy && (
            <div style={{ marginTop: "15px" }}>
              <a href={deploy} target="_blank" rel="noopener noreferrer">
                <button
                  style={buttonStyle}
                  onMouseOver={e => Object.assign(e.target.style, buttonHoverStyle)}
                  onMouseOut={e => Object.assign(e.target.style, buttonStyle)}
                >
                  View Project
                </button>
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};
