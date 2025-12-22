import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, Image, MessageSquare, LineChart, Shield, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Neural Vision Pro",
    description: "Advanced computer vision system for real-time object detection and scene understanding using custom-trained CNNs.",
    icon: Image,
    tags: ["Computer Vision", "PyTorch", "YOLO"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "ConvoAI Assistant",
    description: "Enterprise-grade conversational AI platform with multi-turn dialogue, context retention, and sentiment analysis.",
    icon: MessageSquare,
    tags: ["NLP", "Transformers", "RAG"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Predictive Analytics Engine",
    description: "ML-powered forecasting system for business intelligence with automated feature engineering and model selection.",
    icon: LineChart,
    tags: ["ML", "Time Series", "AutoML"],
    gradient: "from-primary/20 to-[hsl(172_66%_50%/0.2)]",
  },
  {
    title: "AI Fraud Detection",
    description: "Real-time anomaly detection system processing millions of transactions with 99.9% accuracy.",
    icon: Shield,
    tags: ["Anomaly Detection", "Streaming", "XGBoost"],
    gradient: "from-[hsl(172_66%_50%/0.2)] to-primary/20",
  },
  {
    title: "Autonomous Agent Framework",
    description: "Multi-agent system for complex task automation with planning, reasoning, and tool-use capabilities.",
    icon: Bot,
    tags: ["LLM Agents", "LangChain", "Planning"],
    gradient: "from-accent/20 to-[hsl(172_66%_50%/0.2)]",
  },
  {
    title: "Edge AI Optimizer",
    description: "Model compression and optimization toolkit for deploying AI on resource-constrained edge devices.",
    icon: Cpu,
    tags: ["Edge AI", "Quantization", "TensorRT"],
    gradient: "from-primary/20 to-accent/20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Обрані <span className="text-gradient">Проекти</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of AI solutions that push the boundaries of what's possible
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full flex flex-col hover:border-primary/30 transition-all duration-500 relative overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:glow-primary transition-all duration-300">
                    <project.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-5 flex-grow">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-secondary/80 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <Button variant="ghost" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                    <Button variant="ghost" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
