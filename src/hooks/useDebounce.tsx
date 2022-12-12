import { useEffect } from "react";
import useTimeout from "./useTimeout";

export default function useDebounce(
  /** Callback that must be fired after timeout */
  callback: () => any,
  /** Delay in milliseconds, after which callback is fired */
  delay: number,
  /** Dependencies, change of which resets the timer */
  dependencies: any[]
) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);

  // We want to clear out function the very first time
  // Thus it won't lauch the callback on the first iteration because it's not needed
  useEffect(clear, []);
}
