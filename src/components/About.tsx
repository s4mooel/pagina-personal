import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { Code2, Database, GitBranch, LineChart } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    items: ["Python", "JavaScript", "React", "HTML", "CSS"],
  },
  {
    icon: Database,
    title: "Bases de Datos",
    items: ["SQL", "Power BI"],
  },
  {
    icon: GitBranch,
    title: "Control de Versiones",
    items: ["Git", "GitHub"],
  },
  {
    icon: LineChart,
    title: "Análisis de Datos",
    items: ["Visualización", "Estadística"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
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
              Sobre <span className="text-gradient">Mí</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Estudiante de Ingeniería de Sistemas en busca de prácticas con interés en desarrollo web, bases de datos, análisis de datos y la tecnología manejando lenguajes, herramientas técnicas y digitales como JavaScript, HTML, CSS, SQL, Python y R, que he aplicado en proyectos académicos para el desarrollo de sitios web, análisis de datos y gestión de bases de datos. También manejo entornos como VS Code, GitHub y MySQL Workbench, que utilizo para el control de versiones, pruebas y documentación de código.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="card-gradient border-border/50 p-6 h-full hover:border-primary/50 transition-all duration-300 hover:glow">
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <skill.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.title}</h3>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="text-muted-foreground flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
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

export default About;
