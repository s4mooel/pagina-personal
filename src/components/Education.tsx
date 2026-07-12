import { motion } from "framer-motion";

const experience = [
  "Mejoras integrales del CRM comercial interno: visualización de datos, rendimiento, automatización ETL y experiencia de usuario.",
  "Automaticé pipelines ETL con Google Apps Script y Python, logrando el 100% de los flujos críticos del CRM.",
  "Construí dashboards interactivos (Chart.js y Tabulator) para KPIs comerciales y análisis gerencial.",
  "Lideré el rediseño UI/UX de módulos clave: +36% usuarios activos y +292% gestiones registradas.",
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow mb-5">— Trayectoria</p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[0.95]">
            Formación y <span className="text-gradient">experiencia</span>.
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Experience — wider column (asymmetric) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="paper-card rounded-lg border border-border p-7 md:p-9 h-full">
              <div className="flex items-baseline justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Práctica Profesional</h3>
                  <p className="text-accent font-medium">Banco Davivienda</p>
                </div>
                <span className="eyebrow shrink-0">Experiencia</span>
              </div>
              <ul className="space-y-4">
                {experience.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Education — narrower column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="paper-card rounded-lg border border-border p-7 md:p-9 h-full flex flex-col">
              <span className="eyebrow mb-6">Educación</span>
              <h3 className="text-2xl font-bold leading-tight">Ingeniería de Sistemas</h3>
              <p className="text-accent font-medium mt-1">Universidad Jorge Tadeo Lozano</p>
              <p className="text-muted-foreground mt-auto pt-6 text-sm">2022 — Actualidad</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;