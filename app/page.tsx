"use client";

import { useState } from "react";
import FrozenKeyboard from "@/components/FrozenKeyboard";
import SmoothScroll from "@/components/smooth-scroll";
import Reveal from "@/components/Reveal";
import SectionNav from "@/components/SectionNav";
import CopyEmail from "@/components/CopyEmail";
import SeasonPicker from "@/components/SeasonPicker";
import LanguagePicker from "@/components/LanguagePicker";
import ProjectModal, {
  type ProjectDetail,
} from "@/components/ProjectModal";
import AmbientAudio from "@/components/AmbientAudio";
import { useLanguage } from "@/components/LanguageProvider";
import type { Lang } from "@/lib/i18n";

const EMAIL = "siddarthareddychinthala@gmail.com";

// Localised content lives in `{ es, en }` objects inside these arrays so the
// page can be a straightforward array.map() at render time. Tech names stay
// as plain strings (they're brand names, not localised).
type Localised = { es: string; en: string };

type Project = ProjectDetail & {
  align: "left" | "right";
  section:
    | "project1"
    | "project2"
    | "project3"
    | "project4"
    | "project5"
    | "project6"
    | "project7";
};

const projects: Project[] = [
  {
    num: "01",
    name: {
      es: "Ohio Real Estate Intelligence",
      en: "Ohio Real Estate Intelligence",
    },
    stack: [
      "Python",
      "React 19",
      "TypeScript",
      "DuckDB",
      "XGBoost",
      "Prophet",
      "scikit-learn",
      "GitHub Actions",
      "Recharts",
      "Tailwind CSS",
    ],
    desc: {
      es: "End-to-end data engineering and ML platform analyzing Ohio's housing market across all 88 counties — live data, 4 trained models, automated monthly pipeline.",
      en: "End-to-end data engineering and ML platform analyzing Ohio's housing market across all 88 counties — live data, 4 trained models, automated monthly pipeline.",
    },
    details: {
      es: "Production-grade data science project ingesting 3 public sources (Census ACS, Redfin, FRED) into a DuckDB star-schema warehouse. 4 ML models: XGBoost county value predictor (R²=0.9856, MAE=$3,389), Facebook Prophet HPI forecaster (8 quarters ahead), K-Means market clustering (5 archetypes across 88 counties), and a Random Forest affordability risk classifier (89%+ accuracy). Interactive 6-page React dashboard with live Census and BLS API calls in the browser. GitHub Actions CI/CD auto-refreshes all data and retrains models on the 1st of every month — 51k+ records across 3 sources.",
      en: "Production-grade data science project ingesting 3 public sources (Census ACS, Redfin, FRED) into a DuckDB star-schema warehouse. 4 ML models: XGBoost county value predictor (R²=0.9856, MAE=$3,389), Facebook Prophet HPI forecaster (8 quarters ahead), K-Means market clustering (5 archetypes across 88 counties), and a Random Forest affordability risk classifier (89%+ accuracy). Interactive 6-page React dashboard with live Census and BLS API calls in the browser. GitHub Actions CI/CD auto-refreshes all data and retrains models on the 1st of every month — 51k+ records across 3 sources.",
    },
    url: "https://siddarthareddy8.github.io/ohio-realestate-app/",
    github: "https://github.com/SIDDARTHAREDDY8/ohio-realestate-app",
    media: [
      "/projects/ohio-realestate/overview.png",
      "/projects/ohio-realestate/county.png",
      "/projects/ohio-realestate/ml.png",
      "/projects/ohio-realestate/economic.png",
    ],
    highlights: ["react", "python", "typescript", "git"],
    align: "left",
    section: "project1",
  },
  {
    num: "02",
    name: {
      es: "Expense Tracker",
      en: "Expense Tracker",
    },
    stack: [
      "React",
      "JavaScript",
      "Python",
      "REST API",
      "CSS",
      "Docker",
      "Vercel",
    ],
    desc: {
      es: "Full-stack expense tracking app with a React frontend and Python backend — manage income, expenses, and budgets with a clean, responsive UI.",
      en: "Full-stack expense tracking app with a React frontend and Python backend — manage income, expenses, and budgets with a clean, responsive UI.",
    },
    details: {
      es: "A full-stack personal finance tool built with a React frontend and a Python REST API backend. Features include adding, categorising, and deleting transactions, a live balance summary, and income vs. expense breakdowns. The frontend and backend are cleanly separated into distinct folders, containerised with Docker for consistent environments, and deployed on Vercel for zero-config hosting.",
      en: "A full-stack personal finance tool built with a React frontend and a Python REST API backend. Features include adding, categorising, and deleting transactions, a live balance summary, and income vs. expense breakdowns. The frontend and backend are cleanly separated into distinct folders, containerised with Docker for consistent environments, and deployed on Vercel for zero-config hosting.",
    },
    url: "https://usevybe.vercel.app",
    github: "https://github.com/SIDDARTHAREDDY8/Expense-Tracker-",
    media: [
      "/projects/expense-tracker/home.png",
      "/projects/expense-tracker/dashboard.png",
    ],
    highlights: ["react", "python", "javascript", "docker"],
    align: "right",
    section: "project2",
  },
  {
    num: "03",
    name: {
      es: "TalentAI",
      en: "TalentAI",
    },
    stack: [
      "React 18",
      "FastAPI",
      "Python",
      "spaCy",
      "scikit-learn",
      "PostgreSQL",
      "JWT",
      "Web Speech API",
      "Vercel",
      "Render",
    ],
    desc: {
      es: "AI-powered interview preparation platform — resume analysis, job-description matching, voice interview practice, cover letter generation, and skill gap planning.",
      en: "AI-powered interview preparation platform — resume analysis, job-description matching, voice interview practice, cover letter generation, and skill gap planning.",
    },
    details: {
      es: "Full-stack AI platform with a React 18 frontend and a FastAPI Python backend. Parses resumes (PDF.js + Mammoth.js), extracts skills with spaCy NLP, and scores interview answers using a hybrid algorithm: AI Score × 70% + NLP Similarity × 30% (TF-IDF cosine + Jaccard). Features include real-time voice interview mode via Web Speech API, resume-to-JD match scoring, AI-generated cover letters, personalised skill gap learning plans, session tracking with analytics, and JWT-secured auth with bcrypt. Frontend on Vercel, backend on Render with 16 REST API endpoints and Supabase PostgreSQL.",
      en: "Full-stack AI platform with a React 18 frontend and a FastAPI Python backend. Parses resumes (PDF.js + Mammoth.js), extracts skills with spaCy NLP, and scores interview answers using a hybrid algorithm: AI Score × 70% + NLP Similarity × 30% (TF-IDF cosine + Jaccard). Features include real-time voice interview mode via Web Speech API, resume-to-JD match scoring, AI-generated cover letters, personalised skill gap learning plans, session tracking with analytics, and JWT-secured auth with bcrypt. Frontend on Vercel, backend on Render with 16 REST API endpoints and Supabase PostgreSQL.",
    },
    url: "https://usetalentai.vercel.app",
    github: "https://github.com/SIDDARTHAREDDY8/talentai-frontend",
    media: [
      "/projects/talentai/home.png",
      "/projects/talentai/interview.png",
      "/projects/talentai/resume.png",
      "/projects/talentai/analytics.png",
    ],
    highlights: ["react", "python", "postgresql", "fastapi"],
    align: "left",
    section: "project3",
  },
  {
    num: "04",
    name: {
      es: "Ohio Credit Intelligence",
      en: "Ohio Credit Intelligence",
    },
    stack: [
      "Python",
      "FastAPI",
      "LightGBM",
      "SHAP",
      "MLflow",
      "dbt",
      "PostgreSQL",
      "React 18",
      "TypeScript",
      "Claude API",
      "Docker",
      "AWS",
      "GitHub Actions",
    ],
    desc: {
      es: "Production-style AI credit-risk scoring for regional banks — automated loan decisions, SHAP explainability, and ECOA-compliant adverse-action notices, on a full data + MLOps stack.",
      en: "Production-style AI credit-risk scoring for regional banks — automated loan decisions, SHAP explainability, and ECOA-compliant adverse-action notices, on a full data + MLOps stack.",
    },
    details: {
      es: "An applicant's loan request goes in; a calibrated risk decision comes out with a full audit trail. A LightGBM model trained on 2.26M real LendingClub loans produces a 0–100 risk score across 5 tiers; SHAP explains exactly which factors moved the score; and on a decline the Claude API writes a plain-English, ECOA/FCRA-compliant adverse-action letter — code-validated against guardrails with a deterministic fallback so a credit decision never fails if generation hiccups. A fairness layer audits disparate impact against Ohio HMDA data using the CFPB 4/5ths rule, and weekly PSI tracks drift. Data flows through PostgreSQL + dbt marts; models are versioned in an MLflow registry with a champion alias and an AUC promotion gate. The 3-page React/TypeScript dashboard logs every decision, and GitHub Actions deploys to AWS EC2 + RDS + ECR via keyless OIDC auth — 67 unit tests, 27 dbt tests, plus a Claude notice-compliance eval harness.",
      en: "An applicant's loan request goes in; a calibrated risk decision comes out with a full audit trail. A LightGBM model trained on 2.26M real LendingClub loans produces a 0–100 risk score across 5 tiers; SHAP explains exactly which factors moved the score; and on a decline the Claude API writes a plain-English, ECOA/FCRA-compliant adverse-action letter — code-validated against guardrails with a deterministic fallback so a credit decision never fails if generation hiccups. A fairness layer audits disparate impact against Ohio HMDA data using the CFPB 4/5ths rule, and weekly PSI tracks drift. Data flows through PostgreSQL + dbt marts; models are versioned in an MLflow registry with a champion alias and an AUC promotion gate. The 3-page React/TypeScript dashboard logs every decision, and GitHub Actions deploys to AWS EC2 + RDS + ECR via keyless OIDC auth — 67 unit tests, 27 dbt tests, plus a Claude notice-compliance eval harness.",
    },
    url: "http://3.23.217.230:3000",
    github: "https://github.com/SIDDARTHAREDDY8/ohio-credit-intelligence",
    highlights: ["python", "fastapi", "postgresql", "docker"],
    align: "right",
    section: "project4",
  },
  {
    num: "05",
    name: {
      es: "FinCore AI",
      en: "FinCore AI",
    },
    stack: [
      "Next.js 14",
      "TypeScript",
      "FastAPI",
      "Python",
      "Spring Boot",
      "Java",
      "LangGraph",
      "Claude API",
      "OpenAI Embeddings",
      "pgvector",
      "Apache Kafka",
      "PostgreSQL",
      "Redis",
      "Terraform",
    ],
    desc: {
      es: "Personal-finance platform built as a microservices system — three backend services over Kafka, a LangGraph RAG agent that answers questions about your spending, and a UI that makes the AI internals visible.",
      en: "Personal-finance platform built as a microservices system — three backend services over Kafka, a LangGraph RAG agent that answers questions about your spending, and a UI that makes the AI internals visible.",
    },
    details: {
      es: "Three backend services (a FastAPI core API, a FastAPI/LangGraph AI service, and a Spring Boot ingestion service) communicate over Apache Kafka. Bank transactions flow in via Plaid sandbox, are embedded with OpenAI text-embedding-3-small, and stored in pgvector. A 3-node LangGraph pipeline (retrieve → analyze → generate) answers plain-English questions with Claude, grounded in your own transaction history via RAG — with automatic PostgreSQL full-text-search fallback when no embeddings exist. The frontend exposes the AI internals: per-node execution-trace timing and the exact retrieved documents with their similarity scores and retrieval method. Auth is bcrypt + JWT (access/refresh) plus Google OAuth; nginx uses dynamic DNS resolution to survive container restarts; infra is Terraform (ECS Fargate, RDS, ElastiCache, MSK, ECR). 67 tests across all three services.",
      en: "Three backend services (a FastAPI core API, a FastAPI/LangGraph AI service, and a Spring Boot ingestion service) communicate over Apache Kafka. Bank transactions flow in via Plaid sandbox, are embedded with OpenAI text-embedding-3-small, and stored in pgvector. A 3-node LangGraph pipeline (retrieve → analyze → generate) answers plain-English questions with Claude, grounded in your own transaction history via RAG — with automatic PostgreSQL full-text-search fallback when no embeddings exist. The frontend exposes the AI internals: per-node execution-trace timing and the exact retrieved documents with their similarity scores and retrieval method. Auth is bcrypt + JWT (access/refresh) plus Google OAuth; nginx uses dynamic DNS resolution to survive container restarts; infra is Terraform (ECS Fargate, RDS, ElastiCache, MSK, ECR). 67 tests across all three services.",
    },
    github: "https://github.com/SIDDARTHAREDDY8/fincore-ai",
    highlights: ["python", "fastapi", "langgraph", "postgresql"],
    align: "left",
    section: "project5",
  },
  {
    num: "06",
    name: {
      es: "Kisaan AI",
      en: "Kisaan AI",
    },
    stack: [
      "Python",
      "FastAPI",
      "LangGraph",
      "Claude API",
      "HuggingFace",
      "MobileNetV2",
      "Whisper",
      "NLLB-200",
      "pgvector",
      "PostgreSQL",
      "React 18",
      "TypeScript",
      "Twilio",
    ],
    desc: {
      es: "Autonomous multimodal farm intelligence for Indian smallholder farmers — crop disease diagnosis, live mandi prices, scheme guidance, soil analysis, and multilingual voice advisory, via web or WhatsApp.",
      en: "Autonomous multimodal farm intelligence for Indian smallholder farmers — crop disease diagnosis, live mandi prices, scheme guidance, soil analysis, and multilingual voice advisory, via web or WhatsApp.",
    },
    details: {
      es: "A LangGraph stateful DAG routes each input (photo, text, voice, or WhatsApp message) to the right agent via zero-shot classification + NER. MobileNetV2 classifies 38 diseases across 14 crops behind a confidence gate, then Claude writes the treatment plan. Other agents handle live Agmarknet mandi prices with sell-window advice, RAG-based government-scheme navigation (PM-KISAN, PMFBY, KCC) over pgvector, and tabular soil-health scoring. A full voice path runs Whisper ASR → NLLB-200 translation → advisory → MMS TTS, replying in the farmer's own language across Hindi, Telugu, Tamil, Marathi, Kannada, and Bengali. Claude calls use prompt caching (~90% cost cut on hits) and per-session cost tracking; the WhatsApp bot uses a two-phase response to beat Twilio webhook timeouts. Backed by an eval harness gating precision, latency, and severity accuracy.",
      en: "A LangGraph stateful DAG routes each input (photo, text, voice, or WhatsApp message) to the right agent via zero-shot classification + NER. MobileNetV2 classifies 38 diseases across 14 crops behind a confidence gate, then Claude writes the treatment plan. Other agents handle live Agmarknet mandi prices with sell-window advice, RAG-based government-scheme navigation (PM-KISAN, PMFBY, KCC) over pgvector, and tabular soil-health scoring. A full voice path runs Whisper ASR → NLLB-200 translation → advisory → MMS TTS, replying in the farmer's own language across Hindi, Telugu, Tamil, Marathi, Kannada, and Bengali. Claude calls use prompt caching (~90% cost cut on hits) and per-session cost tracking; the WhatsApp bot uses a two-phase response to beat Twilio webhook timeouts. Backed by an eval harness gating precision, latency, and severity accuracy.",
    },
    github: "https://github.com/SIDDARTHAREDDY8/kisaan-ai",
    highlights: ["python", "fastapi", "react", "postgresql"],
    align: "right",
    section: "project6",
  },
  {
    num: "07",
    name: {
      es: "JobsBuddy",
      en: "JobsBuddy",
    },
    stack: [
      "Python",
      "GitHub Actions",
      "HTML5",
      "JavaScript",
      "GitHub Pages",
    ],
    desc: {
      es: "A visa-sponsoring tech-job board for international students — a free Python scraper that surfaces only US, OPT-friendly, early-career roles at companies with real H1B sponsorship history.",
      en: "A visa-sponsoring tech-job board for international students — a free Python scraper that surfaces only US, OPT-friendly, early-career roles at companies with real H1B sponsorship history.",
    },
    details: {
      es: "Built to fix the worst part of the international job hunt: applying, then learning the company won't sponsor. A free Python scraper runs on GitHub Actions every 6 hours, pulling from public ATS feeds (Greenhouse, Lever, Ashby, Workday) and keeping only roles that matter — companies with a real H1B filing history, US-based, no security clearance, early-career (0–3 years). Each role is scored for fit against a candidate profile (a Match %) and tagged with the company's sponsorship tier and filing count. Results publish to a static, searchable GitHub Pages job board — newest first, Apply opens in a new tab — with 1,100+ roles tracked and hundreds open at any time. No paid APIs, no signups, no paywalls.",
      en: "Built to fix the worst part of the international job hunt: applying, then learning the company won't sponsor. A free Python scraper runs on GitHub Actions every 6 hours, pulling from public ATS feeds (Greenhouse, Lever, Ashby, Workday) and keeping only roles that matter — companies with a real H1B filing history, US-based, no security clearance, early-career (0–3 years). Each role is scored for fit against a candidate profile (a Match %) and tagged with the company's sponsorship tier and filing count. Results publish to a static, searchable GitHub Pages job board — newest first, Apply opens in a new tab — with 1,100+ roles tracked and hundreds open at any time. No paid APIs, no signups, no paywalls.",
    },
    url: "https://siddarthareddy8.github.io/JobsBuddy/",
    github: "https://github.com/SIDDARTHAREDDY8/JobsBuddy",
    highlights: ["python", "githubactions", "javascript", "git"],
    align: "left",
    section: "project7",
  },
];

