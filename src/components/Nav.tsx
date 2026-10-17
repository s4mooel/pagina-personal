import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";

const left = [
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
];
const right = [
  { id: "education", label: "Trayectoria" },
  { id: "certifications", label: "Certificados" },
];

const Nav = () => {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = [...left, ...right, { id: "contact" }].map((l) => l.id);
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const Item = ({ id, label }: { id: string; label: string }) => (
    <button
      onClick={() => go(id)}
      className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
        active === id ? "text-accent" : "text-ink-muted hover:text-[hsl(var(--ink-foreground))]"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <div className="mx-auto max-w-6xl flex items-center gap-3">
        <nav className="bg-ink flex-1 h-14 rounded-full shadow-lg flex items-center justify-between md:justify-center px-3 md:px-6">
          <div className="hidden md:flex flex-1 justify-end gap-1">
            {left.map((l) => <Item key={l.id} {...l} />)}
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Inicio"
            className="mx-6 w-10 h-10 rounded-full bg-accent text-accent-foreground font-display font-black text-sm flex items-center justify-center hover:rotate-12 transition-transform"
          >
            S/I
          </button>
          <div className="hidden md:flex flex-1 gap-1">
            {right.map((l) => <Item key={l.id} {...l} />)}
          </div>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menú">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
        <button
          onClick={() => go("contact")}
          aria-label="Contacto"
          className="w-14 h-14 shrink-0 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        >
          <Mail className="w-5 h-5" />
        </button>
      </div>
      {open && (
        <div className="md:hidden mx-auto max-w-6xl mt-2 bg-ink rounded-3xl p-3 flex flex-col">
          {[...left, ...right].map((l) => <Item key={l.id} {...l} />)}
        </div>
      )}
    </header>
  );
};

export default Nav;
