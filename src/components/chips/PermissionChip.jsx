export default function PermissionChip() {
  return (
    <div className="w-[202px] flex-shrink-0 rounded-2xl border border-violet/15 bg-paper p-3 shadow-soft dark:border-white/10 dark:bg-paper-dark dark:shadow-soft-dark">
      <div className="mb-2 text-center text-[9px] font-bold text-muted dark:text-muted-dark">Install unknown apps</div>
      <div className="mb-1.5 flex items-center justify-between rounded-lg border border-violet/15 bg-paper-raised px-2.5 py-2 dark:border-white/10 dark:bg-paper-dark-raised">
        <span className="text-[9px] font-semibold">Chrome</span>
        <span className="relative h-[15px] w-[26px] flex-shrink-0 rounded-full bg-brand-green dark:bg-brand-green-dark">
          <span className="absolute right-0.5 top-0.5 h-[11px] w-[11px] rounded-full bg-white" />
        </span>
      </div>
      <div className="rounded-md bg-violet/10 px-1.5 py-1 text-[8px] font-semibold text-violet-deep dark:bg-violet-dark/15 dark:text-violet-dark">
        ✓ Allowed from this source
      </div>
    </div>
  );
}
