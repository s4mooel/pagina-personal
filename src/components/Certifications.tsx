import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Cert = {
  name: string;
  issuer: string;
  logo: string; // simpleicons monochrome CDN
  url: string; // verification link
};

const certifications: Cert[] = [
  {
    name: "Google Data Analytics",
    issuer: "Google · Coursera",
    logo: "https://cdn.simpleicons.org/google/1a1a1a",
    url: "https://www.coursera.org/account/accomplishments/professional-cert/CSWHD4CP0JCW",
  },
  {
    name: "Google Cloud Computing Foundations",
    issuer: "Google Cloud · Credly",
    logo: "https://cdn.simpleicons.org/googlecloud/1a1a1a",
    url: "https://www.credly.com/badges/ad3c8976-f758-4ebe-a377-4661cd60ef2f",
  },
  {
    name: "Prompt Engineering",
    issuer: "Platzi",
    logo: "https://cdn.simpleicons.org/platzi/1a1a1a",
    url: "https://platzi.com/p/samuel.ibanez/curso/12323-prompt-engineering/diploma/detalle/",
  },
  {
    name: "Frontend Developer",
    issuer: "Platzi",
    logo: "https://cdn.simpleicons.org/platzi/1a1a1a",
    url: "https://platzi.com/p/samuel.ibanez/curso/12681-frontend-developer-js/diploma/detalle/",
  },
  {
    name: "Fundamentos de Machine Learning",
    issuer: "Platzi",
    logo: "https://cdn.simpleicons.org/platzi/1a1a1a",
    url: "https://platzi.com/p/samuel.ibanez/curso/12138-machine-learning/diploma/detalle/",
  },
  {
    name: "Profesional de DevOps",
    issuer: "Platzi",
    logo: "https://cdn.simpleicons.org/platzi/1a1a1a",
    url: "#",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 bg-secondary/40">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="eyebrow mb-5">— Certificaciones</p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-[0.95]">
            Formación <span className="text-gradient">continua</span>.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, index) => {
            const hasLink = cert.url !== "#";
            return (
              <motion.a
                key={cert.name}
                href={cert.url}
                target={hasLink ? "_blank" : undefined}
                rel={hasLink ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="group paper-card rounded-lg border border-border p-6 flex items-start gap-4 hover:border-foreground transition-colors"
              >
                <div className="w-12 h-12 rounded-md bg-secondary border border-border flex items-center justify-center shrink-0">
                  <img src={cert.logo} alt={`${cert.issuer} logo`} className="w-6 h-6" loading="lazy" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold leading-snug">{cert.name}</h3>
                    <span className="text-xs font-semibold text-muted-foreground group-hover:text-accent inline-flex items-center gap-0.5 shrink-0 transition-colors">
                      Ver <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;