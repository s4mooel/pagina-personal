import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "education", label: "Trayectoria" },
  { id: "certifications", label: "Certificaciones" },
  { id: "contact", label: "Contacto" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors ${
        scrolled ? "bg-background/85 backdrop-blur border-b border-border" : ""
      }`}
    >
      <nav className="container mx-auto max-w-6xl px-6 md:px-12 h-16 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display text-xl font-extrabold tracking-tight"
        >
          s4m0l<span className="text-accent">.</span>
        </button>
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;