import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
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

type Project = {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  github: string;
};

const projects: Project[] = [
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
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-secondary/40">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow mb-5">— Trabajo seleccionado</p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[0.95]">
            Proyectos <span className="text-gradient">destacados</span>.
          </h2>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center paper-card rounded-lg border border-border p-5 md:p-8"
            >
              <div className="lg:col-span-7">
                <ProjectCarousel images={project.images} title={project.title} />
              </div>

              <div className="lg:col-span-5 space-y-5">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-accent transition-colors"
                >
                  Ver en GitHub
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;