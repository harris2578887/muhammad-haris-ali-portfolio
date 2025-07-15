import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Github from "./Github";
import ProfessionalExperienceCard from "./ProfessionalExperienceCard";
import CertificationsCard from "./CertificationsCard";
import AwardsCard from "./AwardsCard";

// Images
import laptopImg from "../../Assets/about.png";
import risetechImg from "../../Assets/Projects/risetech.jpeg";
import techostudiosImg from "../../Assets/Projects/techostudios.jpeg";
import awsImg from "../../Assets/Projects/aws.jpeg";
import ciscoImg from "../../Assets/Projects/idscertificate.png";
import awardImg from "../../Assets/Projects/award.jpeg"; // Replace with your actual award image

function About() {
  const [modalShow, setModalShow] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleImageClick = (imgPath) => {
    setModalImage(imgPath);
    setModalShow(true);
  };

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        {/* About */}
        <Row className="justify-content-center p-2">
          <Col md={7} className="pt-3 pb-4">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} className="pt-5 pb-4">
            <img src={laptopImg} alt="about" className="img-fluid rounded" />
          </Col>
        </Row>

        {/* Experience */}
        <h1 className="project-heading">
          Professional <strong className="purple">Experience</strong>
        </h1>
        <Row className="justify-content-center pb-3">
          <Col md={6} className="project-card" onClick={() => handleImageClick(risetechImg)}>
            <ProfessionalExperienceCard
              imgPath={risetechImg}
              title="Machine Learning Intern (NLP Focus) - RiseTech, Islamabad"
              description={
                <>
                  <strong>July 2024 – Sept 2024</strong>
                  <ul className="text-start mt-2">
                    <li>Developed Medical OSCE Chatbot using LLaMA 2.</li>
                    <li>Applied tokenization, lemmatization, and clinical data cleaning.</li>
                    <li>Created domain-specific embeddings with medical terminology.</li>
                    <li>Fine-tuned LLaMA 2 achieving 88% accuracy on OSCE case studies.</li>
                  </ul>
                </>
              }
            />
          </Col>

          <Col md={6} className="project-card" onClick={() => handleImageClick(techostudiosImg)}>
            <ProfessionalExperienceCard
              imgPath={techostudiosImg}
              title="PHP Laravel Developer Intern - TechoStudios"
              description={
                <>
                  <strong>July 2023 – Sept 2023</strong>
                  <ul className="text-start mt-2">
                    <li>Developed car maintenance website using PHP Laravel.</li>
                    <li>Implemented task scheduling, service tracking, user management.</li>
                    <li>Optimized MySQL schemas and queries for performance.</li>
                  </ul>
                </>
              }
            />
          </Col>
        </Row>

        {/* Certifications */}
        <h1 className="project-heading">
          <strong className="purple">Certifications</strong>
        </h1>
        <Row className="justify-content-center pb-3">
          <Col md={6} className="project-card" onClick={() => handleImageClick(ciscoImg)}>
            <CertificationsCard
              imgPath={ciscoImg}
              title="Introduction to Data Science (CISCO)"
              description={
                <>
                  <strong>Issued: 2023</strong>
                 
                </>
              }
            />
          </Col>

          <Col md={6} className="project-card" onClick={() => handleImageClick(awsImg)}>
            <CertificationsCard
              imgPath={awsImg}
              title="AWS Academy Cloud Architecting"
              description={
                <>
                  <strong>Issued: 2024</strong>
                 
                </>
              }
            />
          </Col>
        </Row>

        {/* Awards */}
        <h1 className="project-heading">
          <strong className="purple">Awards</strong>
        </h1>
        <Row className="justify-content-center pb-5">
          <Col md={6} className="project-card" onClick={() => handleImageClick(awardImg)}>
            <AwardsCard
              imgPath={awardImg}
              title="Spring Project Gala"
              description={
                <>
                  <strong>Issued: 2023</strong>
                 
                </>
              }
            />
          </Col>
        </Row>

        {/* Skillset and Tools */}
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h1>
        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>

      {/* Image Modal */}
      <Modal show={modalShow} onHide={() => setModalShow(false)} centered size="lg">
        <Modal.Body className="text-center">
          <img src={modalImage} alt="Enlarged View" style={{ width: "100%", borderRadius: "10px" }} />
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default About;
