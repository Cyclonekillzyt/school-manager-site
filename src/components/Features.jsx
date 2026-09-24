import Container from "./Container.jsx";
import { FEATURES } from "../data/features.jsx";

export default function Features() {
  return (
    <Container as="section" id="features" className="py-16 md:py-[68px]">
      <div className="mb-10 max-w-[58ch]">
        <div className="mb-2.5 text-[13px] font-semibold text-violet dark:text-violet-dark">What's inside</div>
        <h2 className="mb-3 font-display text-[25px] font-medium leading-[1.18] tracking-tight sm:text-[33px]">
          Everything a term of grading needs.
        </h2>
        <p className="text-[15.5px] leading-relaxed text-ink-soft dark:text-ink-dark-soft">
          Built around how Kwabenya MA2 already works — classes, terms, and assessments — not a generic gradebook
          bolted on afterward.
        </p>
      </div>

      <div className="border-t border-violet/15 dark:border-white/10">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="grid grid-cols-[44px_1fr] gap-5 border-b border-violet/15 py-[26px] dark:border-white/10"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-[11px] bg-violet/10 text-violet dark:bg-violet-dark/15 dark:text-violet-dark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-[19px] w-[19px]">
                {f.icon}
              </svg>
            </div>
            <div>
              <div className="flex items-baseline gap-2.5">
                <h3 className="m-0 text-[16px] font-bold tracking-tight">{f.title}</h3>
                <span className="ml-auto whitespace-nowrap pl-4 text-[11px] font-bold text-muted dark:text-muted-dark">
                  {f.tag}
                </span>
              </div>
              <p className="m-0 mt-1.5 max-w-[58ch] text-[14px] leading-relaxed text-ink-soft dark:text-ink-dark-soft">
                {f.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
