import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const contactLinks = [
  { icon: Linkedin, label: "LinkedIn", value: "in/s4m0l", href: "https://www.linkedin.com/in/s4m0l/" },
  { icon: Github, label: "GitHub", value: "@s4mooel", href: "https://github.com/s4mooel" },
  { icon: Mail, label: "Email", value: "zaratesamu99@gmail.com", href: "mailto:zaratesamu99@gmail.com" },
];

const field = "w-full rounded-xl border-2 border-primary bg-card px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contacto portafolio — ${form.name.trim()}`);
    const body = encodeURIComponent(`${form.message.trim()}\n\n${form.name.trim()} · ${form.email.trim()}`);
    window.location.href = `mailto:zaratesamu99@gmail.com?subject=${subject}&body=${body}`;
  };
  return (
    <section id="contact" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <p className="eyebrow mb-5">— Contacto</p>
            <h2 className="break-words text-4xl sm:text-5xl md:text-8xl font-black uppercase font-condensed leading-[0.88]">
              Hablemos de<br /><span className="text-gradient">tu idea</span>.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 w-full divide-y divide-border border-y border-border"
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 px-1 py-4 hover:px-3 transition-all"
              >
                <div className="flex items-center gap-4">
                  <link.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  <div>
                    <p className="font-semibold">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.value}</p>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            ))}
          </motion.div>
        </div>
        <form onSubmit={send} className="mt-16 grid md:grid-cols-2 gap-4 max-w-3xl">
          <label className="sr-only" htmlFor="c-name">Nombre</label>
          <input id="c-name" required maxLength={100} placeholder="Tu nombre" className={field}
            value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
          <label className="sr-only" htmlFor="c-email">Email</label>
          <input id="c-email" type="email" required maxLength={255} placeholder="Tu email" className={field}
            value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <label className="sr-only" htmlFor="c-msg">Mensaje</label>
          <textarea id="c-msg" required maxLength={1000} rows={5} placeholder="Cuéntame en qué puedo ayudarte" className={`${field} md:col-span-2`}
            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <Button type="submit" className="md:col-span-2 justify-self-start rounded-full px-8">Enviar mensaje</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;