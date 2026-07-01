import BlogCard from "./BlogCards";
import Particle from "../Particle";
import blog from "../../Assets/Blog/blog.png";
import tele from "../../Assets/Blog/tele.webp";
import genai from "../../Assets/Blog/genai.png";
import genai1 from "../../Assets/Blog/genai1.png";
import agenticai from "../../Assets/Blog/agenticai.png";
import { FaBlog } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";

const BLOGS = [
  {
    imgPath: genai1,
    title: "🚀 Introduction to Generative AI (For Absolute Beginners)",
    blogIcon: BsLinkedin,
    description:
      "A beginner-friendly guide to Generative AI explaining how AI can generate text, images, code, and more. Learn how GPT works internally using tokenization, embeddings, positional encoding, and self-attention. Perfect for anyone curious about ChatGPT, LLMs, and real-world AI applications. Simple explanations with code examples included!",
    ghLink:
      "https://www.linkedin.com/pulse/introduction-generative-ai-absolute-beginners-aryan-kumar-tco5c/?trackingId=%2F%2F67UcBaQUOkEpNm0HLBlA%3D%3D",
  },
  {
    imgPath: agenticai,
    title: "Agentic AI: Build Your Own Cursor",
    blogIcon: BsLinkedin,
    description:
      "Discover Agentic AI, where Large Language Models (LLMs) go beyond text generation to perform real-time tasks. Learn how to build your own intelligent cursor that fetches live data, automates coding, and executes commands. Perfect for anyone exploring AI-driven productivity tools, coding automation, and the future of interactive AI assistants.",
    ghLink:
      "https://www.linkedin.com/pulse/agentic-ai-build-your-own-cursor-aryan-kumar-fym7c/?trackingId=%2F%2F67UcBaQUOkEpNm0HLBlA%3D%3D",
  },
  {
    imgPath: genai,
    title:
      "🚀 Mastering Prompting in Generative AI — Garbage In, Garbage Out!",
    blogIcon: BsLinkedin,
    description:
      "Master the art of prompting in Generative AI with this guide! Learn the importance of Garbage In, Garbage Out (GIGO), explore popular prompt formats like Alpaca, ChatML, Instruct, and discover key prompting techniques—Zero-Shot, Few-Shot, Chain-of-Thought, Self-Consistency, and Persona-based prompting—for generating accurate, high-quality AI responses.",
    ghLink:
      "https://www.linkedin.com/pulse/mastering-prompting-generative-ai-garbage-out-aryan-kumar-ujffc/?trackingId=ZnRqJYHyRJmZ3xbckBeCHQ%3D%3D",
  },
  {
    imgPath: blog,
    title: "Prototype and Polyfills",
    blogIcon: FaBlog,
    description:
      "In JavaScript, the prototype is a built-in mechanism that allows objects to inherit properties and methods from other objects. The browser defines these prototypes, providing built-in functionality to different types of objects. In JavaScript, everything is an object—because they are defined in object prototype.",
    ghLink: "https://objectandmemoryinjs.hashnode.dev/prototype-and-polyfills",
  },
  {
    imgPath: tele,
    title: "Teleportation through JavaScript",
    blogIcon: FaBlog,
    description:
      "Types of Memory 1. Stack Memory Stack Memory are Small in Size , It is faster , we store primitive data here , it works in Last In, First Out (LIFO) manner 2. Heap Memory Heap Memory are Large in Size , It is slower , we store data by its reference h....",
    ghLink: "https://teleportationofhuman.hashnode.dev",
  },
];

function Blog() {
  return (
    <div className="project-section">
      <Particle />
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className="text-white">
          Here are a few blogs I've worked on recently.
        </p>
        <div className="grid grid-cols-1 justify-center gap-6 pb-4 sm:grid-cols-2 md:grid-cols-3">
          {BLOGS.map((blogPost) => (
            <div key={blogPost.title} className="project-card">
              <BlogCard {...blogPost} isBlog />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
