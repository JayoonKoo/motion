import { HandleEvent } from "../interface/Interfaces";
import { Cb, EventType, ResultState } from "../types/types";

class HandleEventImpl implements HandleEvent {
  private events: EventType[] = [];

  addEvent = (eventInfo: EventType, cb: Cb): ResultState => {
    const { selector, eventName } = eventInfo;
    const els = document.querySelectorAll(selector);

    if (els === null) {
      return {
        result: "fail",
        reason: "noSelector",
      };
    }
    Array.from(els).forEach((el) => {
      el.addEventListener(eventName, cb);
    });

    this.events.push(eventInfo);
    return {
      result: "success",
    };
  };
}

export default HandleEventImpl;
