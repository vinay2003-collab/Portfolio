import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="glass-card p-8 md:p-12 rounded-2xl hover-glow">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="gradient-text">P. Vinay</span>
            </h2>
            <h3 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Full Stack Developer
            </h3>
            <div className="mb-8">
              <h4 className="text-xl font-semibold text-primary mb-4">About Me</h4>
              <p className="text-foreground/80 leading-relaxed">
                I'm a MERN stack developer focused on building clean, efficient, and user-friendly web applications. 
                I enjoy turning ideas into functional digital experiences through simple and scalable code.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("projects")} 
                size="lg" 
                className="glow-effect"
              >
                View Projects
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                size="lg" 
                variant="outline"
                className="hover-glow"
              >
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative">
              <div className="glass-card p-6 rounded-xl hover-glow animate-fade-in">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-destructive"></div>
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-xs text-muted-foreground ml-2">~ portfolio.js</span>
                </div>
                <div className="font-mono text-sm space-y-2">
                  <div className="text-primary">const developer = &#123;</div>
                  <div className="pl-4 text-foreground/70">name: <span className="text-accent">'P. Vinay'</span>,</div>
                  <div className="pl-4 text-foreground/70">role: <span className="text-accent">'Full Stack'</span>,</div>
                  <div className="pl-4 text-foreground/70">stack: [</div>
                  <div className="pl-8 text-accent">'MongoDB', 'Express',</div>
                  <div className="pl-8 text-accent">'React', 'Node.js'</div>
                  <div className="pl-4 text-foreground/70">],</div>
                  <div className="pl-4 text-foreground/70">passion: <span className="text-accent">'Building'</span></div>
                  <div className="text-primary">&#125;;</div>
                  <div className="mt-4 text-muted-foreground">// Ready to create ✨</div>
                </div>
              </div>
              
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
