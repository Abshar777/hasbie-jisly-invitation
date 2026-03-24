import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface RollingNumberProps {
  value: number;
}

const RollingNumber = ({ value }: RollingNumberProps) => {
  return (
    <div className="relative h-12 w-8 overflow-hidden flex justify-center items-center bg-maroon/5 rounded-md border border-gold/20 shadow-inner">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={value}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="absolute font-serif text-3xl font-bold text-maroon"
        >
          {value}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

interface CountdownUnitProps {
  label: string;
  value: number;
}

const CountdownUnit = ({ label, value }: CountdownUnitProps) => {
  const tens = Math.floor(value / 10);
  const ones = value % 10;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-1">
        <RollingNumber value={tens} />
        <RollingNumber value={ones} />
      </div>
      <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-gold/80">{label}</span>
    </div>
  );
};

export const Countdown = ({ targetDate }: { targetDate: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-8 justify-center items-center p-4 sm:p-6 bg-white/40 backdrop-blur-sm rounded-2xl border border-gold/10 shadow-xl">
      <CountdownUnit label="Days" value={timeLeft.days} />
      <CountdownUnit label="Hours" value={timeLeft.hours} />
      <CountdownUnit label="Mins" value={timeLeft.minutes} />
      <CountdownUnit label="Secs" value={timeLeft.seconds} />
    </div>
  );
};
