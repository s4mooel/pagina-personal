import { motion, useReducedMotion } from "framer-motion";
import { Copy, Check, Github, Linkedin, ArrowUpRight, ArrowDown, Download } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const EMAIL = "zaratesamu99@gmail.com";
const focus = ["Análisis de Datos", "Ingeniería de Datos", "Desarrollo de Software", "UI/UX", "IA Generativa", "Google Cloud"];

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const reducedMotion = useReducedMotion();
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopyError(true);
    }
  };

  return (
    <>
      <section className="relative px-6 md:px-12 pt-28 md:pt-36 pb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b hero-rule pb-4 mb-9">
            <p className="eyebrow">Portafolio personal / 2026</p>
            <p className="text-xs font-medium text-muted-foreground">Bogotá, Colombia · UTC−5</p>
          </div>
          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-8">
              <p className="text-sm font-medium text-accent mb-6">Ingeniero de Sistemas</p>
              <h1 className="hero-name font-display font-black uppercase">
                <span className="block">Samuel</span>
                <span className="block text-accent sm:pl-12">Ibañez<span className="text-foreground">.</span></span>
              </h1>
              <p className="mt-7 text-xl md:text-2xl font-medium">Desarrollador y Analista de Datos</p>
            </div>
            <aside className="lg:col-span-4 border-t-2 border-accent pt-5 pb-1">
              <h2 className="eyebrow mb-5">01 / Sobre mí</h2>
              <p className="text-base md:text-lg leading-relaxed text-muted-foreground">Soy Ingeniero de Sistemas y mi enfoque es el análisis de datos. En Banco Davivienda trabajé con dashboards y herramientas de gestión comercial. Me interesa explorar cómo los datos, el diseño UI/UX y la IA generativa pueden aportar a los proyectos que desarrollo.</p>
              <div className="mt-6 flex items-center gap-2">
                <Button asChild variant="ghost" size="icon" className="text-accent" title="GitHub"><a href="https://github.com/s4mooel" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a></Button>
                <Button asChild variant="ghost" size="icon" className="text-accent" title="LinkedIn"><a href="https://www.linkedin.com/in/s4m0l/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a></Button>
              </div>
            </aside>
          </motion.div>
          <div className="mt-10 pt-5 border-t hero-rule flex flex-wrap items-center justify-between gap-5">
            <Button asChild variant="link" className="px-0 text-foreground"><a href="#projects">Proyectos seleccionados <ArrowDown /></a></Button>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild variant="outline"><a href="/downloads/Samuel-Ibanez-HV.pdf" download="Samuel-Ibanez-HV.pdf">Descargar HV <Download /></a></Button>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90"><a href={`mailto:${EMAIL}`}>Contacto <ArrowUpRight /></a></Button>
              <Button onClick={copy} variant="outline" aria-live="polite" title="Copiar correo electrónico">{copied ? <Check /> : <Copy />}{copied ? "Correo copiado" : "Copiar email"}</Button>
            </div>
            {copyError && <p role="status" className="w-full text-sm text-muted-foreground">{EMAIL}</p>}
          </div>
        </div>
      </section>
      <div className="border-y border-accent/20 bg-accent text-accent-foreground py-4 overflow-hidden my-4" aria-label="Áreas de trabajo">
        <div className="flex w-max animate-marquee">
          {[...focus, ...focus, ...focus, ...focus].map((item, i) => (
            <span key={i} aria-hidden={i >= focus.length ? true : undefined} className="flex items-center font-display font-semibold text-lg md:text-xl whitespace-nowrap"><span className="mx-7">{item}</span><span aria-hidden className="opacity-50">/</span></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
