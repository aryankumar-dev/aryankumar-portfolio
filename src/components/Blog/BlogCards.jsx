import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function BlogCards({ imgPath, title, description, ghLink, blogIcon: BlogIcon }) {
  return (
    <Card className="project-card-view flex h-full flex-col">
      <img src={imgPath} alt={title} className="card-img-top" />
      <CardContent className="flex flex-1 flex-col p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 flex-1 text-justify">{description}</p>
        <Button asChild>
          <a href={ghLink} target="_blank" rel="noopener noreferrer">
            <BlogIcon /> Blog
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

export default BlogCards;
