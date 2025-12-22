import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-secondary/50">
      <button
        onClick={() => setLanguage("uk")}
        className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-300 ${
          language === "uk" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {language === "uk" && (
          <motion.div
            layoutId="lang-indicator"
            className="absolute inset-0 bg-primary rounded-md"
            transition={{ type: "spring", duration: 0.4 }}
          />
        )}
        <span className="relative z-10">UA</span>
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-300 ${
          language === "en" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {language === "en" && (
          <motion.div
            layoutId="lang-indicator"
            className="absolute inset-0 bg-primary rounded-md"
            transition={{ type: "spring", duration: 0.4 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
