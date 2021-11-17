import { Cb, EventType, MotionType, ResultState } from "../types/types";

export interface HandleEvent {
  addEvent(eventInfo: EventType, cb: Cb): ResultState;
}

export interface DomAction {
  addMotion(
    e: any,
    type: MotionType,
    body: HTMLInputElement,
    title: HTMLInputElement
  ): void;
}
