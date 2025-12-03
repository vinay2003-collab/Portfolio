import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Advanced Web Calculator",
      description: "A dual-display calculator with advanced arithmetic features.",
      image: "/projects/calculator.png",
      link: "https://vinay2003-collab.github.io/calculatorlevel2/"
    },
    {
      title: "Image Carousel Slider",
      description: "A smooth image slider with auto and manual navigation.",
      image: "/projects/carousel.png",
      link: "https://vinay2003-collab.github.io/imageslider/"
    },
    {
      title: "Music Player",
      description: "A custom music player with playlist and playback controls.",
      image: "/projects/music-player.png",
      link: "https://vinay2003-collab.github.io/Musicplayer/"
    },
    {
      title: "Quiz App",
      description: "A quiz app with scoring, question flow, and clean UI.",
      image: "/projects/quiz-app.png",
      link: "#", // Replace with: "https://github.com/yourusername/quiz-app"
    },
    {
      title: "Weather App",
      description: "A weather forecast app using API with 7-day thumbnails.",
      image: "/projects/weather-app.png",
      link: "https://github.com/vinay2003-collab/weatherappmain"
    },
    {
      title: "Task Management System",
      description: "A CRUD task manager with filters and a modern dashboard.",
      image: "/projects/task-manager.png",
      link: "#", // Replace with: "https://github.com/yourusername/task-manager"
    },
    {
      title: "Todo App",
      description: "A minimal and clean todo app for daily tasks.",
      image: "/projects/todo-app.png",
      link: "#", // Replace with: "https://github.com/yourusername/todo-app"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-xl overflow-hidden hover-glow group"
            >
              <div className="aspect-video bg-secondary relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {project.title}
                </h3>
                <p className="text-foreground/70 mb-4 text-sm">
                  {project.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
