import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDownRight } from "lucide-react";
import { useEffect, useState, useRef, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*!?<>{}[]";

const ScrambleText = ({ text, className }: { text: string; className?: string }) => {
  const [display, setDisplay] = useState(text);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (i < iteration) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );
      iteration += 1 / 5;
      if (iteration >= text.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setDisplay(text);
      }
    }, 50);
  }, [text]);

  useEffect(() => {
    scramble();
    const loop = setInterval(scramble, 8000);
    return () => {
      clearInterval(loop);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [scramble]);

  return <span className={className}>{display}</span>;
};

const roles = [
  "Ingeniero de Sistemas",
  "Analista de Datos",
  "Desarrollo Web",
  "GCP",
  "IA Generativa",
  "Automatización",
  "Visualización de Datos",
  "Bogotá, Colombia"
];

const Hero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 1000], [0, 200]);
  const yImage = useTransform(scrollY, [0, 1000], [0, -150]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-28 pb-16 overflow-hidden">
      <div className="container mx-auto max-w-6xl w-full">
        {/* Asymmetric grid: big type left, photo right */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div className="lg:col-span-7" style={{ y: yText }}>
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
              <ScrambleText text="Ibañez" className="text-gradient not-italic inline-block mt-2" />
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
          </motion.div>

          {/* Right column for Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ y: yImage }}
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

        {/* Bottom section: Roles and Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 pt-8 hairline flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8"
        >
          <div className="flex-1">
            <ul className="flex flex-wrap items-center gap-y-2 text-base font-medium text-foreground/80">
              {roles.map((role, i) => (
                <li key={role} className="flex items-center">
                  {role}
                  {i < roles.length - 1 && <span className="mx-3 text-accent font-bold">|</span>}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-5 items-center shrink-0">
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