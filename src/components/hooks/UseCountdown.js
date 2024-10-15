import { useEffect, useMemo, useState } from "react";

const MILLISECOND = 1_000;
const MINUTE = MILLISECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

export const currentMilliseconds = () => new Date().getTime();

/**
 * @param {number | string | Date} targetDate
 */
export const useCountdown = (targetDate) => {
  const targetMilliseconds = useMemo(
    () => new Date(targetDate).getTime(),
    [targetDate]
  );
  const [countdown, setCountdown] = useState(
    targetMilliseconds - currentMilliseconds()
  );

  useEffect(() => {
    const interval = setInterval(
      () => setCountdown(targetMilliseconds - currentMilliseconds()),
      500
    );

    return () => clearInterval(interval);
  }, [targetMilliseconds]);

  return useMemo(
    () => ({
      days: Math.floor(countdown / DAY),
      hours: Math.floor((countdown % DAY) / HOUR),
      minutes: Math.floor((countdown % HOUR) / MINUTE),
      seconds: Math.floor((countdown % MINUTE) / MILLISECOND),
    }),
    [countdown]
  );
};
