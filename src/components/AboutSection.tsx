import { motion } from "framer-motion";
import { Brain, Code, Lightbulb, Zap } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "AI Projects", value: "30+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Lines of Code", value: "100K+" },
];

const highlights = [
  { icon: Brain, title: "Machine Learning", description: "Deep expertise in neural networks and predictive models" },
  { icon: Code, title: "Full Stack AI", description: "End-to-end AI solutions from concept to deployment" },
  { icon: Lightbulb, title: "Innovation", description: "Pioneering novel approaches to complex problems" },
  { icon: Zap, title: "Performance", description: "Optimized solutions for real-time AI applications" },
];

const AboutSection = () => {
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm an AI Solutions Architect passionate about pushing the boundaries of what's possible with artificial intelligence. With a deep understanding of machine learning, natural language processing, and computer vision, I create intelligent systems that solve real-world problems.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My approach combines cutting-edge research with practical implementation, ensuring that every solution is not just innovative but also scalable and production-ready.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
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
