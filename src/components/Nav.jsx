import Container from "./Container.jsx";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-20 border-b border-violet/15 bg-paper/90 backdrop-blur-md dark:border-white/10 dark:bg-paper-dark/90"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <Container className="flex items-center justify-between py-3.5">
        <div className="flex items-center gap-2.5">
          <span className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-[9px] bg-gradient-to-br from-violet to-violet-deep text-[15px] text-white shadow-soft">
            🎓
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-[14.5px] font-bold">School Manager</span>
            <span className="text-[10.5px] font-medium text-muted dark:text-muted-dark">Kwabenya MA2</span>
          </div>
        </div>
        <a
          href="#download"
          className="inline-flex items-center gap-2 rounded-[10px] bg-ink px-4 py-2.5 text-[13px] font-semibold text-paper transition-opacity hover:opacity-85 dark:bg-ink-dark dark:text-paper-dark"
        >
          Download
        </a>
      </Container>
    </nav>
  );
}
