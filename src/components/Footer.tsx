import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-8 border-t border-border/50"
    >
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI.dev. {t.footer.rights}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            {t.footer.madeWith} <Heart className="w-4 h-4 text-primary fill-primary" /> {t.footer.and}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
