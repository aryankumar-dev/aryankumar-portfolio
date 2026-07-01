import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards({ imgPath, title, description, ghLink, demoLink, isBlog = false }) {
  return (
    <Card className="project-card-view flex h-full flex-col">
      <img src={imgPath} alt={title} className="card-img-top" />
      <CardContent className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 flex-1 text-justify">{description}</p>
        <div className="flex flex-wrap gap-2">
          <Button asChild>
            <a href={ghLink} target="_blank" rel="noopener noreferrer">
              <BsGithub /> {isBlog ? "Blog" : "GitHub"}
            </a>
          </Button>

          {!isBlog && demoLink && (
            <Button asChild>
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <CgWebsite /> Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCards;
