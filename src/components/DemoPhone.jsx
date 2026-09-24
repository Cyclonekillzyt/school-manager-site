import { useEffect, useRef, useState } from "react";
import Container from "./Container.jsx";
import ProgressRing from "./ProgressRing.jsx";
import { CAPTIONS } from "../data/demoCaptions.js";

const OTHER_TEACHERS = [
  { name: "K. Mensah", pct: "95%", color: "#22c55e" },
  { name: "A. Boateng", pct: "61%", color: "#f472b6" },
  { name: "Y. Asante", pct: "78%", color: "#60a5fa" },
];

const SCORE_ROWS = [
  { name: "Ama Serwaa", score: "27" },
  { name: "Kojo Antwi", score: "24" },
  { name: "Efua Mensah", score: "30" },
  { name: "Yaw Darko", score: "—" },
];

function ScreenLogin({ active }) {
  return (
    <div className={`phone-screen absolute inset-0 flex flex-col bg-paper-raised dark:bg-paper-dark-raised ${active ? "opacity-100" : "opacity-0"}`}>
      <div className="bg-gradient-to-br from-violet to-violet-deep px-[18px] pb-5 pt-[30px] text-center text-white">
        <div className="mx-auto mb-2.5 flex h-11 w-11 items-center justify-center rounded-[13px] bg-white/20 text-xl">
          🎓
        </div>
        <div className="font-display text-[15px]">School Manager</div>
        <div className="mt-1 text-[9.5px] opacity-75">Manage smarter, teach better</div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-[18px]">
        <div>
          <div className="mb-1 text-[9px] font-bold text-ink-soft dark:text-ink-dark-soft">EMAIL</div>
          <div className="rounded-[10px] border border-violet/20 px-2.5 py-2 text-[10px] text-muted dark:border-white/10 dark:text-muted-dark">
            m.owusu@kwabenyama2.edu
          </div>
        </div>
        <div>
          <div className="mb-1 text-[9px] font-bold text-ink-soft dark:text-ink-dark-soft">PASSWORD</div>
          <div className="rounded-[10px] border border-violet/20 px-2.5 py-2 text-[10px] text-muted dark:border-white/10 dark:text-muted-dark">
            ••••••••
          </div>
        </div>
        <div className="mt-2 rounded-[11px] bg-violet py-2.5 text-center text-[11px] font-bold text-white dark:bg-violet-dark dark:text-paper-dark">
          LOG IN
        </div>
      </div>
    </div>
  );
}

