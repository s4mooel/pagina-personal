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
        {/* Asymmetric grid: big type left, photo right */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="eyebrow mb-6"
            >
              — Bienvenido
            </motion.p>


            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold leading-[0.92] text-[10vw] sm:text-[8vw] lg:text-[6.5rem]"
            >
              Samuel
              <br />
              <span className="text-gradient not-italic">Ibañez</span>
            </motion.h1>



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

          {/* Right column for Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full bg-secondary/50 border border-border overflow-hidden flex items-center justify-center">
              {/* Image Placeholder - replace src with your actual photo */}
              <img 
                src="/samuel.jpg" 
                alt="Samuel Ibañez" 
                className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom section: Enfoque and Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-8 hairline flex flex-col md:flex-row justify-between gap-8"
        >
          <div>
            <p className="eyebrow mb-4">Enfoque</p>
            <ul className="flex flex-wrap gap-4 md:gap-6">
              {roles.map((role) => (
                <li key={role} className="text-base font-medium flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                  {role}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-5 items-end">
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


    </section>
  );
};

export default Hero;