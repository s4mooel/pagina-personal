import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { GraduationCap, Award, Calendar } from "lucide-react";

const certifications = [
  {
    name: "Google Data Analytics",
    issuer: "Google",
  },
  {
    name: "Fundamentos de la Ciberseguridad",
    issuer: "Google",
  },
  {
    name: "Scrum Fundamentals Certified (SFC™)",
    issuer: "SCRUMstudy",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-20 px-6">
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
              Formación <span className="text-gradient">Académica</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mi trayectoria educativa y certificaciones profesionales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient border-border/50 p-8 h-full hover:border-primary/50 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <GraduationCap className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Educación</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-secondary/50">
                      <h4 className="text-lg font-semibold">Ingeniería de Sistemas</h4>
                      <p className="text-primary font-medium">Universidad Jorge Tadeo Lozano</p>
                      <div className="flex items-center gap-2 mt-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>2022 - Actualidad</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Certifications Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient border-border/50 p-8 h-full hover:border-primary/50 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Award className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold">Certificaciones</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {certifications.map((cert, index) => (
                      <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <h4 className="font-semibold">{cert.name}</h4>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
