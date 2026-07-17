import {
  DiJavascript1,
  DiHtml5,
  DiCss3,
  DiPython,
  DiJava,
  DiGit,
} from "react-icons/di";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiJsonwebtokens,
  SiOpenai,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { BsStars, BsRobot } from "react-icons/bs";

const SKILL_GROUPS = [
  {
    title: "Languages",
    tagline: "The foundations I write every day",
    skills: [
      { icon: DiJavascript1, label: "JavaScript" },
      { icon: DiHtml5, label: "HTML" },
      { icon: DiCss3, label: "CSS" },
      { icon: DiPython, label: "Python" },
      { icon: DiJava, label: "Java" },
    ],
  },
  {
    title: "Technical",
    tagline: "How I build full-stack products",
    skills: [
      { icon: SiReact, label: "React.js" },
      { icon: SiNextdotjs, label: "Next.js" },
      { icon: SiNodedotjs, label: "Node.js" },
      { icon: SiExpress, label: "Express.js" },
      { icon: SiMongodb, label: "MongoDB" },
      { icon: SiMysql, label: "MySQL" },
      { icon: TbApi, label: "RESTful APIs" },
      { icon: SiJsonwebtokens, label: "JWT Authentication" },
    ],
  },
  {
    title: "AI & Tools",
    tagline: "What I use to ship faster & smarter",
    skills: [
      { icon: BsStars, label: "Generative AI" },
      { icon: SiOpenai, label: "OpenAI API" },
      { icon: BsRobot, label: "Google Gemini API" },
      { icon: BsRobot, label: "Claude API" },
      { icon: DiGit, label: "Git" },
      { icon: SiGithub, label: "GitHub" },
      { icon: SiDocker, label: "Docker" },
    ],
  },
];

function Skills() {
  return (
    <div className="skills-section" id="skills">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="project-heading text-center">
          My <strong className="purple">Skills</strong>
        </h1>
        <p className="mx-auto max-w-xl text-center text-white/70">
          Technologies and tools I use to design, build, and ship
          intelligent full-stack products.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="skill-card group">
              <div className="skill-card-glow" aria-hidden="true" />
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white">
                  {group.title}
                </h3>
                <p className="mb-5 mt-1 text-sm text-white/50">
                  {group.tagline}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map(({ icon: Icon, label }) => (
                    <span key={label} className="skill-chip">
                      <Icon className="skill-chip-icon" />
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
