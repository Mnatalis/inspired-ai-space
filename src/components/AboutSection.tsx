import { motion } from "framer-motion";
import { Brain, Code, Lightbulb, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const stats = [
  { key: "experience", value: "5+" },
  { key: "projects", value: "30+" },
  { key: "clients", value: "50+" },
  { key: "code", value: "100K+" },
] as const;

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Brain, ...t.about.highlights.ml },
    { icon: Code, ...t.about.highlights.fullstack },
    { icon: Lightbulb, ...t.about.highlights.innovation },
    { icon: Zap, ...t.about.highlights.performance },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - About text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.about.title} <span className="text-gradient">{t.about.titleHighlight}</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {t.about.description2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {t.about.stats[stat.key]}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right column - Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="glass rounded-xl p-6 group hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
