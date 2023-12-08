import { useEffect } from "react";

export const useInterval = (callback: () => void, time: number, dep?: []) => {
  useEffect(() => {
    const interval = setInterval(() => {
      callback();
    }, time);
    return () => clearInterval(interval);
  }, dep || []);
};
