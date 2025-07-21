import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";

// Google Drive View and Download Link
const previewLink = "https://drive.google.com/file/d/1R_x1iSiyFFB2WMqIzwiN84X00SUdtK3R/preview";
const downloadLink = "https://drive.google.com/uc?export=download&id=1R_x1iSiyFFB2WMqIzwiN84X00SUdtK3R";

function ResumeNew() {
  return (
    <Container fluid className="resume-section">
      <Row style={{ justifyContent: "center", marginBottom: "20px" }}>
        <Button
          variant="primary"
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload /> &nbsp;
          Download CV
        </Button>
      </Row>

      {/* Iframe Viewer */}
      <Row className="resume d-flex justify-content-center">
        <iframe
          src={previewLink}
          width="80%"
          height="700px"
          allow="autoplay"
          style={{ border: "2px solid #8a8a8aff", borderRadius: "10px" }}
          title="Resume Viewer"
        ></iframe>
      </Row>

      <Row style={{ justifyContent: "center", marginTop: "20px" }}>
        <Button
          variant="primary"
          href={downloadLink}
          target="_blank"
          rel="noopener noreferrer"
          style={{ maxWidth: "250px" }}
        >
          <AiOutlineDownload /> &nbsp;
          Download CV
        </Button>
      </Row>
    </Container>
  );
}

export default ResumeNew;
