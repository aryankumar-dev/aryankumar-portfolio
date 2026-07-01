import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiPhp,
  DiBootstrap,
} from "react-icons/di";
import {
  SiLaravel,
  SiGithub,
  SiExpress,
  SiOpenai,
  SiTailwindcss,
  SiNextdotjs,
} from "react-icons/si";

const TECH_STACK = [
  { icon: DiHtml5, label: "HTML" },
  { icon: DiCss3, label: "CSS" },
  { icon: DiBootstrap, label: "Bootstrap" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: DiJavascript1, label: "JavaScript" },
  { icon: DiPhp, label: "PHP" },
  { icon: CgCPlusPlus, label: "C / C++" },
  { icon: DiJava, label: "Java" },
  { icon: DiPython, label: "Python" },
  { icon: DiNodejs, label: "Node.js" },
  { icon: DiReact, label: "React.js" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiExpress, label: "Express.js" },
  { icon: SiLaravel, label: "Laravel" },
  { icon: DiGit, label: "Git" },
  { icon: SiGithub, label: "GitHub" },
  { icon: DiMysql, label: "MySQL" },
  { icon: DiMongodb, label: "MongoDB" },
  { icon: SiOpenai, label: "Generative AI" },
];

function Techstack() {
  return (
    <div className="grid grid-cols-2 justify-center gap-3 pb-12 sm:grid-cols-4 md:grid-cols-6">
      {TECH_STACK.map(({ icon: Icon, label }) => (
        <div key={label} className="tech-icons">
          <Icon /> <p className="fs-6 fw-bold">{label}</p>
        </div>
      ))}
    </div>
  );
}

export default Techstack;
