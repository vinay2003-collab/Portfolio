import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="gradient-text">Get in Touch</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:peddintivinay279@gmail.com" className="text-foreground hover:text-primary transition-colors">
                    peddintivinay279@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a href="tel:9014291378" className="text-foreground hover:text-primary transition-colors">
                    9014291378
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/YOUR_GITHUB_USERNAME" 
                  className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover-glow"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" 
                  className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover-glow"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:peddintivinay279@gmail.com" 
                  className="p-3 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all hover-glow"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <div className="space-y-4">
              <div>
                <Input 
                  type="text" 
                  placeholder="Your Name" 
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  required
                  className="bg-secondary border-border"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  required
                  rows={5}
                  className="bg-secondary border-border resize-none"
                />
              </div>
              <Button type="submit" className="w-full glow-effect" size="lg">
                Send Message
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
