import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import prepyatra from "../../Assets/Projects/prepyatra.png";
import moodify from "../../Assets/Projects/moodify.png";
import weather from "../../Assets/Projects/weather.png";
import jobboard from "../../Assets/Projects/jobboard.png";
import eductionalwebsite from "../../Assets/Projects/eductionalwebsite.png";

const PROJECTS = [
  {
    imgPath: prepyatra,
    title: "PrepYatra",
    description:
      "AI-integrated job preparation platform for jobseekers using Node.js, Express, React, and MongoDB. Features include an AI chatbot for interview prep, recruiter details, interview schedules, study tracking with prep logs, and top tech questions. AI helps with instant guidance, answering job-related queries, and providing resources for effective preparation.",
    ghLink: "https://github.com/aryankumar-dev/prepyatra",
  },
  {
    imgPath: eductionalwebsite,
    title: "Educational Website",
    description:
      "Empowering students to access the best study materials, video tutorials and practice resources all in one place to excel in their exams. Created frontend with html ,Css and Javascript and for backend Mysql",
    ghLink:
      "https://github.com/aryankumar-dev/educational-website?tab=readme-ov-file",
  },
  {
    imgPath: moodify,
    title: "Moodify",
    description:
      "Moodify is a full-stack web application that recommends curated Spotify playlists based on your current mood — like happy, sad, or excited. It uses the Spotify23 API (via RapidAPI) to fetch mood-relevant music and allows users to save favorites using MongoDB.",
    ghLink: "https://github.com/aryankumar-dev/Moodify",
    demoLink: "https://moodify-ochre-two.vercel.app",
  },
  {
    imgPath: jobboard,
    title: "Job-Board",
    description:
      "Build a professional job listing platform where users can browse, filter, and view job details. It includes pagination, multi-criteria filtering, modal-based application flow, and advanced UI with tabbed views and local storage.",
    ghLink: "https://github.com/aryankumar-dev/Job-Board",
    demoLink: "https://job-board-lovat-two.vercel.app/",
  },
  {
    imgPath: jobboard,
    title: "kanban-board",
    description:
      "This is a Kanban board project built with Node.js, Express, React, and MongoDB. It includes secure JWT authentication for login and signup, along with email notifications for user activities. Users can easily create, update, and manage tasks across boards with a smooth drag-and-drop interface and responsive design.",
    ghLink: "https://github.com/aryankumar-dev/kanban-board",
    demoLink: "https://kanban-board-eight-mu.vercel.app/",
  },
  {
    imgPath: weather,
    title: "Weather-Now",
    description:
      "This is a Weather App built with Node.js, Express, React, and MongoDB using the OpenWeather API. It fetches live weather data based on user input and displays it in a clean UI. Every user search is stored in the database to track search history and weather trends.",
    ghLink: "https://github.com/aryankumar-dev/Weather-Now",
    demoLink: "https://weather-now-navy.vercel.app",
  },
];

function Projects() {
  return (
    <div className="project-section">
      <Particle />
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p className="text-white">
          Here are a few projects I've worked on recently.
        </p>
        <div className="grid grid-cols-1 justify-center gap-6 pb-4 sm:grid-cols-2 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <div key={project.title} className="project-card">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
