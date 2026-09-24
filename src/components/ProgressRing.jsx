export default function ProgressRing({ size = 60, strokeWidth = 6, percent = 80, label, sub }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - percent / 100);

  return (
    <div className="relative flex-shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          className="stroke-violet/15 dark:stroke-violet-dark/20"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="stroke-violet dark:stroke-violet-dark"
        />
      </svg>
      {(label || sub) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {label && <div className="text-[13px] font-extrabold text-violet dark:text-violet-dark">{label}</div>}
          {sub && <div className="text-[8px] text-muted dark:text-muted-dark">{sub}</div>}
        </div>
      )}
    </div>
  );
}
