import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

function About() {
  return (
    <div className="about-section">
      <Particle />
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-center gap-8 py-4 md:flex-row">
          <div className="w-full pb-12 pt-8 md:w-7/12">
            <h1 className="pb-5 text-[2.1em]">
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </div>
          <div className="about-img w-full pb-12 pt-0 md:w-5/12 md:pt-[120px]">
            <img src={laptopImg} alt="about" className="img-fluid mx-auto" />
          </div>
        </div>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Experience</strong>
        </h1>
        <div className="mb-8 rounded-[15px] border border-white/10 bg-white/5 p-6 text-white shadow-[0_4px_5px_3px_rgba(119,53,136,0.2)]">
          <h2 className="mb-2 text-xl font-semibold">Associate MERN Stack Developer</h2>
          <p className="mb-2 text-purple-300">Gravity Engineering Services — Aug 2025 to Jun 2026</p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-white/90">
            <li>Built and maintained production full-stack applications with Next.js, Node.js, Express.js, and MongoDB, integrating OpenAI, Claude, and Gemini APIs for AI-powered features used by 200,000+ active users.</li>
            <li>Designed scalable RESTful APIs and implemented JWT auth with role-based access control, strengthening security and simplifying permissions across user roles.</li>
            <li>Optimized MongoDB queries and refactored APIs, improving page load speed and responsiveness across core user flows.</li>
          </ul>
        </div>

        <div className="mb-8 rounded-[15px] border border-white/10 bg-white/5 p-6 text-white shadow-[0_4px_5px_3px_rgba(119,53,136,0.2)]">
          <h2 className="mb-2 text-xl font-semibold">Associate Web Developer</h2>
          <p className="mb-2 text-purple-300">Protolabz eServices — May 2024 to Jul 2025</p>
          <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-white/90">
            <li>Developed full-stack e-commerce applications using React.js, Node.js, Express.js, MongoDB, and MySQL, shipping responsive features and RESTful APIs in an agile team.</li>
            <li>Implemented JWT-based authentication and redesigned admin dashboards, improving platform security and usability for 10,000+ users.</li>
          </ul>
        </div>

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </div>
    </div>
  );
}

export default About;
