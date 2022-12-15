import { useState, useEffect } from "react";

function getSavedValue<T>(key: string, initialValue: T) {
  const savedValue = JSON.parse(localStorage.getItem(key) ?? "null");
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorage<T>(
  /** Key used to add and obtain data from local storage */
  key: string,
  /** Initial value for the state */
  initialValue: T
) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}
