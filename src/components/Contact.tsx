import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const contactLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "s4m0l",
    href: "https://www.linkedin.com/in/s4m0l/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@s4mooel",
    href: "https://github.com/s4mooel",
  },
  {
    icon: Mail,
    label: "Email",
    value: "zaratesamu99@gmail.com",
    href: "mailto:zaratesamu99@gmail.com",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+57 321 278 3040",
    href: "tel:+573212783040",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-gradient">Contacto</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center gap-4 p-6 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow group"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <link.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-center">
                  <p className="font-semibold text-lg">{link.label}</p>
                  <p className="text-sm text-muted-foreground">{link.value}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
