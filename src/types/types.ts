export type EventType = {
  selector: string;
  eventName: string;
};

export type Cb = (this: Element, ev: Event) => void;

// Error State
type EventAddErrorState = {
  result: "fail";
  reason: "noSelector";
};

type SuccessState = {
  result: "success";
};

export type ResultState = EventAddErrorState | SuccessState;

export type MotionType = "image" | "video" | "note" | "task";
