import Container from "./Container.jsx";
import { STEPS } from "../data/steps.jsx";

export default function InstallSteps() {
  return (
    <section id="install" className="border-y border-violet/15 bg-paper-raised dark:border-white/10 dark:bg-paper-dark-raised">
      <Container className="py-16 md:py-[68px]">
        <div className="mb-10 max-w-[58ch]">
          <div className="mb-2.5 text-[13px] font-semibold text-violet dark:text-violet-dark">Getting set up</div>
          <h2 className="mb-3 font-display text-[25px] font-medium leading-[1.18] tracking-tight sm:text-[33px]">
            Install it in four steps.
          </h2>
          <p className="text-[15.5px] leading-relaxed text-ink-soft dark:text-ink-dark-soft">
            The app isn't on the Play Store yet, so it installs directly from the file below — this is completely
            normal for a school-internal app. Pictures below show roughly what each step looks like.
          </p>
        </div>

        <div className="flex flex-col">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative grid grid-cols-[40px_1fr] gap-5 pb-10 last:pb-0">
              <div>
                <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-violet bg-paper-raised font-display text-[16px] font-semibold text-violet dark:border-violet-dark dark:bg-paper-dark-raised dark:text-violet-dark">
                  {i + 1}
                </div>
                {i < STEPS.length - 1 && (
                  <div className="absolute bottom-[-40px] left-[19px] top-10 w-px bg-violet/15 dark:bg-white/10" />
                )}
              </div>
              <div className="flex flex-wrap items-start gap-[26px]">
                <div className="min-w-[230px] flex-1">
                  <div className="mb-1.5 mt-1.5 text-[15.5px] font-bold">{s.title}</div>
                  <div className="max-w-[52ch] text-[14px] leading-relaxed text-ink-soft dark:text-ink-dark-soft">
                    {s.body}
                  </div>
                </div>
                <s.Chip />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-11 flex items-start gap-3.5 rounded-2xl border border-violet/15 bg-violet/10 px-5 py-[18px] dark:border-white/10 dark:bg-violet-dark/15">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 h-[18px] w-[18px] flex-shrink-0 text-violet dark:text-violet-dark">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
          <p className="m-0 text-[13.5px] leading-relaxed text-ink-soft dark:text-ink-dark-soft">
            <strong className="text-ink dark:text-ink-dark">Using an iPhone?</strong> iOS installs work differently
            and need a separate invite — check with your admin for the current iOS access option.{" "}
            <strong className="text-ink dark:text-ink-dark">Screens may look slightly different</strong> depending on
            your phone's brand and Android version, but the buttons will say roughly the same thing.
          </p>
        </div>
      </Container>
    </section>
  );
}
