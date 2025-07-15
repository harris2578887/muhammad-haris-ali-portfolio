import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiJupyter,
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiAmazonaws,
  SiGooglecloud,
  SiKaggle,
  SiHeroku,
  SiSlack,
  SiTrello,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <h6>Jupyter</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h6>VS Code</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <h6>Postman</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <h6>GitHub</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
        <h6>AWS</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
        <h6>Google Colab</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKaggle />
        <h6>Kaggle</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h6>Heroku</h6>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <h6>Slack</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTrello />
        <h6>Trello</h6>
      </Col>
    </Row>
  );
}

export default Toolstack;
