import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiPython, 
  DiJavascript1, 
  DiGit 
} from "react-icons/di";
import { 
  SiTensorflow, 
  SiPytorch, 
  SiKeras, 
  SiScikitlearn, 
  SiNumpy, 
  SiPandas 
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h6>Python</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h6>JavaScript</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h6>Git</h6>
      </Col>

      {/* ML & NLP Libraries */}
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
        <h6>TensorFlow</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <h6>PyTorch</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiKeras />
        <h6>Keras</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
        <h6>Scikit-Learn</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
        <h6>Pandas</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
        <h6>NumPy</h6>
      </Col>

      {/* NLP & LLM Tools (using labels) */}
      <Col xs={4} md={2} className="tech-icons">
        <h1>🗣️</h1>
        <h6>spaCy</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h1>📘</h1>
        <h6>NLTK</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h1>🤗</h1>
        <h6>Transformers</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h1>🔮</h1>
        <h6>OpenAI GPT</h6>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <h1>🪐</h1>
        <h6>Gemini</h6>
      </Col>
    </Row>
  );
}

export default Techstack;
