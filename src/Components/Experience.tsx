import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Data Analyst",
      organization: "Digital Sampark",
      period: "June 2024 - Present",
      description: "Leading data analytics initiatives across multiple business units & implementing advanced analytics solutions.",
      achievements: [
        "Analyzed event performance data and digital engagement metrics to extract insights and identify audience trends.",
        "Utilized Python, SQL, and Excel for event data tracking, participant analysis, and post-event reporting.",
        "Segregated and organized attendee, vendor, and campaign data to meet business and operational requirements.",
        "Cleaned and processed marketing and registration data to ensure accurate insights for campaign optimization.",
        "Enhanced data quality through systematic cleansing and formatting, improving reporting accuracy and event planning efficiency."
      ],
    },
    {
      type: "work",
      title: "Data Analyst Intern",
      organization: "Political Sampark",
      period: "Mar 2024 - May 2024",
      description: "Analyzed election campaign performance and customer behavior to optimize and drive growth strategies.",
      achievements: [
        "Analyzed large volumes of voter and campaign data to extract actionable insights and identify political trends.",
        "Utilized Python, SQL, and Excel to clean, organize, and analyze constituencywise datasets for targeted campaign strategies.",
        "Segregated and structured voter demographics, social sentiment, and engagement data to support data-driven political decision-making.",
        "Cleaned and processed survey, social media, and election data to ensure accuracy and reliability in campaign analytics.",
        "Optimized data quality and reporting workflows, enabling the campaign team to make timely and informed strategic moves."
      ],
    },
    {
      type: "education",
      title: "BTech - Information Technology",
      organization: "JC Bose University of Science & Tehnology",
      period: "2018-2022",
      description: "Focus on statistical analysis, data analysis, probability theory, and machine learning.",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A journey of continuous learning and impactful contributions
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    {exp.type === "work" ? (
                      <Briefcase className="h-6 w-6 text-primary" />
                    ) : (
                      <GraduationCap className="h-6 w-6 text-secondary" />
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary mb-2">{exp.organization}</p>
                  <p className="text-muted-foreground mb-3">{exp.description}</p>
                  {exp.achievements && (
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">▸</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
