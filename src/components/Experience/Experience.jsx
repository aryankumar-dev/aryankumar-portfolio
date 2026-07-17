import Particle from "../Particle";
import { FaBriefcase, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const EXPERIENCES = [
  {
    title: "Associate MERN Stack Developer",
    company: "Gravity Engineering Services",
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
    location: "Phagwara, Punjab, India",
    duration: "May 2024 – Jul 2025",
    responsibilities: [
      "Developed full-stack e-commerce applications using React.js, Node.js, Express.js, MongoDB, and MySQL, shipping responsive features and RESTful APIs in an agile team using Git and GitHub.",
      "Implemented JWT-based authentication and redesigned admin dashboards, improving platform security and streamlining day-to-day usability for 10,000+ users.",
    ],
  },
];

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

        <div className="relative mt-10 flex flex-col gap-10 pb-4 sm:pl-10">
          <div className="absolute top-2 bottom-2 left-[15px] hidden w-px bg-gradient-to-b from-[#be50f4] via-[#be50f4]/40 to-transparent sm:block" />

          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="relative">
              <span className="absolute -left-10 top-2 hidden h-8 w-8 items-center justify-center rounded-full border-2 border-[#be50f4] bg-[#1a1a2e] text-purple-300 shadow-[0_0_10px_rgba(190,80,244,0.5)] sm:flex">
                <FaBriefcase className="text-sm" />
              </span>

              <div className="group rounded-xl border border-[#be50f4]/40 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#be50f4] hover:shadow-xl hover:shadow-[#be50f4]/20">
                <div className="mb-4 flex flex-col justify-between gap-3 md:flex-row md:items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white md:text-2xl">
                      {exp.title}
                    </h3>
                    <p className="mt-1 text-lg font-semibold text-purple-400">
                      {exp.company}
                    </p>
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
                      <span className="text-justify">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
