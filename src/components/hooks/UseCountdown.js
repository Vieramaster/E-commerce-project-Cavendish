import { useState, useEffect } from "react";

export default function UseCountdown(targetDate) {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const dayNumber = 1000 * 60 * 60 * 24;
  const hourNumber = 1000 * 60 * 60;
  const minuteNumber = 1000 * 60;

  return {
    days: Math.floor(countDown / dayNumber),
    hours: Math.floor((countDown % dayNumber) / hourNumber),
    minutes: Math.floor((countDown % hourNumber) / minuteNumber),
    seconds: Math.floor((countDown % minuteNumber) / 1000),
  };
}
