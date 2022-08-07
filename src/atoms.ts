import { atom } from "recoil";
import { CounterTracking } from "./types";

export const counterTrackingState = atom<CounterTracking>({
    key: 'counterTrackingState',
    default: { isRunning: false },
  });