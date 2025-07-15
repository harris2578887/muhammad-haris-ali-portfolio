import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import vetaiImg from "../../Assets/Projects/vetaimmy.jpeg";
import osceImg from "../../Assets/Projects/osce.png";
import sentimentImg from "../../Assets/Projects/classification.jpeg";
import carcareImg from "../../Assets/Projects/carecare.jpeg";
import compilerImg from "../../Assets/Projects/compiler.jpeg";
import ormsImg from "../../Assets/Projects/ORSM.jpeg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
       <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vetaiImg}
              title="VetAI Chatbot"
              description="VetAI Chatbot is my FYP, a multimodule Urdu/English voice and text-enabled chatbot providing virtual veterinary assistance. Using Whisper for voice-to-text and Gemini for structured history-taking, it utilizes LLAMA 3 fine-tuned on a custom dataset for accurate diagnosis and treatment planning."
              isGithub={true}
              ghLink="https://github.com/harris2578887/vetai-chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={osceImg}
              title="OSCE Exam Chatbot"
              description="During my internship, I fine-tuned LLAMA 2 to build an OSCE Exam Chatbot for clinical training and reasoning. It enables interactive history-taking, diagnostic evaluation, and viva-style questioning, followed by detailed performance feedback, helping medical students prepare for OSCE assessments.

"
              isGithub={true}
              ghLink= "https://github.com/harris2578887/Oil_Refinary_DataBase_Management_system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sentimentImg}
              title="Sentiment Analysis"
              description="A web application allowing users to classify movie reviews as positive or negative using Naive Bayes classification. Users can input reviews in a simple interface and get real-time sentiment feedback, displaying results instantly as “positive” or “negative” for direct user insights."
              isGithub={true}
              ghLink="https://github.com/harris2578887/Sentiment-Analysis-of-movie-reviews-using-naives-bayes-with-a-front-end-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carcareImg}
              title="Car Care Pro"
              description="A Laravel-based car maintenance tracking app built with HTML, CSS, Bootstrap, JavaScript, PHP, and APIs. Users can log services, track mileage, manage car details with photos, and check local product availability for parts, providing an organized system for efficient car care."
              isGithub={true}
              ghLink="https://github.com/harris2578887/-Car-Maintenance-Website-with-Laravel"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={compilerImg}
              title="Compiler Design Adventure"
              description="A C++ project exploring compiler design, including tokenization, syntax analysis, semantic checks, error detection, and optimization. The project demonstrates how human-written code is converted into machine instructions, providing a practical understanding of compiler processes."
              isGithub={true}
              ghLink="https://github.com/harris2578887/Compiler-Design"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ormsImg}
              title="Oil Refinery Management System"
              description="A .NET-based software for refinery management, covering production, inventory, raw material handling, sales, and employee management. It features production tracking, automated reordering, sales reporting, and employee record management, supporting efficient refinery operations.

"
              isGithub={true}
              ghLink="https://github.com/harris2578887/Oil_Refinary_DataBase_Management_system"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;