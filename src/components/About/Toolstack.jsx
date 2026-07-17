import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiAmazonaws,
  SiMacos,
  SiOpenai,
} from "react-icons/si";
import { BsStars, BsRobot } from "react-icons/bs";

const TOOLS = [
  { icon: SiMacos, label: "macOS" },
  { icon: SiVisualstudiocode, label: "VS Code" },
  { icon: SiPostman, label: "Postman" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiAmazonaws, label: "AWS" },
  { icon: SiOpenai, label: "OpenAI" },
  { icon: BsRobot, label: "Gemini" },
  { icon: BsStars, label: "Claude" },
];

function Toolstack() {
  return (
    <div className="grid grid-cols-2 justify-center gap-3 pb-12 sm:grid-cols-4 md:grid-cols-6">
      {TOOLS.map(({ icon: Icon, label }) => (
        <div key={label} className="tech-icons">
          <Icon />
          <p>{label}</p>
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
