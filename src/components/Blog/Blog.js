import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCards";
import Particle from "../Particle";
import blog from "../../Assets/Blog/blog.png";
import tele from "../../Assets/Blog/tele.webp";
import genai from "../../Assets/Blog/genai.png";
import genai1 from "../../Assets/Blog/genai1.png";
import agenticai from "../../Assets/Blog/agenticai.png";
import { FaBlog } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function Blog() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few blogs I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>



                    <Col md={4} className="project-card">
                        <BlogCard
                            imgPath={genai1}
                            isBlog={true}
                            title="🚀 Introduction to Generative AI (For Absolute Beginners)"
                            blogicon={BsLinkedin}
                            description="A beginner-friendly guide to Generative AI explaining how AI can generate text, images, code, and more. Learn how GPT works internally using tokenization, embeddings, positional encoding, and self-attention. Perfect for anyone curious about ChatGPT, LLMs, and real-world AI applications. Simple explanations with code examples included!"
                            ghLink="https://www.linkedin.com/pulse/introduction-generative-ai-absolute-beginners-aryan-kumar-tco5c/?trackingId=%2F%2F67UcBaQUOkEpNm0HLBlA%3D%3D"
                        //   demoLink="https://weather-now-navy.vercel.app"      
                        />
                    </Col>



                    <Col md={4} className="project-card">
                        <BlogCard
                            imgPath={agenticai}
                            isBlog={true}
                            title="Agentic AI: Build Your Own Cursor"
                            blogicon={BsLinkedin}
                            description="Discover Agentic AI, where Large Language Models (LLMs) go beyond text generation to perform real-time tasks. Learn how to build your own intelligent cursor that fetches live data, automates coding, and executes commands. Perfect for anyone exploring AI-driven productivity tools, coding automation, and the future of interactive AI assistants."
                            ghLink="https://www.linkedin.com/pulse/agentic-ai-build-your-own-cursor-aryan-kumar-fym7c/?trackingId=%2F%2F67UcBaQUOkEpNm0HLBlA%3D%3D"
                        //   demoLink="https://weather-now-navy.vercel.app"      
                        />
                    </Col>



                    <Col md={4} className="project-card">
                        <BlogCard
                            imgPath={genai}
                            isBlog={true}
                            title="🚀 Mastering Prompting in Generative AI — Garbage In, Garbage Out!"
                            blogicon={BsLinkedin}
                            description="Master the art of prompting in Generative AI with this guide! Learn the importance of Garbage In, Garbage Out (GIGO), explore popular prompt formats like Alpaca, ChatML, Instruct, and discover key prompting techniques—Zero-Shot, Few-Shot, Chain-of-Thought, Self-Consistency, and Persona-based prompting—for generating accurate, high-quality AI responses."
                            ghLink="https://www.linkedin.com/pulse/mastering-prompting-generative-ai-garbage-out-aryan-kumar-ujffc/?trackingId=ZnRqJYHyRJmZ3xbckBeCHQ%3D%3D"
                        //   demoLink="https://weather-now-navy.vercel.app"      
                        />
                    </Col>


                    <Col md={4} className="project-card">
                        <BlogCard
                            imgPath={blog}
                            isBlog={true}
                            title="Prototype and Polyfills"
                            blogicon={FaBlog}
                            description="In JavaScript, the prototype is a built-in mechanism that allows objects to inherit properties and methods from other objects. The browser defines these prototypes, providing built-in functionality to different types of objects. In JavaScript, everything is an object—because they are defined in object prototype."
                            ghLink="https://objectandmemoryinjs.hashnode.dev/prototype-and-polyfills"
                        //   demoLink="https://weather-now-navy.vercel.app"      
                        />
                    </Col>



                    <Col md={4} className="project-card">
                        <BlogCard
                            imgPath={tele}
                            isBlog={true}
                            title="Teleportation through JavaScript"
                            blogicon={FaBlog}
                            description="Types of Memory 1. Stack Memory Stack Memory are Small in Size , It is faster , we store primitive data here , it works in Last In, First Out (LIFO) manner 2. Heap Memory Heap Memory are Large in Size , It is slower , we store data by its reference h...."
                            ghLink="https://teleportationofhuman.hashnode.dev"
                        //   demoLink="https://weather-now-navy.vercel.app"      
                        />
                    </Col>



                </Row>
            </Container>
        </Container>
    );
}

export default Blog;
