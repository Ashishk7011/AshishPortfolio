import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 mb-6">
            Data Analyst
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Transforming Data into
          <span className="block text-gradient">Actionable Insights</span>
        </h1>
        
        <p className="text-xl md:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Leveraging advanced analytics and visualization to drive data-driven decisions 
          and unlock business value
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="https://github.com/Ashishk7011"
            target="_blank"
    >     
            <Button size="lg" className="group bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a 
            href="/Ashish_Resume.pdf" 
            download 
    >
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </a>  
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { value: "1+", label: "Years Experience" },
            { value: "10+", label: "Projects Completed" },
            { value: "10+", label: "Tools Mastered" }
          ].map((stat, index) => (
            <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
