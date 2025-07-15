import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view d-flex flex-column h-100">

      {/* Image container with bottom alignment */}
      <div 
        className="d-flex align-items-end justify-content-center"
        style={{
          height: "250px", // Set based on your tallest image
          backgroundColor: "#000000ff",
          padding: "10px"
        }}
      >
        <img 
          src={props.imgPath}
          alt="project image"
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
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: "left" }}>
            {props.description}
          </Card.Text>
        </div>

        <div className="mt-auto">
          {props.isGithub && (
            <Button 
              variant="primary" 
              href={props.ghLink} 
              target="_blank"
              className="mb-2 w-100"
            >
              <BsGithub /> &nbsp; GitHub
            </Button>
          )}

          {props.isDemo && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              className="w-100"
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