const education: Array<{
  degree: Localised;
  field: Localised;
  institution: string;
  location: string;
  period: Localised;
  gpa: string;
  coursework: string[];
  activities: Localised[];
}> = [
  {
    degree: { es: "Master of Science", en: "Master of Science" },
    field: { es: "Computer Science", en: "Computer Science" },
    institution: "University of Cincinnati",
    location: "Cincinnati, Ohio",
    period: { es: "Aug 2024 — Apr 2026", en: "Aug 2024 — Apr 2026" },
    gpa: "3.6 / 4.0",
    coursework: [
      "Machine Learning",
      "Distributed Systems",
      "Database Systems",
      "Software Engineering",
      "Data Structures & Algorithms",
      "Cloud Computing",
      "Natural Language Processing",
    ],
    activities: [
      {
        es: "Graduate Research — developed full-stack web applications for the University under the Digital Technology Solutions (DTS) program.",
        en: "Graduate Research — developed full-stack web applications for the University under the Digital Technology Solutions (DTS) program.",
      },
      {
        es: "Applied ML coursework to production projects, including the Ohio Real Estate Intelligence platform (XGBoost R²=0.9856).",
        en: "Applied ML coursework to production projects, including the Ohio Real Estate Intelligence platform (XGBoost R²=0.9856).",
      },
    ],
  },
];

