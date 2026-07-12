import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from "lucide-react";

const contactLinks = [
  { icon: Linkedin, label: "LinkedIn", value: "in/s4m0l", href: "https://www.linkedin.com/in/s4m0l/" },
  { icon: Github, label: "GitHub", value: "@s4mooel", href: "https://github.com/s4mooel" },
  { icon: Mail, label: "Email", value: "zaratesamu99@gmail.com", href: "mailto:zaratesamu99@gmail.com" },
  { icon: Phone, label: "Teléfono", value: "+57 321 278 3040", href: "tel:+573212783040" },
];

const Contact = () => {
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
            <h2 className="text-4xl md:text-7xl font-extrabold leading-[0.92]">
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
                className="group flex items-center justify-between gap-4 py-4 hover:px-2 transition-all"
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
      </div>
    </section>
  );
};

export default Contact;