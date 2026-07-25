import { useEffect, useState } from "react";

interface CountdownTimerProps {
  endsInDays: number;
}

function getTimeLeft(target: number) {
  const diff = Math.max(target - Date.now(), 0);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function CountdownTimer({ endsInDays }: CountdownTimerProps) {
  const [target] = useState(() => Date.now() + endsInDays * 24 * 60 * 60 * 1000);
  const [time, setTime] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(t);
  }, [target]);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hrs", value: time.hours },
    { label: "Min", value: time.minutes },
    { label: "Sec", value: time.seconds },
  ];

  return (
    <div className="flex gap-2" role="timer" aria-label="Offer ends in">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center rounded-xl bg-charcoal/80 dark:bg-white/10 px-2.5 py-1.5 min-w-[48px]">
          <span className="font-display text-lg font-bold text-gold-300 tabular-nums">
            {String(u.value).padStart(2, "0")}
          </span>
          <span className="text-[9px] uppercase tracking-wider text-ivory/60">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