const experiences: Array<{
  role: Localised;
  company: string;
  period: Localised;
  location: Localised;
  summary: Localised;
  bullets: Localised[];
  stack: string[];
}> = [
  {
    role: { es: "Software Engineer Intern", en: "Software Engineer Intern" },
    company: "DXC Technology",
    period: { es: "June 2025 — Present", en: "June 2025 — Present" },
    location: { es: "Remote", en: "Remote" },
    summary: {
      es: "Building production-grade full-stack applications and AI-integrated services at one of the world's largest IT companies. Focused on cloud deployment, LLM integration, and high-availability systems.",
      en: "Building production-grade full-stack applications and AI-integrated services at one of the world's largest IT companies. Focused on cloud deployment, LLM integration, and high-availability systems.",
    },
    bullets: [
      {
        es: "Built 2+ full-stack apps with Python/Node.js backends and React frontends; integrated Claude and OpenAI LLM APIs.",
        en: "Built 2+ full-stack apps with Python/Node.js backends and React frontends; integrated Claude and OpenAI LLM APIs.",
      },
      {
        es: "Designed 3+ REST API services and PostgreSQL/MySQL schemas for complex enterprise systems.",
        en: "Designed 3+ REST API services and PostgreSQL/MySQL schemas for complex enterprise systems.",
      },
      {
        es: "Built test frameworks with 300+ tests and 85% code coverage; deployed on AWS with Docker and CI/CD pipelines.",
        en: "Built test frameworks with 300+ tests and 85% code coverage; deployed on AWS with Docker and CI/CD pipelines.",
      },
      {
        es: "Achieved 99% uptime on production systems; participated in 50+ code reviews across 8+ teams.",
        en: "Achieved 99% uptime on production systems; participated in 50+ code reviews across 8+ teams.",
      },
    ],
    stack: ["Python", "Node.js", "React", "PostgreSQL", "MySQL", "AWS", "Docker", "Claude API", "OpenAI"],
  },
  {
    role: { es: "Full Stack Developer", en: "Full Stack Developer" },
    company: "Digital Technology Solutions (DTS)",
    period: { es: "Sep 2024 — May 2025", en: "Sep 2024 — May 2025" },
    location: { es: "Cincinnati, Ohio", en: "Cincinnati, Ohio" },
    summary: {
      es: "Developed and maintained full-stack web applications for the University of Cincinnati in an Agile environment. Focused on REST API design, database optimisation, and cross-team collaboration.",
      en: "Developed and maintained full-stack web applications for the University of Cincinnati in an Agile environment. Focused on REST API design, database optimisation, and cross-team collaboration.",
    },
    bullets: [
      {
        es: "Developed 3+ full-stack applications with documented REST APIs and PostgreSQL/MongoDB databases.",
        en: "Developed 3+ full-stack applications with documented REST APIs and PostgreSQL/MongoDB databases.",
      },
      {
        es: "Optimised SQL queries for performance gains; worked across 12+ Agile/Scrum sprints.",
        en: "Optimised SQL queries for performance gains; worked across 12+ Agile/Scrum sprints.",
      },
      {
        es: "Collaborated with 8+ team members; contributed to 50+ code reviews and wrote comprehensive test coverage.",
        en: "Collaborated with 8+ team members; contributed to 50+ code reviews and wrote comprehensive test coverage.",
      },
    ],
    stack: ["React", "Node.js", "PostgreSQL", "MongoDB", "REST API", "Agile", "Git"],
  },
  {
    role: { es: "Software Engineer", en: "Software Engineer" },
    company: "Tata Consultancy Services (TCS)",
    period: { es: "Jan 2023 — Aug 2024", en: "Jan 2023 — Aug 2024" },
    location: { es: "India (Hybrid)", en: "India (Hybrid)" },
    summary: {
      es: "Shipped 4+ production systems and microservices for enterprise operations at one of the world's largest IT services firms. Worked across cross-functional teams with a focus on backend architecture and database performance.",
      en: "Shipped 4+ production systems and microservices for enterprise operations at one of the world's largest IT services firms. Worked across cross-functional teams with a focus on backend architecture and database performance.",
    },
    bullets: [
      {
        es: "Designed 15+ REST API endpoints and built microservices for enterprise-scale operations.",
        en: "Designed 15+ REST API endpoints and built microservices for enterprise-scale operations.",
      },
      {
        es: "Managed PostgreSQL and MySQL systems at scale; optimised SQL queries for significant performance improvements.",
        en: "Managed PostgreSQL and MySQL systems at scale; optimised SQL queries for significant performance improvements.",
      },
      {
        es: "Applied design patterns and architectural best practices across 12+ Agile sprints and 8+ cross-functional teams.",
        en: "Applied design patterns and architectural best practices across 12+ Agile sprints and 8+ cross-functional teams.",
      },
    ],
    stack: ["Python", "PostgreSQL", "MySQL", "Microservices", "REST API", "Docker", "Agile"],
  },
];

