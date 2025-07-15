import React from "react";
import Card from "react-bootstrap/Card";

function ProfessionalExperienceCard({ imgPath, title, description }) {
  return (
    <Card className="project-card-view d-flex flex-column h-100">
      {/* Image container with bottom alignment */}
      <div 
        className="d-flex align-items-end justify-content-center"
        style={{
          height: "180px", // Consistent minimized height
          backgroundColor: "#000000ff",
          padding: "10px"
        }}
      >
        <img 
          src={imgPath}
          alt="experience image"
          style={{ 
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain"
          }}
        />
      </div>

      {/* Card body */}
      <Card.Body className="d-flex flex-column flex-grow-1">
        <div>
          <Card.Title className="text-start">{title}</Card.Title>
          <Card.Text style={{ textAlign: "left" }}>
            {description}
          </Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProfessionalExperienceCard;
