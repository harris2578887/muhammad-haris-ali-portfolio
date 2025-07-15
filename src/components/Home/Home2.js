import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";  // ✅ Added Kaggle icon

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am <b className="purple">Muhammad Haris Ali</b>, a recent Computer Science graduate from <b className="purple">Bahria University Islamabad</b>.
              <br /><br />
              I am passionate about <b className="purple">AI and Machine Learning</b>, focusing on <b className="purple">Natural Language Processing and Large Language Models (LLMs)</b>.
              <br /><br />
              I have hands-on experience with 
              <i><b className="purple"> Hugging Face, spaCy, TensorFlow, Keras, and Scikit-learn</b></i> to build intelligent, real-world applications.
              <br /><br />
              I am skilled in 
              <i><b className="purple"> Python, C++, SQL, and PHP</b></i> and use tools like 
              <i><b className="purple"> Flask, AWS, Jupyter, and Kaggle</b></i> for projects.
              <br /><br />
              I enjoy building impactful projects, especially in healthcare and education using AI tools.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/harris2578887"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/muhammad-haris-ali-7b0593204"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.kaggle.com/haris25"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiKaggle />   {/* ✅ Kaggle logo used here */}
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