function pick<T>(loc: { es: T; en: T }, lang: Lang): T {
  return loc[lang];
}

// Hero name split per word so each can rise independently. Whitespace
// preserved as its own span so the line wraps naturally if needed.
function HeroWord({
  text,
  delay,
  className = "",
}: {
  text: string;
  delay: number;
  className?: string;
}) {
  return (
    <span className={`hero-word ${className}`}>
      <span style={{ animationDelay: `${delay}ms` }}>{text}</span>
    </span>
  );
}

export default function Home() {
  const { t, lang } = useLanguage();
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <SmoothScroll>
      <div className="relative">
        {/* Persistent 3D scene — fullscreen behind content; events must reach it. */}
        <div className="fixed inset-0 z-0">
          <FrozenKeyboard />
        </div>

        {/* Header */}
        <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-10 md:px-14 py-4 sm:py-5 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto min-w-0">
            <span
              data-cursor="hover"
              className="text-sm font-semibold tracking-tight text-ice-100 truncate"
            >
              Siddartha Reddy
            </span>
            <span className="status-pill hidden sm:inline-flex shrink-0">
              {t("header.availability")}
            </span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 pointer-events-auto shrink-0">
            <AmbientAudio />
            <SeasonPicker />
            <a
              href="https://github.com/SIDDARTHAREDDY8"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="hidden sm:inline-flex frost-btn !py-1.5 !px-3 !text-xs"
            >
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden>
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
              </svg>
              <span>GitHub</span>
            </a>
            <LanguagePicker />
          </div>
        </header>

        <SectionNav />

        <main className="relative z-10 pointer-events-none">
          {/* Hero */}
          <section
            data-kb-section="hero"
            className="min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14"
          >
            <div className="mt-20">
              <p
                className="text-[11px] uppercase tracking-[0.3em] text-ice-300 mb-5 fade-in-up"
                style={{ ["--d" as string]: "0ms" }}
              >
                {t("hero.greeting")}
              </p>
              <h1 className="text-[clamp(3.5rem,14vw,8.5rem)] font-bold tracking-[-0.03em] text-ice-50 leading-[0.92]">
                <HeroWord text="Siddartha" delay={120} />
                <br />
                <HeroWord text="Reddy" delay={260} className="text-ice-400" />
              </h1>
              <p
                className="mt-8 text-base sm:text-lg md:text-xl text-ice-200 max-w-xl leading-relaxed fade-in-up"
                style={{ ["--d" as string]: "520ms" }}
              >
                {t("hero.roleLine")}
                <br />
                {t("hero.tagline")}
              </p>

              {/* CTAs */}
              <div
                className="mt-10 flex flex-wrap items-center gap-3 pointer-events-auto fade-in-up"
                style={{ ["--d" as string]: "700ms" }}
              >
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" />
                    <path d="M14 3v5h5" />
                  </svg>
                  {t("hero.cv")}
                </a>
                <button
                  type="button"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-btn"
                  onClick={() =>
                    document
                      .querySelector<HTMLElement>(
                        '[data-kb-section="contact"]'
                      )
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                >
                  {t("hero.hire")}
                </button>
                <a
                  href="https://github.com/SIDDARTHAREDDY8"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 005.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/siddarthareddy9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  data-magnetic
                  className="frost-icon"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zm7.4 0h4.37v1.92h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V22h-4.56v-6.59c0-1.57-.03-3.6-2.19-3.6-2.19 0-2.53 1.71-2.53 3.48V22H7.62V8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Animated scroll indicator at bottom */}
            <div
              className="mt-auto flex items-center gap-3 fade-in-up"
              style={{ ["--d" as string]: "900ms" }}
            >
              <span className="scroll-indicator">
                <span>{t("hero.scroll")}</span>
                <span className="scroll-indicator__rail" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.25em] text-ice-400 hidden sm:inline">
                {t("hero.keysHint")}
              </span>
            </div>
          </section>

          {/* Stack */}
          <section
            data-kb-section="stack"
            className="relative min-h-[200vh] p-6 sm:p-10 md:p-14"
          >
            <div className="relative h-[150vh]">
              <div className="sticky top-24 sm:top-28 text-center">
                <Reveal>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                    {t("stack.title")}
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="mt-3 text-sm sm:text-base text-ice-400">
                    {t("stack.hint")}
                  </p>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section
            data-kb-section="experience"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("experience.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("experience.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {experiences.map((exp, idx) => (
                <Reveal
                  key={`${exp.company}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="frost-card-mobile relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {pick(exp.role, lang)}
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {exp.company}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {pick(exp.location, lang)}
                        </span>
                      </p>
                    </div>
                    <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                      {pick(exp.period, lang)}
                    </span>
                  </header>

                  <p className="text-ice-200 leading-relaxed mb-5">
                    {pick(exp.summary, lang)}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {exp.bullets.map((b, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-ice-100 leading-relaxed"
                      >
                        <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                        <span>{pick(b, lang)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Education */}
          <section
            data-kb-section="education"
            className="relative p-6 sm:p-10 md:p-14 pb-24"
          >
            <div className="sticky top-24 sm:top-28 text-center mb-12 sm:mb-16 z-0">
              <Reveal>
                <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.03em] text-ice-50 leading-[0.95]">
                  {t("education.title")}
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-3 text-sm sm:text-base text-ice-300">
                  {t("education.subtitle")}
                </p>
              </Reveal>
            </div>

            <div className="relative z-10 max-w-3xl mx-auto space-y-6">
              {education.map((ed, idx) => (
                <Reveal
                  key={`${ed.institution}-${idx}`}
                  delay={idx * 120}
                  as="article"
                  className="frost-card-mobile relative rounded-2xl bg-ink-1/75 backdrop-blur-md border border-ink-3 p-6 sm:p-8 md:p-10 pointer-events-auto shadow-[0_8px_40px_-20px_rgba(0,0,0,0.6)]"
                >
                  {/* Cap icon */}
                  <div className="absolute top-6 right-6 sm:top-8 sm:right-8 opacity-20 pointer-events-none">
                    <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
                    </svg>
                  </div>

                  <header className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-ice-50 tracking-tight">
                        {pick(ed.degree, lang)}{" "}
                        <span className="text-ice-300">in {pick(ed.field, lang)}</span>
                      </h3>
                      <p className="text-ice-400 font-medium mt-1">
                        {ed.institution}
                        <span className="text-ice-500/80 font-normal">
                          {" · "}
                          {ed.location}
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="font-mono text-xs text-ice-100 px-3 py-1 rounded-full border border-ice-700/70 bg-ink-2/60 whitespace-nowrap">
                        {pick(ed.period, lang)}
                      </span>
                      <span className="font-mono text-xs text-ice-300 px-3 py-1 rounded-full border border-ice-800/60 bg-ink-2/40 whitespace-nowrap">
                        {t("education.gpa")} · {ed.gpa}
                      </span>
                    </div>
                  </header>

                  {/* Activities */}
                  <ul className="space-y-2.5 mb-6">
                    {ed.activities.map((a, i) => (
                      <li key={i} className="flex gap-3 text-ice-100 leading-relaxed">
                        <span className="mt-[0.65em] flex-none w-1.5 h-1.5 rounded-full bg-ice-400" />
                        <span>{pick(a, lang)}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Coursework */}
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-ice-400 mb-2">
                      {t("education.coursework")}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {ed.coursework.map((c) => (
                        <span key={c} className="frost-chip">{c}</span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Projects */}
          {projects.map((p) => (
            <section
              key={p.num}
              data-kb-section={p.section}
              data-kb-highlights={(p.highlights ?? []).join(",")}
              className="relative min-h-screen flex items-center p-6 sm:p-10 md:p-14 overflow-hidden"
            >
              <span
                aria-hidden
                className={`watermark top-1/2 -translate-y-1/2 ${
                  p.align === "left" ? "right-[-2vw]" : "left-[-2vw]"
                }`}
              >
                {p.num}
              </span>

              <div
                className={
                  p.align === "left"
                    ? "max-w-xl relative"
                    : "max-w-xl ml-auto text-right relative md:mr-16 lg:mr-24"
                }
              >
                <Reveal>
                  <p className="font-mono text-sm text-ice-400 mb-3">
                    {p.num} · {t("projects.kicker")}
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-ice-50 leading-[1.05] mb-4">
                    {pick(p.name, lang)}
                  </h2>
                </Reveal>
                {p.badge ? (
                  <Reveal delay={140}>
                    <span className="inline-block text-[10px] uppercase tracking-widest text-ice-300 border border-ice-700 rounded-full px-2 py-0.5 mb-4">
                      {pick(p.badge, lang)}
                    </span>
                  </Reveal>
                ) : null}
                <Reveal delay={180}>
                  <p className="text-base sm:text-lg text-ice-200 leading-relaxed mb-6">
                    {pick(p.desc, lang)}
                  </p>
                </Reveal>
                <Reveal delay={260}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex flex-wrap gap-1.5 justify-end pointer-events-auto mb-5"
                        : "flex flex-wrap gap-1.5 pointer-events-auto mb-5"
                    }
                  >
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        data-cursor="hover"
                        className="frost-chip"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </Reveal>
                <Reveal delay={320}>
                  <div
                    className={
                      p.align === "right"
                        ? "flex justify-end pointer-events-auto"
                        : "flex pointer-events-auto"
                    }
                  >
                    <button
                      type="button"
                      onClick={() => setActiveProject(p)}
                      data-cursor="hover"
                      data-magnetic
                      className="frost-btn"
                    >
                      {t("projects.viewMore")}
                      <svg
                        viewBox="0 0 24 24"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        aria-hidden
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </Reveal>
              </div>
            </section>
          ))}

          {/* Contact */}
          <section
            data-kb-section="contact"
            className="relative min-h-screen flex flex-col justify-center p-6 sm:p-10 md:p-14 overflow-hidden"
          >
            <div className="max-w-xl relative">
              <Reveal>
                <p className="font-mono text-sm text-ice-400 mb-3">
                  {t("contact.kicker")}
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 className="text-4xl sm:text-6xl font-semibold tracking-tight text-ice-50 mb-6">
                  {t("contact.title")}
                </h2>
              </Reveal>
              <Reveal delay={160}>
                <p className="text-ice-200 mb-10">{t("contact.body")}</p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap gap-3 pointer-events-auto">
                  <CopyEmail
                    email={EMAIL}
                    className="frost-btn frost-btn--primary"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M3 7l9 6 9-6" />
                    </svg>
                    {t("contact.copyEmail")}
                  </CopyEmail>
                  <a
                    href={`mailto:${EMAIL}`}
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.openMail")}
                  </a>
                  <a
                    href="https://github.com/SIDDARTHAREDDY8"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.github")}
                  </a>
                  <a
                    href="https://www.linkedin.com/in/siddarthareddy9/"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="frost-btn"
                  >
                    {t("contact.linkedin")}
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={320}>
              <p className="mt-14 text-[11px] uppercase tracking-[0.25em] text-ice-400">
                {t("contact.footer")}
              </p>
            </Reveal>
          </section>
        </main>

        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      </div>
    </SmoothScroll>
  );
}
