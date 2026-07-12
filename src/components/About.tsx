import { motion } from "framer-motion";
import { Code2, Database, Workflow, Container } from "lucide-react";

const skills = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    items: ["JavaScript", "TypeScript", "React", "HTML", "CSS"],
  },
  {
    icon: Database,
    title: "Bases de Datos",
    items: ["MySQL", "PostgreSQL", "SQL", "Excel"],
  },
  {
    icon: Workflow,
    title: "Automatizaciones & Datos",
    items: ["Python", "ETL", "Google Apps Script", "R", "Visualización"],
  },
  {
    icon: Container,
    title: "DevOps & Herramientas",
    items: ["Docker", "Git", "GitHub", "Google Antigravity"],
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <p className="eyebrow mb-5">— Sobre mí</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-[1.1]">
              Datos, código y <span className="text-gradient">automatización</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex-1 lg:pt-10"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Ingeniero de Sistemas con intereses en análisis de datos, desarrollo web,
              UI/UX, automatizaciones e IA generativa. Diseño y automatizo flujos de
              trabajo (ETL, pipelines y scripts) para que los procesos corran solos, y
              construyo interfaces y visualizaciones que hacen los datos fáciles de
              entender. Trabajo con entornos como VS Code, Git y GitHub para el control
              de versiones, pruebas y documentación.
            </p>
          </motion.div>
        </div>

        {/* Skills grid — offset asymmetric widths */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-card p-7 hover:bg-secondary transition-colors group"
            >
              <div className="w-11 h-11 rounded-md bg-primary text-primary-foreground flex items-center justify-center mb-5 group-hover:bg-accent transition-colors">
                <skill.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-4">{skill.title}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;