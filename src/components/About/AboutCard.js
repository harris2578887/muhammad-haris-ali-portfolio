import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            Hi, I am <span className="purple">Muhammad Haris Ali</span> from <span className="purple">Islamabad, Pakistan</span>.
            <br />
            I am an AI and Machine Learning enthusiast specializing in <b className="purple">Natural Language Processing and LLM Fine-Tuning</b>.
            <br />
            I recently completed my <b className="purple">BS in Computer Science at Bahria University Islamabad</b>.
            <br />
            <br />
            Outside of coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Camping , Swimming
            </li>
            <li className="about-activity">
              <ImPointRight /> Bike Tours
            </li>
            <li className="about-activity">
              <ImPointRight /> Hiking
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build impactful AI solutions that make a difference."
          </p>
          <footer className="blockquote-footer">Muhammad Haris Ali</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
