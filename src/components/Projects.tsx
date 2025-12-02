import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import weatherProject from "@/assets/weather-app-screenshot.png";

const projects = [
  {
    title: "Weather Report App",
    description: "Proyecto de una aplicación web moderna que muestra el clima actual y el pronóstico de los próximos días, desarrollada con HTML, CSS y JavaScript usando la API de OpenWeatherMap.",
    image: weatherProject,
    tech: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    github: "https://github.com/s4mooel/proyecto-weather-report",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Proyectos <span className="text-gradient">Destacados</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Algunos de los proyectos en los que he trabajado, combinando análisis de datos 
              y desarrollo web para crear soluciones funcionales.
            </p>
          </div>

          <div className="flex justify-center">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="max-w-md w-full"
              >
                <Card className="card-gradient border-border/50 overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-300 hover:glow group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow space-y-4">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-muted-foreground flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        Ver en GitHub
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
