import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Interested in collaborating or discussing data analytics opportunities? 
            I'd love to hear from you.
          </p>
        </div>

        <Card className="p-8 bg-card border-border mb-8 animate-slide-up">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <Button
                size="lg"
                className="flex-1 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                asChild
              >
                <a href="mailto:ashishk7011@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Me
                </a>
              </Button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button
                variant="outline"
                size="icon"
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="https://www.linkedin.com/in/ashish-kumar-348523303/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary/50 hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/Ashishk7011" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </Card>

        <p className="text-sm text-muted-foreground">
          © 2025 Data Analyst Portfolio. Built with passion for data and insights.
        </p>
      </div>
    </section>
  );
};

export default Contact;
