import { useState } from "react";
import { ArrowDown, ArrowUp, Download, LoaderCircle } from "lucide-react";
import { Button, Card } from "../../components/ui";
import {
  downloadDocx,
  type DocxResumeData,
  type SectionKey,
} from "../../utils/generateDocx";

const SECTION_LABELS: Record<SectionKey, string> = {
  summary: "Professional Summary",
  skills: "Technical Skills",
  experience: "Work Experience",
  education: "Education",
};

const SAMPLE_DATA: DocxResumeData = {
  name: "Rahul Sharma",
  email: "rahul.sharma@email.com",
  phone: "+91 98765 43210",
  summary:
    "Senior Frontend Engineer with 8+ years of experience building scalable, high-performance web applications. Specialized in React, TypeScript, and modern build tooling with a strong focus on accessibility and user experience.",
  skills: [
    { category: "Frontend", item: "React, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS" },
    { category: "State & Data", item: "Redux Toolkit, React Query, Zustand, Context API" },
    { category: "Tooling", item: "Vite, Webpack, ESLint, Prettier, Git, CI/CD" },
  ],
  experiences: [
    {
      company: "TechCorp Solutions",
      role: "Senior Frontend Engineer",
      location: "Bengaluru, India",
      dates: "2021 — Present",
      achievements: [
        "Led migration of a 200k-line codebase from JavaScript to TypeScript, reducing runtime errors by 40%.",
        "Built a design-system component library adopted by 6 teams, cutting feature delivery time by 30%.",
        "Mentored 4 junior engineers and established front-end code review standards.",
      ],
    },
    {
      company: "Webify Technologies",
      role: "Frontend Developer",
      location: "Pune, India",
      dates: "2017 — 2021",
      achievements: [
        "Developed 15+ client-facing single-page applications using React and Redux.",
        "Improved Lighthouse performance scores from 62 to 94 by implementing code-splitting and lazy loading.",
        "Collaborated with designers to create accessible, WCAG 2.1 AA-compliant interfaces.",
      ],
    },
  ],
  educations: [
    {
      school: "Indian Institute of Technology, Delhi",
      date: "2013 — 2017",
      degree: "B.Tech in Computer Science",
    },
  ],
};

const DEFAULT_ORDER: SectionKey[] = ["summary", "skills", "experience", "education"];

export default function DocxTestPage() {
  const [order, setOrder] = useState<SectionKey[]>(DEFAULT_ORDER);
  const [generating, setGenerating] = useState(false);

  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= order.length) return;
    const next = [...order];
    [next[index], next[target]] = [next[target], next[index]];
    setOrder(next);
  };

  const handleDownload = async () => {
    setGenerating(true);
    try {
      await downloadDocx(SAMPLE_DATA, order);
    } finally {
      setGenerating(false);
    }
  };

  return (
    <main className="mx-auto max-w-2xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-foreground">DOCX Generation Test</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Temporary proof-of-concept for browser-only Word document generation.
        </p>
      </div>

      <Card className="mb-6 p-5">
        <h2 className="mb-4 text-sm font-semibold text-muted-foreground">
          Section Order
        </h2>
        <ul className="space-y-2">
          {order.map((key, index) => (
            <li
              key={key}
              className="flex items-center justify-between rounded-md border border-border bg-surface px-3 py-2.5"
            >
              <span className="text-sm font-medium text-foreground">
                {index + 1}. {SECTION_LABELS[key]}
              </span>
              <div className="flex gap-1">
                <button
                  type="button"
                  aria-label={`Move ${SECTION_LABELS[key]} up`}
                  disabled={index === 0}
                  onClick={() => move(index, -1)}
                  className="rounded p-1.5 text-muted-foreground transition hover:bg-surface-muted hover:text-foreground disabled:opacity-30"
                >
                  <ArrowUp size={16} />
                </button>
                <button
                  type="button"
                  aria-label={`Move ${SECTION_LABELS[key]} down`}
                  disabled={index === order.length - 1}
                  onClick={() => move(index, 1)}
                  className="rounded p-1.5 text-muted-foreground transition hover:bg-surface-muted hover:text-foreground disabled:opacity-30"
                >
                  <ArrowDown size={16} />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Card>

      <div className="flex justify-center">
        <Button size="lg" disabled={generating} onClick={handleDownload}>
          {generating ? (
            <LoaderCircle size={18} className="animate-spin" />
          ) : (
            <Download size={18} />
          )}
          {generating ? "Generating..." : "Test DOCX Download"}
        </Button>
      </div>

      <Card className="mt-8 p-5">
        <h2 className="mb-3 text-sm font-semibold text-muted-foreground">
          Sample Data Preview
        </h2>
        <div className="space-y-4 text-sm">
          <div>
            <p className="text-base font-bold text-foreground">{SAMPLE_DATA.name}</p>
            <p className="text-muted-foreground">{SAMPLE_DATA.phone} | {SAMPLE_DATA.email}</p>
          </div>
          {order.map((key) => (
            <div key={key}>
              <p className="font-semibold text-primary">{SECTION_LABELS[key]}</p>
              {key === "summary" && <p className="text-muted-foreground">{SAMPLE_DATA.summary}</p>}
              {key === "skills" && (
                <ul className="text-muted-foreground">
                  {SAMPLE_DATA.skills.map((s) => <li key={s.category}>{s.category}: {s.item}</li>)}
                </ul>
              )}
              {key === "experience" && (
                <ul className="text-muted-foreground">
                  {SAMPLE_DATA.experiences.map((e) => (
                    <li key={e.company}>{e.role} — {e.company} ({e.dates})</li>
                  ))}
                </ul>
              )}
              {key === "education" && (
                <ul className="text-muted-foreground">
                  {SAMPLE_DATA.educations.map((e) => <li key={e.school}>{e.school} — {e.date}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Card>
    </main>
  );
}
