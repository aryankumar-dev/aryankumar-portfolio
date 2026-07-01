import {
  SiVisualstudiocode,
  SiPostman,
  SiDocker,
  SiAmazonaws,
  SiMacos,
} from "react-icons/si";

const TOOLS = [SiMacos, SiVisualstudiocode, SiPostman, SiDocker, SiAmazonaws];

function Toolstack() {
  return (
    <div className="grid grid-cols-2 justify-center gap-3 pb-12 sm:grid-cols-4 md:grid-cols-6">
      {TOOLS.map((Icon, index) => (
        <div key={index} className="tech-icons">
          <Icon />
        </div>
      ))}
    </div>
  );
}

export default Toolstack;
