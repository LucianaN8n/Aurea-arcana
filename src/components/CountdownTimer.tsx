import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  targetIsoDate: string;
  compact?: boolean;
  onExpire?: () => void;
}

interface TimeLeft {
  expired: boolean;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(targetIsoDate: string): TimeLeft {
  const targetTime = new Date(targetIsoDate).getTime();
  const now = Date.now();
  const diff = targetTime - now;

  if (isNaN(targetTime) || diff <= 0) {
    return { expired: true, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    expired: false,
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetIsoDate,
  compact = false,
  onExpire,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft(targetIsoDate));

  useEffect(() => {
    const initial = calculateTimeLeft(targetIsoDate);
    setTimeLeft(initial);
    if (initial.expired && onExpire) {
      onExpire();
    }

    const timer = setInterval(() => {
      const updated = calculateTimeLeft(targetIsoDate);
      setTimeLeft(updated);
      if (updated.expired) {
        if (onExpire) onExpire();
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetIsoDate, onExpire]);

  if (timeLeft.expired) {
    return (
      <div className="inline-flex items-center gap-2 border border-[#7A1C2E]/60 bg-[#5C1624]/20 px-4 py-2 text-xs font-semibold tracking-wider text-[#F4EFE6]">
        <span className="h-2 w-2 rounded-full bg-[#C93B52]" aria-hidden="true" />
        <span>INSCRIÇÕES ENCERRADAS</span>
      </div>
    );
  }

  const pad = (n: number) => String(n).padStart(2, '0');

  if (compact) {
    return (
      <div className="font-mono-tabular flex items-center gap-2 text-xs text-[#D4AF37]">
        <span>{pad(timeLeft.days)}d</span>
        <span>:</span>
        <span>{pad(timeLeft.hours)}h</span>
        <span>:</span>
        <span>{pad(timeLeft.minutes)}m</span>
        <span>:</span>
        <span>{pad(timeLeft.seconds)}s</span>
      </div>
    );
  }

  return (
    <div aria-label="Contador regressivo para encerramento das inscrições">
      <p className="mb-2 text-xs uppercase tracking-widest text-[#A6A29A]">
        Tempo restante para fechamento do Livro de Consagração:
      </p>
      <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-md">
        <div className="border border-[#D4AF37]/25 bg-[#0B0F19]/90 px-3 py-2.5 text-center">
          <div className="font-mono-tabular text-xl sm:text-2xl font-medium text-[#D4AF37]">
            {pad(timeLeft.days)}
          </div>
          <div className="mt-0.5 text-[11px] uppercase tracking-wider text-[#A6A29A]">Dias</div>
        </div>
        <div className="border border-[#D4AF37]/25 bg-[#0B0F19]/90 px-3 py-2.5 text-center">
          <div className="font-mono-tabular text-xl sm:text-2xl font-medium text-[#D4AF37]">
            {pad(timeLeft.hours)}
          </div>
          <div className="mt-0.5 text-[11px] uppercase tracking-wider text-[#A6A29A]">Horas</div>
        </div>
        <div className="border border-[#D4AF37]/25 bg-[#0B0F19]/90 px-3 py-2.5 text-center">
          <div className="font-mono-tabular text-xl sm:text-2xl font-medium text-[#D4AF37]">
            {pad(timeLeft.minutes)}
          </div>
          <div className="mt-0.5 text-[11px] uppercase tracking-wider text-[#A6A29A]">Min</div>
        </div>
        <div className="border border-[#D4AF37]/25 bg-[#0B0F19]/90 px-3 py-2.5 text-center">
          <div className="font-mono-tabular text-xl sm:text-2xl font-medium text-[#D4AF37]">
            {pad(timeLeft.seconds)}
          </div>
          <div className="mt-0.5 text-[11px] uppercase tracking-wider text-[#A6A29A]">Seg</div>
        </div>
      </div>
    </div>
  );
};