function ScreenDashboard({ active }) {
  return (
    <div className={`phone-screen absolute inset-0 flex flex-col bg-paper-raised dark:bg-paper-dark-raised ${active ? "opacity-100" : "opacity-0"}`}>
      <div className="flex flex-1 flex-col p-[18px]">
        <div className="text-[9px] text-muted dark:text-muted-dark">Good morning</div>
        <div className="mb-3.5 mt-0.5 font-display text-[14px]">Hello, Ms. Owusu 👋</div>
        <div className="mb-3.5 flex items-center gap-3 rounded-[14px] bg-violet/10 p-3 dark:bg-violet-dark/15">
          <ProgressRing size={44} strokeWidth={5} percent={80} />
          <div className="flex flex-1 flex-col gap-1.5">
            {[88, 70, 60].map((pct, i) => (
              <div key={i} className="h-[5px] overflow-hidden rounded-full bg-violet/15 dark:bg-violet-dark/20">
                <div className="h-full rounded-full bg-violet dark:bg-violet-dark" style={{ width: `${pct}%` }} />
              </div>
            ))}
          </div>
        </div>
        <div className="mb-2 text-[9px] font-bold text-ink-soft dark:text-ink-dark-soft">Other teachers</div>
        {OTHER_TEACHERS.map((t, i) => (
          <div key={t.name} className={`flex items-center gap-2 py-1.5 ${i > 0 ? "border-t border-violet/15 dark:border-white/10" : ""}`}>
            <div className="h-5 w-5 flex-shrink-0 rounded-[7px]" style={{ background: t.color }} />
            <div className="text-[9.5px] font-bold">{t.name}</div>
            <div className="ml-auto text-[9.5px] font-extrabold text-violet dark:text-violet-dark">{t.pct}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenScoreEntry({ active }) {
  return (
    <div className={`phone-screen absolute inset-0 flex flex-col bg-paper-raised dark:bg-paper-dark-raised ${active ? "opacity-100" : "opacity-0"}`}>
      <div className="flex gap-1.5 px-3.5 pt-3">
        {["Classwork", "Groupwork", "Test"].map((tab, i) => (
          <div
            key={tab}
            className={`rounded-lg px-2 py-1.5 text-[8px] font-bold ${
              i === 0
                ? "bg-violet text-white dark:bg-violet-dark dark:text-paper-dark"
                : "bg-violet/10 text-ink-soft dark:bg-violet-dark/15 dark:text-ink-dark-soft"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="mx-3.5 mb-1 mt-3 flex justify-between text-[8.5px] font-bold text-ink-soft dark:text-ink-dark-soft">
        <span>Student</span>
        <span>Score</span>
      </div>
      {SCORE_ROWS.map((row, i) => (
        <div key={row.name} className={`flex items-center justify-between px-3.5 py-2 ${i > 0 ? "border-t border-violet/15 dark:border-white/10" : ""}`}>
          <span className="text-[9.5px] font-semibold">{row.name}</span>
          <span className="flex h-[22px] w-[34px] items-center justify-center rounded-md border border-violet bg-violet/10 text-[9px] font-bold text-violet-deep dark:border-violet-dark dark:bg-violet-dark/15 dark:text-violet-dark">
            {row.score}
          </span>
        </div>
      ))}
      <div className="mx-3.5 mb-4 mt-auto rounded-[10px] bg-violet py-2.5 text-center text-[10.5px] font-bold text-white dark:bg-violet-dark dark:text-paper-dark">
        Save Changes
      </div>
    </div>
  );
}

function ScreenSaved({ active }) {
  return (
    <div className={`phone-screen absolute inset-0 flex flex-col items-center justify-center gap-3 bg-paper-raised p-5 text-center dark:bg-paper-dark-raised ${active ? "opacity-100" : "opacity-0"}`}>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/15 text-brand-green dark:bg-brand-green-dark/20 dark:text-brand-green-dark">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <div className="text-[13px] font-extrabold">Scores saved</div>
      <div className="text-[10px] text-muted dark:text-muted-dark">28 students updated · JHS 2A Science</div>
    </div>
  );
}

const SCREENS = [ScreenLogin, ScreenDashboard, ScreenScoreEntry, ScreenSaved];

export default function DemoPhone() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const start = () => {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % CAPTIONS.length);
    }, 3400);
  };

  useEffect(() => {
    start();
    return () => clearInterval(timerRef.current);
  }, []);

  const goTo = (i) => {
    setActive(i);
    start();
  };

  return (
    <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-[52px]">
      <div className="relative mx-auto h-[482px] w-[236px] overflow-hidden rounded-[36px] border-8 border-ink bg-ink dark:border-ink-dark dark:bg-ink-dark">
        <div className="absolute left-1/2 top-1.5 z-10 h-1.5 w-[60px] -translate-x-1/2 rounded-full bg-black/40" />
        {SCREENS.map((Screen, i) => (
          <Screen key={i} active={active === i} />
        ))}
      </div>

      <div className="text-center md:text-left">
        <div className="mb-2.5 text-[13px] font-semibold text-violet dark:text-violet-dark">See it in action</div>
        <h2 className="mb-4 font-display text-[25px] font-medium leading-[1.18] tracking-tight sm:text-[33px]">
          A quick walk through the app.
        </h2>
        <p className="min-h-[46px] text-[15px] font-semibold">{CAPTIONS[active]}</p>
        <div className="mt-[18px] flex justify-center gap-2 md:justify-start">
          {CAPTIONS.map((_, i) => (
            <button
              key={i}
              className={`h-1 w-[22px] rounded-full border-0 p-0 transition-colors ${
                active === i ? "bg-violet dark:bg-violet-dark" : "bg-violet/15 dark:bg-white/10"
              }`}
              aria-label={`Screen ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
        <p className="mx-auto mt-[22px] max-w-[42ch] text-[12.5px] leading-relaxed text-muted dark:text-muted-dark md:mx-0">
          This is an animated preview built from the real app's screens, not a screen recording — a good way to get
          the idea before you install.
        </p>
      </div>
    </Container>
  );
}
