import { motion } from "framer-motion";
import { Copy, Check, Github, Linkedin, Zap, ArrowDownRight } from "lucide-react";
import { useState } from "react";

const EMAIL = "zaratesamu99@gmail.com";
const focus = ["Análisis de Datos", "Machine Learning", "UI/UX", "IA Generativa", "Automatización", "Google Cloud"];

const line = {
  hidden: { y: "105%" },
  show: (i: number) => ({ y: 0, transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] } }),
};

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  const words = [
    { t: "DATOS", c: "text-accent" },
    { t: "QUE", c: "" },
    { t: "CUENTAN", c: "" },
    { t: "HISTORIAS", c: "text-accent" },
  ];

  return (
    <>
      <section className="relative px-6 md:px-12 pt-32 md:pt-40 pb-16">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow mb-6">Samuel Ibañez — Bogotá, CO</p>
            <h1 className="font-display font-black uppercase leading-[0.86] tracking-tight text-[15vw] sm:text-[11vw] lg:text-[7.5rem] font-condensed">
              {words.map((w, i) => (
                <span key={w.t} className="block overflow-hidden">
                  <motion.span custom={i} variants={line} initial="hidden" animate="show" className={`block ${w.c} ${i === 2 ? "pl-[12%]" : ""}`}>
                    {w.t}
                  </motion.span>
                </span>
              ))}
            </h1>
          </div>

          {/* Profile card */}
          <motion.aside
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ rotate: 0 }}
            className="lg:col-span-5 w-full max-w-md lg:ml-auto"
          >
            <div className="bg-accent rounded-[1.75rem] pb-10 relative">
              <div className="bg-ink rounded-[1.75rem] p-6 md:p-7">
                <p className="text-sm text-ink-muted">Ingeniero de Sistemas</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground font-display font-black text-xl flex items-center justify-center">SI</div>
                  <div>
                    <p className="font-display text-2xl font-bold">Samuel Ibañez</p>
                    <p className="text-sm text-ink-muted flex items-center gap-2">
                      <span className="relative flex w-2 h-2">
                        <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                        <span className="relative w-2 h-2 rounded-full bg-accent" />
                      </span>
                      Disponible para nuevos retos
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <a href={`mailto:${EMAIL}`} className="h-11 rounded-xl bg-[hsl(var(--ink-foreground)/0.12)] hover:bg-[hsl(var(--ink-foreground)/0.2)] text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                    Hablemos <ArrowDownRight className="w-4 h-4" />
                  </a>
                  <button onClick={copy} className="h-11 rounded-xl border border-ink hover:bg-[hsl(var(--ink-foreground)/0.08)] text-sm font-semibold flex items-center justify-center gap-2 transition-colors" aria-live="polite">
                    {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
                    {copied ? "¡Copiado!" : "Copiar email"}
                  </button>
                </div>
              </div>
              <p className="absolute bottom-2.5 inset-x-0 text-center text-sm font-semibold text-accent-foreground flex items-center justify-center gap-1.5">
                <Zap className="w-4 h-4" /> Enfocado en datos con impacto
              </p>
            </div>
          </motion.aside>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="container mx-auto max-w-6xl mt-14 grid md:grid-cols-12 gap-6"
        >
          <span className="md:col-span-1 font-display text-6xl font-black text-accent leading-none">“</span>
          <p className="md:col-span-7 text-lg md:text-xl leading-relaxed">
            Convierto datos dispersos en decisiones claras: dashboards, modelos de Machine Learning y
            automatizaciones que se sienten tan bien como funcionan.
          </p>
          <div className="md:col-span-4 flex md:justify-end items-start gap-3">
            <a href="https://github.com/s4mooel" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors"><Github className="w-5 h-5" /></a>
            <a href="https://www.linkedin.com/in/s4m0l/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-11 h-11 rounded-xl bg-primary text-primary-foreground flex items-center justify-center hover:bg-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
          </div>
        </motion.div>
      </section>

      {/* Marquee band */}
      <div className="bg-accent text-accent-foreground py-5 overflow-hidden -rotate-1 my-6 border-y-2 border-primary">
        <div className="flex w-max animate-marquee">
          {[...focus, ...focus, ...focus, ...focus].map((f, i) => (
            <span key={i} className="flex items-center font-display font-bold text-2xl md:text-3xl uppercase whitespace-nowrap">
              <span className="mx-8">{f}</span>
              <span aria-hidden>✱</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
