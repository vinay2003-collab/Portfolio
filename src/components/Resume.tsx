import { Download } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

const Resume = () => {
  const { toast } = useToast();

  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/file:///C:/Users/91901/Downloads/vinay_resume%20(2)%20(2).pdf'; // Place your resume.pdf file in the public folder
    link.download = 'Peddinti_Vinay_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast({
      title: "Resume Downloaded",
      description: "Resume has been downloaded successfully.",
    });
  };

  return (
    <section id="resume" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-12 rounded-xl text-center hover-glow">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
            Download my resume to learn more about my experience, skills, and projects.
          </p>
          <Button 
            size="lg" 
            onClick={handleDownload}
            className="glow-effect text-lg px-8"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
