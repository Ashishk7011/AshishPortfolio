import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [

    {
      title: "Movie Recommending System",
      description: "It involved developing and implementing machine learning algorithm to recommend movies based on user preferences and movies’ title. It also generates movie titles based on user searches for directors, cast members, and genres.",
      tags: ["Python", "Scikit-learn", "Pandas", "Regex"],
      viewUrl: "https://movie-recommender-search-by-genre-cast-crew.streamlit.app/",
      codeUrl: "https://github.com/Ashishk7011/Movie-recommending-system"
    },
    {
      title: "SQL Project on Google Search",
      description: "This repository contains my SQL project focused on the top 3 queries on Google Search using window functions.",
      tags: ["My SQL", "Window Function"],
      viewUrl: "Public/Result_SQL.png",
      codeUrl: "https://github.com/Ashishk7011/SQL-repository"
    },
    {
      title: "Hotel Detailed Report on Power BI",
      description: "It utilizes Power BI's advanced features to analyze sales data, trends, and advanced KPIs like RevPar, ADR, DSRN, DURN, Realisation & WoW Change % using DAX",
      tags: ["Power BI", "DAX", "Power Query"],
      viewUrl: "Public/Power_BI_Dashboard.png",
      codeUrl: "https://github.com/Ashishk7011/Hotels-Power-BI-Report"
    },
    {
      title: "Data Analysis of Menu's items",
      description: "It involved collecting and analyzing nutritional information from various menu items. The aim was to uncover trends, patterns, and insights related to the composition of these menu items.",
      tags: ["Python", "Pandas", "Numpy"],
      viewUrl: "https://github.com/Ashishk7011/Data-Analysis",
      codeUrl: "https://github.com/Ashishk7011/Data-Analysis"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world impact through data-driven solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 flex flex-col animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="px-2 py-1 rounded bg-primary/20 text-primary text-xs font-medium">
                    {project.impact}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 rounded-full bg-muted text-xs border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-auto">
                <a 
                  href={project.viewUrl} // Use the URL from the project object
                  target="_blank"           // Opens in a new tab
                  rel="noopener noreferrer" 
                  className="flex-1"
                >      
                  <Button size="sm" variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    View
                  </Button>                  
                </a> 
                <a 
                  href={project.codeUrl} // Use the URL from the project object
                  target="_blank"           // Opens in a new tab
                  rel="noopener noreferrer" 
                  className="flex-1"
                > 
                  <Button size="sm" variant="outline" className="flex-1 border-primary/50 hover:bg-primary/10">
                    <Github className="h-3 w-3 mr-1" />
                    Code
                  </Button>
                </a>  
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
