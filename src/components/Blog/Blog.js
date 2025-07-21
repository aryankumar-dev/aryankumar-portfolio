import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BlogCard from "./BlogCards";
import Particle from "../Particle";
import blog from "../../Assets/Blog/blog.png";
import tele from "../../Assets/Blog/tele.webp";
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



                    <Col md={4} className="project-card">
                        <BlogCard
                            imgPath={tele}
                            isBlog={true}
                            title="🚀 Introduction to Generative AI (For Absolute Beginners)"
                            blogicon={FaBlog}
                            description="In this post, I’ve broken down the basics of Generative AI in the simplest way possible, with practical code examples. Whether you’re curious about how AI like ChatGPT works or you want to understand the tech behind AI tools, this guide covers it all."
                            ghLink="https://teleportationofhuman.hashnode.dev"
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
