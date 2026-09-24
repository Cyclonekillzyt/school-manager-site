export default function SignInChip() {
  return (
    <div className="w-[202px] flex-shrink-0 rounded-2xl border border-violet/15 bg-paper p-3 shadow-soft dark:border-white/10 dark:bg-paper-dark dark:shadow-soft-dark">
      <div className="mb-2 text-center text-[9px] font-bold text-muted dark:text-muted-dark">Sign in</div>
      <div className="overflow-hidden rounded-lg border border-violet/15 bg-paper-raised dark:border-white/10 dark:bg-paper-dark-raised">
        <div className="bg-gradient-to-br from-violet to-violet-deep py-3 text-center text-[9px] font-bold text-white">
          🎓 School Manager
        </div>
        <div className="flex flex-col gap-1.5 p-2.5">
          <div className="rounded-md border border-violet/15 px-1.5 py-1.5 text-[8px] text-muted dark:border-white/10 dark:text-muted-dark">
            Email
          </div>
          <div className="rounded-md border border-violet/15 px-1.5 py-1.5 text-[8px] text-muted dark:border-white/10 dark:text-muted-dark">
            Password
          </div>
          <div className="mt-0.5 rounded-md bg-violet py-1.5 text-center text-[8.5px] font-bold text-white dark:bg-violet-dark">
            LOG IN
          </div>
        </div>
      </div>
    </div>
  );
}
