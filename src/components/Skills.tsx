import { Code2, Database, Wrench, FileCode } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Skills",
      icon: <Code2 className="w-5 h-5" />,
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Frameworks & Backend",
      icon: <Database className="w-5 h-5" />,
      skills: ["React.js", "Node.js", "Express.js", "MongoDB"],
    },
    {
      title: "Languages",
      icon: <FileCode className="w-5 h-5" />,
      skills: ["Java", "JavaScript"],
    },
    {
      title: "Tools",
      icon: <Wrench className="w-5 h-5" />,
      skills: ["VS Code", "GitHub"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="glass-card p-6 rounded-xl hover-glow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
