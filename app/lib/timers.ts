import { useEffect, useState } from 'react';

export const useNow = (intervalMs: number, enabled: number): number | undefined => {
  const [now, setNow] = useState<number>();

  useEffect(() => {
    if (!enabled) {
      setNow(undefined);
      return;
    }

    const intervalID = setInterval(() => {
      setNow(Date.now());
    }, intervalMs);

    return () => {
      clearInterval(intervalID);
    };
  }, [intervalMs, enabled]);

  return now;
};

export const useInterval = (ms, enabled, callback) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const intervalID = setInterval(() => {
      callback(Date.now());
    }, ms);

    return () => clearInterval(intervalID);
  }, [ms, enabled]);
};
