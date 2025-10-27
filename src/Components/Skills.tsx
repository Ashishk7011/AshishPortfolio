import { Card } from "@/components/ui/card";
import { Database, BarChart3, Code2, Brain, FileSpreadsheet, TrendingUp } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Database,
      title: "Data Management",
      skills: ["AWS", "MySQL"],
    },
    {
      icon: BarChart3,
      title: "Visualization",
      skills: ["Tableau", "Power BI", "Seaborn", "MatPlotlib"],
    },
    {
      icon: Code2,
      title: "Programming",
      skills: ["Python", "Numpy", "Pandas"],
    },
    {
      icon: Brain,
      title: "Machine Learning",
      skills: ["Scikit-learn", "TensorFlow", "Statistical Modeling", "Predictive Analytics"],
    },
    {
      icon: FileSpreadsheet,
      title: "Tools & Platforms",
      skills: ["Excel", "Power BI", "Jupyter", "Tableau", "Pycharm", "VS Code", "AWS"],
    },
    {
      icon: TrendingUp,
      title: "Analytics",
      skills: ["A/B Testing", "Statistical Analysis", "KPI Development", "Business Intelligence", "Web Scraping", "Creative Thinking"],
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for extracting insights from complex datasets
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 rounded-full bg-muted text-sm border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
