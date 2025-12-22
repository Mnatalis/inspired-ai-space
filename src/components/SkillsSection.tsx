import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const skillCategories = [
  {
    key: "ml" as const,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Keras", "JAX"],
  },
  {
    key: "ai" as const,
    skills: ["LangChain", "Hugging Face", "OpenAI API", "Anthropic", "LlamaIndex", "AutoGen"],
  },
  {
    key: "tools" as const,
    skills: ["Python", "TypeScript", "SQL", "Docker", "Kubernetes", "Git"],
  },
  {
    key: "cloud" as const,
    skills: ["AWS", "GCP", "Azure ML", "MLflow", "Weights & Biases", "Kubeflow"],
  },
];

const technologies = [
  { name: "Python", level: 95 },
  { name: "Machine Learning", level: 92 },
  { name: "Deep Learning", level: 88 },
  { name: "NLP", level: 90 },
  { name: "Computer Vision", level: 85 },
  { name: "MLOps", level: 82 },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-32 relative">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t.skills.title} <span className="text-gradient">{t.skills.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.skills.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{tech.name}</span>
                  <span className="text-muted-foreground">{tech.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.level}%` }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-[hsl(172_66%_50%)] rounded-full glow-primary"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Skill categories */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold mb-4 text-gradient">
                  {t.skills.categories[category.key]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-lg bg-secondary/60 text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
