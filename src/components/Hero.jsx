import Container from "./Container.jsx";
import DownloadIcon from "./icons/DownloadIcon.jsx";
import ProgressRing from "./ProgressRing.jsx";

const TEACHERS = [
  { name: "K. Mensah", sub: "JHS 2A · Integrated Science", pct: "95%", color: "#22c55e" },
  { name: "A. Boateng", sub: "JHS 1B · English", pct: "61%", color: "#f472b6" },
];

export default function Hero() {
  return (
    <header className="py-16 md:py-[64px]">
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        <div>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet/15 bg-violet/10 py-1.5 pl-2 pr-3.5 text-[12.5px] font-semibold text-violet-deep dark:border-white/10 dark:bg-violet-dark/15 dark:text-violet-dark">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet text-[10px] font-extrabold text-white dark:bg-violet-dark dark:text-paper-dark">
              K
            </span>
            Built for Kwabenya MA2
          </span>

          <h1 className="mb-[18px] font-display text-[36px] font-medium leading-[1.08] tracking-tight sm:text-[44px] lg:text-[52px]">
            Manage smarter,
            <br />
            <em className="font-medium not-italic italic text-violet dark:text-violet-dark">teach better.</em>
          </h1>

          <p className="mb-8 max-w-[46ch] text-[16.5px] leading-relaxed text-ink-soft dark:text-ink-dark-soft">
            One app for gradebooks, class rosters, and rankings — made for Kwabenya MA2's own teachers, so grading
            takes minutes instead of a weekend.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2.5 rounded-2xl bg-violet px-6 py-[15px] text-[15px] font-bold text-white shadow-soft transition-transform hover:-translate-y-0.5 dark:bg-violet-dark dark:text-paper-dark dark:shadow-soft-dark"
            >
              <DownloadIcon />
              Download for Android
            </a>
            <a
              href="#install"
              className="border-b border-violet/15 pb-0.5 text-[14px] font-semibold text-ink-soft dark:border-white/10 dark:text-ink-dark-soft"
            >
              See installation steps
            </a>
          </div>

          <p className="mt-6 text-[12.5px] text-muted dark:text-muted-dark">
            Free for the school · Android 8.0 and up · No Play Store needed
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="animate-rise w-full max-w-[320px] rounded-[26px] border border-violet/15 bg-paper-raised p-[22px] shadow-soft dark:border-white/10 dark:bg-paper-dark-raised dark:shadow-soft-dark">
            <div className="mb-[18px] flex items-center justify-between">
              <div>
                <div className="text-[11.5px] text-muted dark:text-muted-dark">Good morning</div>
                <div className="mt-0.5 font-display text-[17px]">Hello, Ms. Owusu 👋</div>
              </div>
              <div className="h-[34px] w-[34px] flex-shrink-0 rounded-full bg-gradient-to-br from-amber-500 to-orange-500" />
            </div>

            <div className="mb-4 flex items-center gap-[18px] rounded-[18px] bg-violet/10 p-4 dark:bg-violet-dark/15">
              <ProgressRing size={60} strokeWidth={6} percent={80} label="80%" sub="done" />
              <div className="flex flex-1 flex-col gap-2">
                {[
                  ["Classwork", 92],
                  ["Groupwork", 74],
                  ["Project", 68],
                ].map(([label, pct]) => (
                  <div className="flex items-center gap-2" key={label}>
                    <span className="w-[58px] flex-shrink-0 text-[10px] text-ink-soft dark:text-ink-dark-soft">
                      {label}
                    </span>
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-violet/15 dark:bg-violet-dark/20">
                      <div className="h-full rounded-full bg-violet dark:bg-violet-dark" style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-2.5 text-[11px] font-bold text-ink-soft dark:text-ink-dark-soft">Other teachers</div>
            {TEACHERS.map((t, i) => (
              <div
                className={`flex items-center gap-2.5 py-2.5 ${i > 0 ? "border-t border-violet/15 dark:border-white/10" : ""}`}
                key={t.name}
              >
                <div className="h-[26px] w-[26px] flex-shrink-0 rounded-[9px]" style={{ background: t.color }} />
                <div className="flex-1">
                  <div className="text-[12px] font-bold">{t.name}</div>
                  <div className="mt-0.5 text-[10px] text-muted dark:text-muted-dark">{t.sub}</div>
                </div>
                <div className="text-[12px] font-extrabold text-violet dark:text-violet-dark">{t.pct}</div>
              </div>
            ))}
          </div>

          <div className="absolute -right-2 -top-4 hidden items-center gap-2 rounded-[14px] border border-violet/15 bg-paper-raised px-3.5 py-2.5 text-[11px] font-bold text-brand-green shadow-soft sm:flex dark:border-white/10 dark:bg-paper-dark-raised dark:text-brand-green-dark dark:shadow-soft-dark">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6 9 17l-5-5" />
            </svg>
            Scores saved
          </div>
          <div className="absolute -left-4 bottom-6 hidden items-center gap-2 rounded-[14px] border border-violet/15 bg-paper-raised px-3.5 py-2.5 text-[11px] font-bold text-amber-600 shadow-soft sm:flex dark:border-white/10 dark:bg-paper-dark-raised dark:text-brand-amber-dark dark:shadow-soft-dark">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 20V10" />
              <path d="M18 20V4" />
              <path d="M6 20v-4" />
            </svg>
            Rankings updated
          </div>
        </div>
      </Container>
    </header>
  );
}
