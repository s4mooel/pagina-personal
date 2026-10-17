import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import weatherProject from "@/assets/weather-app-screenshot.png";
import weather1 from "@/assets/weather-1.png";
import weather2 from "@/assets/weather-2.png";
import pulse1 from "@/assets/pulse1.png";
import pulse2 from "@/assets/pulse2.png";
import pulse3 from "@/assets/pulse3.png";
import pulse4 from "@/assets/pulse4.png";
import pulse5 from "@/assets/pulse5.png";
import pulse6 from "@/assets/pulse6.png";
import pulse7 from "@/assets/pulse7.png";
import spotify1 from "@/assets/spotify1.png";
import spotify2 from "@/assets/spotify2.png";
import spotify3 from "@/assets/spotify3.png";
import spotify4 from "@/assets/spotify4.png";
import spotify5 from "@/assets/spotify5.png";

type Project = {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  github: string;
};

const projects: Project[] = [
  {
    title: "Spotify Analytics & AI",
    description:
      "Dashboard interactivo que analiza más de 6,000 canciones de Spotify, comparando géneros musicales y prediciendo popularidad con Machine Learning. Incluye un motor de recomendación (K-Nearest Neighbors con distancia coseno) y un predictor de popularidad basado en Random Forest.",
    images: [spotify1, spotify2, spotify3, spotify4, spotify5],
    tech: [
      "Python",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Plotly",
      "Scikit-learn",
      "Random Forest",
      "KNN",
      "Machine Learning",
    ],
    github: "https://github.com/s4mooel/spotify-data-analysis",
  },
  {
    title: "Pulse Commerce",
    description:
      "Sistema operativo para el comercio moderno. Plataforma integral (API-first) para gestionar pedidos, inventario y clientes. El proyecto incluye su propio sistema de diseño (tokens, UI kits) y una aplicación funcional en Next.js.",
    images: [pulse1, pulse2, pulse3, pulse4, pulse5, pulse6, pulse7],
    tech: ["Next.js 14", "Tailwind CSS", "React", "TypeScript", "Design System"],
    github: "https://github.com/s4mooel/pulse-commerce",
  },
  {
    title: "Weather Report App",
    description:
      "Aplicación web moderna que muestra el clima actual y el pronóstico de los próximos días, desarrollada con HTML, CSS y JavaScript usando la API de OpenWeatherMap.",
    images: [weatherProject, weather1, weather2],
    tech: ["JavaScript", "HTML", "CSS", "OpenWeather API"],
    github: "https://github.com/s4mooel/proyecto-weather-report",
  },
];

const ProjectCarousel = ({ images, title }: { images: string[]; title: string }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selected, setSelected] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  const multiple = images.length > 1;

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-md border border-border bg-secondary" ref={emblaRef}>
        <div className="flex">
          {images.map((src, i) => (
            <div key={i} className="flex-[0_0_100%] min-w-0">
              <img
                src={src}
                alt={`${title} — captura ${i + 1}`}
                className="w-full aspect-[16/10] object-contain bg-background/50"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {multiple && (
        <>
          <button
            onClick={scrollPrev}
            aria-label="Anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={scrollNext}
            aria-label="Siguiente"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/90 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Ir a la imagen ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === selected ? "w-5 bg-accent" : "w-1.5 bg-foreground/30"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Projects = () => {
  const [open, setOpen] = useState<Project | null>(null);
  return (
    <section id="projects" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-5xl md:text-7xl font-black uppercase font-condensed leading-[0.9] mb-14"
        >
          Mis <span className="text-accent">proyectos</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.button
              key={project.title}
              onClick={() => setOpen(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group text-left focus-visible:outline-none"
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary bg-card shadow-[6px_6px_0_hsl(var(--primary))] group-hover:shadow-[10px_10px_0_hsl(var(--accent))] group-hover:-translate-x-1 group-hover:-translate-y-1 group-focus-visible:shadow-[10px_10px_0_hsl(var(--accent))] transition-all duration-300">
                <img src={project.images[0]} alt={project.title} className="w-full aspect-[4/3] object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                <span className="absolute top-3 left-3 bg-ink text-xs font-semibold px-3 py-1 rounded-full">
                  {project.images.length} capturas
                </span>
                <span className="absolute bottom-3 right-3 w-11 h-11 rounded-full bg-accent text-accent-foreground flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold">{project.title}</h3>
              <p className="mt-2 text-sm font-semibold text-accent">
                {project.tech.slice(0, 4).map((t) => `[${t}]`).join("  ")}
              </p>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border-2 border-primary">
          {open && (
            <div className="space-y-6">
              <ProjectCarousel images={open.images} title={open.title} />
              <DialogTitle className="text-3xl font-bold">{open.title}</DialogTitle>
              <DialogDescription className="text-base leading-relaxed">{open.description}</DialogDescription>
              <div className="flex flex-wrap gap-2">
                {open.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-semibold rounded-full border border-primary">{t}</span>
                ))}
              </div>
              <a href={open.github} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent transition-colors">
                Ver en GitHub <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
