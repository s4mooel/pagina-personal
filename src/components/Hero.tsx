import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDownRight } from "lucide-react";

const roles = [
  "Analista de Datos",
  "Desarrollo Web",
  "UI / UX",
  "Automatizaciones",
  "IA Generativa",
];

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-16 overflow-hidden">
      <div className="container mx-auto max-w-6xl w-full">
        {/* Asymmetric grid: big type left, meta column right */}
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-6"
            >
              — Portafolio · 2025
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold leading-[0.92] text-[15vw] sm:text-[12vw] lg:text-[8.5rem]"
            >
              Samuel
              <br />
              <span className="text-gradient not-italic">Ibañez</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 max-w-xl text-lg md:text-xl text-muted-foreground"
            >
              Ingeniero de Sistemas construyendo cosas útiles entre los datos,
              el código y el diseño.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent transition-colors"
              >
                Ver proyectos
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold border border-foreground/20 hover:border-foreground transition-colors"
              >
                Contacto
              </button>
            </motion.div>
          </div>

          {/* Right meta column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4 lg:pb-6 space-y-6"
          >
            <div className="hairline pt-5">
              <p className="eyebrow mb-3">Enfoque</p>
              <ul className="space-y-1.5">
                {roles.map((role) => (
                  <li key={role} className="text-base font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {role}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hairline pt-5 flex gap-5">
              <a href="https://github.com/s4mooel" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/s4m0l/" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:zaratesamu99@gmail.com" className="text-foreground/70 hover:text-accent transition-colors" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Roles marquee */}
      <div className="mt-16 lg:mt-24 border-y border-border overflow-hidden py-4 -mx-6 md:-mx-12">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center shrink-0">
              {roles.map((role) => (
                <span key={role + i} className="mx-8 font-display text-2xl md:text-3xl font-bold text-foreground/25">
                  {role} <span className="text-accent">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;