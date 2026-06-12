// Minimal i18n layer: a single dictionary keyed by dot-path, with each leaf
// carrying both the ES and EN copy. Consumers read via `useLanguage().t()`
// which resolves the path for the active language. Keeping it flat and
// co-located (rather than adding a dependency like next-intl) keeps the
// project tiny and makes the strings easy to audit.
export type Lang = "es" | "en";

export const LANGUAGES: Lang[] = ["es", "en"];
export const DEFAULT_LANG: Lang = "en";

type Leaf = Record<Lang, string>;
type Node = Leaf | { [key: string]: Node };

function isLeaf(node: Node): node is Leaf {
  return typeof (node as Leaf).es === "string";
}

export const DICT = {
  picker: {
    season: { es: "Estación", en: "Season" },
    language: { es: "Idioma", en: "Language" },
  },
  seasons: {
    spring: { es: "Primavera", en: "Spring" },
    summer: { es: "Verano", en: "Summer" },
    autumn: { es: "Otoño", en: "Autumn" },
    winter: { es: "Invierno", en: "Winter" },
  },
  nav: {
    aria: { es: "Secciones", en: "Sections" },
    home: { es: "Inicio", en: "Home" },
    stack: { es: "Stack", en: "Stack" },
    experience: { es: "Experiencia", en: "Experience" },
    education: { es: "Educación", en: "Education" },
    project: { es: "Proyecto", en: "Project" },
    contact: { es: "Contacto", en: "Contact" },
  },
  header: {
    availability: {
      es: "Open to opportunities",
      en: "Open to opportunities",
    },
  },
  hero: {
    greeting: { es: "Hi, I am", en: "Hi, I am" },
    roleLine: {
      es: "Full Stack Developer & Software Engineer.",
      en: "Full Stack Developer & Software Engineer.",
    },
    tagline: {
      es: "Building scalable web apps and data-driven systems.",
      en: "Building scalable web apps and data-driven systems.",
    },
    cv: { es: "Download Resume", en: "Download Resume" },
    hire: { es: "Contact me", en: "Contact me" },
    scroll: { es: "Scroll to explore", en: "Scroll to explore" },
    keysHint: {
      es: "· hover over the keys",
      en: "· hover over the keys",
    },
  },
  stack: {
    title: { es: "Tech Stack", en: "Tech Stack" },
    hint: {
      es: "(hint: pasa el ratón por una tecla)",
      en: "(hint: hover over a key)",
    },
  },
  experience: {
    title: { es: "Experience", en: "Experience" },
    subtitle: {
      es: "TCS → University of Cincinnati → DXC Technology.",
      en: "TCS → University of Cincinnati → DXC Technology.",
    },
  },
  education: {
    title: { es: "Education", en: "Education" },
    subtitle: {
      es: "University of Cincinnati · MS Computer Science · GPA 3.6",
      en: "University of Cincinnati · MS Computer Science · GPA 3.6",
    },
    gpa: { es: "GPA", en: "GPA" },
    coursework: { es: "Relevant Coursework", en: "Relevant Coursework" },
  },
  projects: {
    kicker: { es: "proyecto", en: "project" },
    viewMore: { es: "Ver más", en: "View more" },
    openSite: { es: "Abrir sitio", en: "Visit site" },
    viewCode: { es: "Ver código", en: "View code" },
    close: { es: "Cerrar", en: "Close" },
    stackLabel: { es: "Stack", en: "Stack" },
    overview: { es: "Resumen", en: "Overview" },
  },
  contact: {
    kicker: { es: "contact", en: "contact" },
    title: { es: "Let's talk?", en: "Let's talk?" },
    body: {
      es: "Open to full-time, contract, W-2, and C2C roles. The keyboard is ready — send the first message.",
      en: "Open to full-time, contract, W-2, and C2C roles. The keyboard is ready — send the first message.",
    },
    copyEmail: { es: "Copy email", en: "Copy email" },
    openMail: { es: "Open mailto", en: "Open mailto" },
    github: { es: "GitHub", en: "GitHub" },
    linkedin: { es: "LinkedIn", en: "LinkedIn" },
    emailToast: { es: "Email copied", en: "Email copied" },
    footer: {
      es: "© 2026 Siddartha Reddy Chinthala. All rights reserved.",
      en: "© 2026 Siddartha Reddy Chinthala. All rights reserved.",
    },
  },
  keyboard: {
    taglines: {
      javascript: {
        es: "Where it all started. Still here, still in charge.",
        en: "Where it all started. Still here, still in charge.",
      },
      typescript: {
        es: "Same JS, with a seatbelt.",
        en: "Same JS, with a seatbelt.",
      },
      html5: {
        es: "The bones of any page.",
        en: "The bones of any page.",
      },
      css: {
        es: "What separates good from beautiful.",
        en: "What separates good from beautiful.",
      },
      tailwindcss: {
        es: "Utility-first. Design inside the HTML.",
        en: "Utility-first. Design inside the HTML.",
      },
      python: {
        es: "Reads like English, scales like a rocket.",
        en: "Reads like English, scales like a rocket.",
      },
      react: {
        es: "Components, components, components.",
        en: "Components, components, components.",
      },
      nextdotjs: {
        es: "React all grown up: routing, SSR, edge.",
        en: "React all grown up: routing, SSR, edge.",
      },
      nodedotjs: {
        es: "JavaScript on the server.",
        en: "JavaScript on the server.",
      },
      postgresql: {
        es: "The boring database that always works.",
        en: "The boring database that always works.",
      },
      docker: {
        es: "Same on my machine, same in production.",
        en: "Same on my machine, same in production.",
      },
      git: {
        es: "History and a time machine for your code.",
        en: "History and a time machine for your code.",
      },
      fastapi: {
        es: "Python APIs at machine speed.",
        en: "Python APIs at machine speed.",
      },
      claude: {
        es: "My pair-programmer for shipping AI features.",
        en: "My pair-programmer for shipping AI features.",
      },
      langchain: {
        es: "Wiring LLMs into real agent pipelines.",
        en: "Wiring LLMs into real agent pipelines.",
      },
      mlflow: {
        es: "Track, version, and ship models with confidence.",
        en: "Track, version, and ship models with confidence.",
      },
      apachekafka: {
        es: "Events flowing between services, at scale.",
        en: "Events flowing between services, at scale.",
      },
      terraform: {
        es: "Infrastructure as code, reproducible every time.",
        en: "Infrastructure as code, reproducible every time.",
      },
      githubactions: {
        es: "Push code, ship product.",
        en: "Push code, ship product.",
      },
      scikitlearn: {
        es: "ML that just works.",
        en: "ML that just works.",
      },
    },
  },
} as const satisfies Record<string, Node>;

// Resolve a dotted path in the dictionary for a given language.
export function translate(path: string, lang: Lang): string {
  const parts = path.split(".");
  let ref: Node = DICT as unknown as Node;
  for (const p of parts) {
    if (isLeaf(ref)) return path;
    ref = (ref as { [key: string]: Node })[p];
    if (ref === undefined) return path;
  }
  if (isLeaf(ref)) return ref[lang] ?? ref.es ?? path;
  return path;
}
