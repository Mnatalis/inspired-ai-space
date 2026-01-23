export type Language = "en" | "uk";

export const translations = {
  en: {
    // Navbar
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
      hireMe: "Hire Me",
    },
    // Hero
    hero: {
      badge: "AI Solutions Architect",
      title: "Building the Future with",
      titleHighlight: "Intelligent AI",
      subtitle: "Crafting innovative AI solutions that transform ideas into reality. From machine learning to neural networks, bringing intelligence to life.",
      cta: "Explore My Work",
      ctaSecondary: "Get in Touch",
      scroll: "Scroll to explore",
    },
    // About
    about: {
      title: "About",
      titleHighlight: "Me",
      description1: "I'm an AI Solutions Architect passionate about pushing the boundaries of what's possible with artificial intelligence. With a deep understanding of machine learning, natural language processing, and computer vision, I create intelligent systems that solve real-world problems.",
      description2: "My approach combines cutting-edge research with practical implementation, ensuring that every solution is not just innovative but also scalable and production-ready.",
      stats: {
        experience: "Years Experience",
        projects: "AI Projects",
        clients: "Happy Clients",
        code: "Lines of Code",
      },
      highlights: {
        ml: { title: "Machine Learning", description: "Deep expertise in neural networks and predictive models" },
        fullstack: { title: "Full Stack AI", description: "End-to-end AI solutions from concept to deployment" },
        innovation: { title: "Innovation", description: "Pioneering novel approaches to complex problems" },
        performance: { title: "Performance", description: "Optimized solutions for real-time AI applications" },
      },
    },
    // Projects
    projects: {
      title: "Featured",
      titleHighlight: "Projects",
      subtitle: "A showcase of AI solutions that push the boundaries of what's possible",
      items: [
        {
          title: "Neural Vision Pro",
          description: "Advanced computer vision system for real-time object detection and scene understanding using custom-trained CNNs.",
        },
        {
          title: "ConvoAI Assistant",
          description: "Enterprise-grade conversational AI platform with multi-turn dialogue, context retention, and sentiment analysis.",
        },
        {
          title: "Predictive Analytics Engine",
          description: "ML-powered forecasting system for business intelligence with automated feature engineering and model selection.",
        },
        {
          title: "AI Fraud Detection",
          description: "Real-time anomaly detection system processing millions of transactions with 99.9% accuracy.",
        },
        {
          title: "Autonomous Agent Framework",
          description: "Multi-agent system for complex task automation with planning, reasoning, and tool-use capabilities.",
        },
        {
          title: "Edge AI Optimizer",
          description: "Model compression and optimization toolkit for deploying AI on resource-constrained edge devices.",
        },
      ],
      code: "Code",
      demo: "Demo",
    },
    // Skills
    skills: {
      title: "Skills &",
      titleHighlight: "Technologies",
      subtitle: "The tools and technologies I use to bring AI solutions to life",
      categories: {
        ml: "Machine Learning",
        ai: "AI Frameworks",
        tools: "Languages & Tools",
        cloud: "Cloud & MLOps",
      },
    },
    // Contact
    contact: {
      title: "Let's",
      titleHighlight: "Connect",
      subtitle: "Have a project in mind? Let's discuss how AI can transform your ideas into reality.",
      getInTouch: "Get in Touch",
      description: "I'm always excited to discuss new AI projects, innovative ideas, or opportunities to collaborate. Feel free to reach out!",
      email: "Email",
      location: "Location",
      locationValue: "San Francisco, CA",
      social: "Connect with me",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Tell me about your project...",
        submit: "Send Message",
      success: "Message sent successfully! I'll get back to you soon.",
    },
    veteransBanner: "AI for Veterans, IDPs, and Families of Defenders - Online AI Course",
  },
    // Footer
    footer: {
      rights: "All rights reserved.",
      madeWith: "Made with",
      and: "and AI",
    },
  },
  uk: {
    // Navbar
    nav: {
      about: "Про мене",
      projects: "Проекти",
      skills: "Навички",
      contact: "Контакти",
      hireMe: "Найняти",
    },
    // Hero
    hero: {
      badge: "Архітектор AI-рішень",
      title: "Будую майбутнє з",
      titleHighlight: "Інтелектуальним AI",
      subtitle: "Створюю інноваційні AI-рішення, що перетворюють ідеї на реальність. Від машинного навчання до нейронних мереж — оживляю інтелект.",
      cta: "Переглянути роботи",
      ctaSecondary: "Зв'язатися",
      scroll: "Прокрутіть для перегляду",
    },
    // About
    about: {
      title: "Про",
      titleHighlight: "Мене",
      description1: "Я архітектор AI-рішень, який прагне розширити межі можливого у сфері штучного інтелекту. Глибоке розуміння машинного навчання, обробки природної мови та комп'ютерного зору дозволяє мені створювати інтелектуальні системи для вирішення реальних проблем.",
      description2: "Мій підхід поєднує передові дослідження з практичною реалізацією, гарантуючи, що кожне рішення є не лише інноваційним, а й масштабованим та готовим до впровадження.",
      stats: {
        experience: "Років досвіду",
        projects: "AI проектів",
        clients: "Задоволених клієнтів",
        code: "Рядків коду",
      },
      highlights: {
        ml: { title: "Машинне навчання", description: "Глибока експертиза в нейронних мережах та прогнозних моделях" },
        fullstack: { title: "Full Stack AI", description: "Комплексні AI-рішення від концепції до впровадження" },
        innovation: { title: "Інновації", description: "Новаторські підходи до складних проблем" },
        performance: { title: "Продуктивність", description: "Оптимізовані рішення для AI в реальному часі" },
      },
    },
    // Projects
    projects: {
      title: "Обрані",
      titleHighlight: "Проекти",
      subtitle: "Демонстрація AI-рішень, що розширюють межі можливого",
      items: [
        {
          title: "Neural Vision Pro",
          description: "Передова система комп'ютерного зору для виявлення об'єктів у реальному часі з використанням власних CNN.",
        },
        {
          title: "ConvoAI Assistant",
          description: "Корпоративна платформа розмовного AI з багатоетапним діалогом, збереженням контексту та аналізом настроїв.",
        },
        {
          title: "Predictive Analytics Engine",
          description: "ML-система прогнозування для бізнес-аналітики з автоматичним підбором ознак та моделей.",
        },
        {
          title: "AI Fraud Detection",
          description: "Система виявлення аномалій у реальному часі, що обробляє мільйони транзакцій з точністю 99.9%.",
        },
        {
          title: "Autonomous Agent Framework",
          description: "Мультиагентна система для автоматизації складних завдань з плануванням та використанням інструментів.",
        },
        {
          title: "Edge AI Optimizer",
          description: "Інструментарій оптимізації моделей для розгортання AI на пристроях з обмеженими ресурсами.",
        },
      ],
      code: "Код",
      demo: "Демо",
    },
    // Skills
    skills: {
      title: "Навички та",
      titleHighlight: "Технології",
      subtitle: "Інструменти та технології, які я використовую для створення AI-рішень",
      categories: {
        ml: "Машинне навчання",
        ai: "AI фреймворки",
        tools: "Мови та інструменти",
        cloud: "Хмара та MLOps",
      },
    },
    // Contact
    contact: {
      title: "Давайте",
      titleHighlight: "Поспілкуємося",
      subtitle: "Маєте проект на думці? Обговоримо, як AI може перетворити ваші ідеї на реальність.",
      getInTouch: "Зв'яжіться зі мною",
      description: "Я завжди радий обговорити нові AI-проекти, інноваційні ідеї або можливості для співпраці. Не соромтеся звертатися!",
      email: "Email",
      location: "Локація",
      locationValue: "Сан-Франциско, Каліфорнія",
      social: "Соціальні мережі",
      form: {
        name: "Ім'я",
        namePlaceholder: "Ваше ім'я",
        email: "Email",
        emailPlaceholder: "ваш@email.com",
        message: "Повідомлення",
        messagePlaceholder: "Розкажіть про ваш проект...",
        submit: "Надіслати",
        success: "Повідомлення надіслано! Я зв'яжуся з вами найближчим часом.",
      },
      veteransBanner: "AI для ветеранів, ВПО і родин захисників - Онлайн курс з AI",
    },
    // Footer
    footer: {
      rights: "Усі права захищено.",
      madeWith: "Зроблено з",
      and: "та AI",
    },
  },
} as const;

export type Translations = {
  nav: {
    about: string;
    projects: string;
    skills: string;
    contact: string;
    hireMe: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    scroll: string;
  };
  about: {
    title: string;
    titleHighlight: string;
    description1: string;
    description2: string;
    stats: {
      experience: string;
      projects: string;
      clients: string;
      code: string;
    };
    highlights: {
      ml: { title: string; description: string };
      fullstack: { title: string; description: string };
      innovation: { title: string; description: string };
      performance: { title: string; description: string };
    };
  };
  projects: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: readonly { title: string; description: string }[];
    code: string;
    demo: string;
  };
  skills: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    categories: {
      ml: string;
      ai: string;
      tools: string;
      cloud: string;
    };
  };
  contact: {
    title: string;
    titleHighlight: string;
    subtitle: string;
    getInTouch: string;
    description: string;
    email: string;
    location: string;
    locationValue: string;
    social: string;
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      success: string;
    };
    veteransBanner: string;
  };
  footer: {
    rights: string;
    madeWith: string;
    and: string;
  };
};
