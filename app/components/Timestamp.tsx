"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return new Date().getFullYear();
}

function getServerSnapshot() {
  return null;
}

export default function Timestamp() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return time;
}
