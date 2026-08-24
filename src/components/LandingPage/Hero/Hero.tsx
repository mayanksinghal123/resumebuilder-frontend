import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useRequireAuth } from "../../../hooks/useRequireAuth";
import { Button } from "../../ui/Button";
const lines = [
  "100%",
  "85%",
  "95%",
  "75%",
  "90%",
  "100%",
  "80%",
  "92%",
  "70%",
  "100%",
  "88%",
  "95%",
];
export default function Hero() {
  const { requireAuth } = useRequireAuth();
  return (
    <main className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:min-h-[calc(100vh-72px)] md:grid-cols-2 md:py-8 lg:px-8">
      <section>
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
          <Sparkles size={16} />
          AI-powered resume builder
        </div>
        <h1 className="max-w-2xl text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl">
          Build a <span className="text-primary">professional resume</span> in
          minutes
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          Create ATS-friendly resumes using beautiful templates and AI-powered
          suggestions that help you stand out.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button size="lg" onClick={() => requireAuth()}>
            Create Resume Free <ArrowRight size={18} />
          </Button>
          <Button size="lg" variant="outline">
            Browse Templates
          </Button>
        </div>
        <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
          <Check size={16} className="text-success" /> No credit card required
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {["ATS Friendly", "AI Powered", "PDF Export"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
            >
              {item}
            </span>
          ))}
        </div>
      </section>
      <section className="relative flex min-h-[430px] items-center justify-center">
        <div className="absolute h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative z-10 h-[390px] w-full max-w-[360px] rounded-xl border border-border bg-card p-6 shadow-2xl sm:h-[500px] sm:max-w-[420px]">
          <h2 className="text-xl font-bold">John Anderson</h2>
          <p className="mb-7 text-sm text-muted-foreground">
            Senior Frontend Engineer
          </p>
          {lines.map((width, index) => (
            <div
              key={index}
              className="mb-3 h-2.5 rounded-full bg-muted"
              style={{ width }}
            />
          ))}
          <div className="mt-8 h-2.5 w-2/3 rounded-full bg-primary/30" />
        </div>
        <div className="absolute left-0 top-10 z-20 rounded-xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur">
          <p className="text-xs text-muted-foreground">ATS Score</p>
          <p className="mt-1 text-3xl font-extrabold text-success">92%</p>
        </div>
        <div className="absolute bottom-8 right-0 z-20 w-48 rounded-xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur">
          <p className="font-semibold">AI Suggestions</p>
          <p className="mt-2 text-xs text-muted-foreground">
            Improve summary
            <br />
            Add achievements
            <br />
            Optimize keywords
          </p>
        </div>
      </section>
    </main>
  );
}
