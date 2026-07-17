import Particle from "../Particle";

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

        <div className="flex flex-col gap-8 pb-4">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#be50f4] bg-gradient-to-r from-[#1a1a2e] to-[#16213e] p-6 shadow-lg transition-all hover:shadow-xl hover:shadow-[#be50f4]/20"
            >
              <div className="mb-4 flex flex-col justify-between md:flex-row md:items-start">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white md:text-2xl">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-lg text-purple-400">
                    <strong>{exp.company}</strong>
                  </p>
                  <p className="text-sm text-gray-400">
                    {exp.location}
                  </p>
                </div>
                <p className="mt-3 text-right text-sm font-semibold text-purple-300 md:mt-0">
                  {exp.duration}
                </p>
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
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
