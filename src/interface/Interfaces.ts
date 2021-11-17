import { Cb, EventType, ResultState } from "../types/types";

export interface HandleEvent {
  addEvent(eventInfo: EventType, cb: Cb): ResultState;
}
