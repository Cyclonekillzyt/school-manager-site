export default function DownloadChip() {
  return (
    <div className="w-[202px] flex-shrink-0 rounded-2xl border border-violet/15 bg-paper p-3 shadow-soft dark:border-white/10 dark:bg-paper-dark dark:shadow-soft-dark">
      <div className="mb-2 text-center text-[9px] font-bold text-muted dark:text-muted-dark">Your browser</div>
      <div className="mb-2 flex items-center gap-1.5 rounded-lg border border-violet/15 bg-paper-raised px-2 py-1.5 text-[8px] text-muted dark:border-white/10 dark:bg-paper-dark-raised dark:text-muted-dark">
        <span className="h-1.5 w-1.5 rounded-full bg-violet/15 dark:bg-white/10" />
        <span className="h-1.5 w-1.5 rounded-full bg-violet/15 dark:bg-white/10" />
        school-manager.apk
      </div>
      <div className="flex items-center gap-2 rounded-lg border border-violet/15 bg-paper-raised p-2.5 dark:border-white/10 dark:bg-paper-dark-raised">
        <div className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-lg bg-violet/10 text-violet dark:bg-violet-dark/15 dark:text-violet-dark">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
            <path d="M12 3v12" />
            <path d="m7 10 5 5 5-5" />
          </svg>
        </div>
        <div className="flex-1">
          <div className="text-[8.5px] font-bold">school-manager.apk</div>
          <div className="mt-1 h-1 overflow-hidden rounded-full bg-violet/15 dark:bg-violet-dark/20">
            <div className="h-full w-[72%] rounded-full bg-violet dark:bg-violet-dark" />
          </div>
        </div>
      </div>
    </div>
  );
}
