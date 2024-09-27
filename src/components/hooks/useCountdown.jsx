import { useEffect, useState } from "react";

export default function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const dayNumber = 1000 * 60 * 60 * 24;
    const hourNumber = 1000 * 60 * 60;
    const minuteNumber = 1000 * 60;
    const secondNumber = 1000;

    const countdownTimer = new Date(targetDate).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownTimer - now;

      if (distance >= 0) {
        const days = Math.floor(distance / dayNumber);
        const hours = Math.floor((distance % dayNumber) / hourNumber);
        const minutes = Math.floor((distance % hourNumber) / minuteNumber);
        const seconds = Math.floor((distance % minuteNumber) / secondNumber);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}
