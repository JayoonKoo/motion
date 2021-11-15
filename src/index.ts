// Error State
type EventAddErrorState = {
  result: "fail";
  reason: "noSelector";
};

type SuccessState = {
  result: "success";
};

type ResultState = EventAddErrorState | SuccessState;

// HandleEvent
type EventType = {
  selector: string;
  eventName: keyof ElementEventMap;
};

type Cb = (this: Element, ev: Event) => void;

interface HandleEvent {
  addEvent(eventInfo: EventType, cb: Cb): ResultState;
}

class HandleEventImpl implements HandleEvent {
  private events: EventType[] = [];

  addEvent = (eventInfo: EventType, cb: Cb): ResultState => {
    const { selector, eventName } = eventInfo;
    const el = document.querySelector(selector);
    if (el === null) {
      return {
        result: "fail",
        reason: "noSelector",
      };
    }
    el.addEventListener(eventName, cb);
    this.events.push(eventInfo);
    return {
      result: "success",
    };
  };
}

// MakeElement
interface MakeElement {}
class MakeElementImpl implements MakeElement {}

// AddDom
interface AddDom {}

class AddDomImpl implements AddDom {}
