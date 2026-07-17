import Particle from "../Particle";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";

export const EXPERIENCES = [
  {
    title: "Associate MERN Stack Developer",
    company: "Gravity Engineering Services",
    companyLink: "https://www.gravityer.com/",
    location: "Raipur, Chhattisgarh, India",
    duration: "Aug 2025 – Jun 2026",
    responsibilities: [
      "Built and maintained production full-stack applications with Next.js, Node.js, Express.js, and MongoDB, integrating OpenAI, Claude, and Gemini APIs to power AI features for 200,000+ active users.",
      "Designed scalable RESTful APIs and implemented JWT authentication with role-based access control (RBAC), strengthening application security and simplifying permission management across user roles.",
      "Profiled and optimized MongoDB queries and refactored key API endpoints, improving page load speed and overall application responsiveness across core user flows.",
    ],
  },
  {
    title: "Associate Web Developer",
    company: "Protolabz eServices",
    companyLink: "https://protolabzit.com/",
    location: "Phagwara, Punjab, India",
    duration: "May 2024 – Jul 2025",
    responsibilities: [
      "Developed full-stack e-commerce applications using React.js, Node.js, Express.js, MongoDB, and MySQL, shipping responsive features and RESTful APIs in an agile team using Git and GitHub.",
      "Implemented JWT-based authentication and redesigned admin dashboards, improving platform security and streamlining day-to-day usability for 10,000+ users.",
    ],
  },
];

export function ExperienceTimeline() {
  return (
    <div className="flex flex-col pb-4">
      {EXPERIENCES.map((exp, index) => (
        <div key={index} className="flex gap-4 sm:gap-5">
          <div className="flex flex-shrink-0 flex-col items-center">
            <span className="experience-node flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#be50f4] bg-[#1a1a2e] text-purple-300 shadow-[0_0_12px_rgba(190,80,244,0.5)]">
              <FaBriefcase />
            </span>
            {index < EXPERIENCES.length - 1 && (
              <span className="my-1 w-px flex-1 bg-gradient-to-b from-[#be50f4]/70 via-[#be50f4]/25 to-transparent" />
            )}
          </div>

          <div className="flex-1 pb-16 last:pb-0">
            <div className="group rounded-xl border border-[#be50f4]/40 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-5 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#be50f4] hover:shadow-xl hover:shadow-[#be50f4]/20 sm:p-6">
              <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                    {exp.title}
                  </h3>
                  <a
                    href={exp.companyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex w-fit items-center gap-1.5 text-base font-semibold text-purple-400 transition-colors hover:text-purple-300 hover:underline sm:text-lg"
                  >
                    {exp.company}
                    <FaExternalLinkAlt className="text-xs opacity-70" />
                  </a>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-gray-400">
                    <FaMapMarkerAlt className="text-purple-400/80" />
                    {exp.location}
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#be50f4]/50 bg-[#be50f4]/10 px-3 py-1 text-xs font-semibold text-purple-300 md:text-sm">
                  <FaCalendarAlt />
                  {exp.duration}
                </span>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex gap-3 text-gray-300">
                    <span className="mt-1 flex-shrink-0 text-purple-400">
                      ▸
                    </span>
                    <span className="text-justify text-sm sm:text-base">
                      {resp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Experience() {
  return (
    <div className="experience-section">
      <Particle />
      <div className="mx-auto max-w-6xl px-4">
        <h1 className="project-heading">
          My <strong className="purple">Experience </strong>
        </h1>
        <p className="text-white">
          Here are the companies I've worked with and the impact I've made.
        </p>

        <div className="mt-10">
          <ExperienceTimeline />
        </div>
      </div>
    </div>
  );
}

export default Experience;
