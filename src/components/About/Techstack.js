import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiPhp,
  DiBootstrap
} from "react-icons/di";
import {
  SiLaravel,
  SiDocker,
  SiGithub,
  SiExpress,
  SiOpenai,
  SiApollographql,
  SiTailwindcss,
  SiNextdotjs
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 /> <p className="fs-6 fw-bold">HTML</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 /> <p className="fs-6 fw-bold">CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiBootstrap /> <p className="fs-6 fw-bold">Bootstrap</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTailwindcss /> <p className="fs-6 fw-bold">Tailwind CSS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> <p className="fs-6 fw-bold">JavaScript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp /> <p className="fs-6 fw-bold">PHP</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus /> <p className="fs-6 fw-bold">C / C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> <p className="fs-6 fw-bold">Java</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> <p className="fs-6 fw-bold">Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> <p className="fs-6 fw-bold">Node.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> <p className="fs-6 fw-bold">React.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs /> <p className="fs-6 fw-bold">Next.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress /> <p className="fs-6 fw-bold">Express.js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLaravel /> <p className="fs-6 fw-bold">Laravel</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> <p className="fs-6 fw-bold">Git</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> <p className="fs-6 fw-bold">GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql /> <p className="fs-6 fw-bold">MySQL</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> <p className="fs-6 fw-bold">MongoDB</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiDocker /> <p className="fs-6 fw-bold">Docker</p>
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiOpenai /> <p className="fs-6 fw-bold">Generative AI</p>
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiApollographql /> <p className="fs-6 fw-bold">API</p>
      </Col> */}
    </Row>
  );
}

export default Techstack;
