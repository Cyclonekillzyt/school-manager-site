export default function InstallDialogChip() {
  return (
    <div className="w-[202px] flex-shrink-0 rounded-2xl border border-violet/15 bg-paper p-3 shadow-soft dark:border-white/10 dark:bg-paper-dark dark:shadow-soft-dark">
      <div className="mb-2 text-center text-[9px] font-bold text-muted dark:text-muted-dark">Install app?</div>
      <div className="rounded-lg border border-violet/15 bg-paper-raised px-2.5 py-3 text-center dark:border-white/10 dark:bg-paper-dark-raised">
        <div className="mx-auto mb-2 flex h-[30px] w-[30px] items-center justify-center rounded-lg bg-gradient-to-br from-violet to-violet-deep text-sm text-white">
          🎓
        </div>
        <div className="mb-2.5 text-[8.5px] leading-relaxed text-ink-soft dark:text-ink-dark-soft">
          Do you want to install School Manager?
        </div>
        <div className="flex gap-1.5">
          <div className="flex-1 rounded-md bg-violet/10 py-1.5 text-[8.5px] font-bold text-muted dark:bg-violet-dark/15 dark:text-muted-dark">
            Cancel
          </div>
          <div className="flex-1 rounded-md bg-violet py-1.5 text-[8.5px] font-bold text-white dark:bg-violet-dark">
            Install
          </div>
        </div>
      </div>
    </div>
  );
}
