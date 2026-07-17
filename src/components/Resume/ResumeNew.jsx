import { Button } from "@/components/ui/button";
import { AiOutlineDownload } from "react-icons/ai";

const previewLink =
  "https://drive.google.com/file/d/1nWcunfnokmN4pWpzmYKIQq9-b8JoSyPm/preview";
const downloadLink =
  "https://drive.google.com/uc?export=download&id=1nWcunfnokmN4pWpzmYKIQq9-b8JoSyPm";

function DownloadButton() {
  return (
    <Button asChild className="max-w-[250px]">
      <a href={downloadLink} target="_blank" rel="noopener noreferrer">
        <AiOutlineDownload /> Download CV
      </a>
    </Button>
  );
}

function ResumeNew() {
  return (
    <div className="resume-section">
      <div className="mb-5 flex justify-center">
        <DownloadButton />
      </div>

      <div className="resume flex justify-center">
        <iframe
          src={previewLink}
          allow="autoplay"
          className="aspect-[3/4] w-full max-w-3xl rounded-[10px] border-2 border-[#8a8a8a] sm:h-[700px] sm:aspect-auto"
          title="Resume Viewer"
        ></iframe>
      </div>

      <div className="mt-5 flex justify-center">
        <DownloadButton />
      </div>
    </div>
  );
}

export default ResumeNew;
