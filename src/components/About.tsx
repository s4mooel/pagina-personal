import { motion } from "framer-motion";
import { useState } from "react";
import { BrainCircuit, Coffee, Database, ChartNoAxesColumnIncreasing, ChartSpline, type LucideIcon } from "lucide-react";

type Tool = { name: string; slug?: string; icon?: LucideIcon };
const tools: Tool[] = [
  { name: "Python", slug: "python" }, { name: "Pandas", slug: "pandas" }, { name: "NumPy", slug: "numpy" },
  { name: "SQL", icon: Database }, { name: "BigQuery", slug: "googlebigquery" }, { name: "Google Cloud", slug: "googlecloud" },
  { name: "Power BI", icon: ChartNoAxesColumnIncreasing }, { name: "Looker Studio", icon: ChartSpline }, { name: "Excel" },
  { name: "Apps Script", slug: "googleappsscript" }, { name: "Git", slug: "git" }, { name: "GitHub", slug: "github" },
  { name: "R", slug: "r" }, { name: "Scikit-learn", slug: "scikitlearn" }, { name: "Machine Learning", icon: BrainCircuit },
  { name: "Tableau" }, { name: "Plotly", slug: "plotly" }, { name: "Streamlit", slug: "streamlit" },
  { name: "MySQL", slug: "mysql" }, { name: "PostgreSQL", slug: "postgresql" }, { name: "ETL" },
  { name: "Docker", slug: "docker" }, { name: "Postman", slug: "postman" }, { name: "JavaScript", slug: "javascript" },
  { name: "TypeScript", slug: "typescript" }, { name: "React", slug: "react" }, { name: "HTML", slug: "html5" },
  { name: "CSS", slug: "css" }, { name: "Java", icon: Coffee } ];

const ToolTile = ({ tool, i }: { tool: Tool; i: number }) => {
  const [failed, setFailed] = useState(!tool.slug);
  const ToolIcon = tool.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: i * 0.04 }}
      whileHover={{ y: -4, rotate: -2 }}
      className="flex flex-col items-center gap-3"
    >
      <div className="w-20 h-20 rounded-2xl bg-card border-2 border-primary shadow-[4px_4px_0_hsl(var(--primary))] flex items-center justify-center transition-colors hover:bg-accent/10">
        {ToolIcon ? <ToolIcon className="w-8 h-8 text-foreground" aria-hidden="true" /> : failed ? (
          <span className="font-display font-black text-lg">{tool.name.slice(0, 2).toUpperCase()}</span>
        ) : (
          <img src={`https://cdn.simpleicons.org/${tool.slug}/141414`} alt="" className="w-8 h-8" loading="lazy" onError={() => setFailed(true)} />
        )}
      </div>
      <span className="text-sm font-semibold text-center">{tool.name}</span>
    </motion.div>
  );
};

const About = () => (
  <section id="about" className="py-24 px-6 md:px-12">
    <div className="container mx-auto max-w-6xl">
      <p className="eyebrow mb-5">— Sobre mí</p>
      <div className="grid lg:grid-cols-12 gap-10 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="lg:col-span-6 break-words text-4xl sm:text-5xl md:text-7xl font-black uppercase font-condensed leading-[0.9]"
        >
          Datos, código e <span className="text-accent">innovación</span>.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="lg:col-span-6 text-lg md:text-xl text-muted-foreground leading-relaxed self-end"
        >
          Ingeniero de Sistemas con enfoque en análisis e ingeniería de datos y desarrollo de software.
          He trabajado con Python, SQL, BigQuery y Google Cloud en el sector financiero, creando
          dashboards y mejorando procesos corporativos. También me interesan el diseño UI/UX,
          la automatización y la aplicación de IA generativa.
        </motion.p>
      </div>

      <p className="eyebrow mb-5">— Herramientas</p>
      <h3 className="text-3xl md:text-4xl font-bold mb-12">
        Mis <span className="text-accent">herramientas</span>
      </h3>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
        {tools.map((t, i) => <ToolTile key={t.name} tool={t} i={i} />)}
      </div>
    </div>
  </section>
);

export default About;
