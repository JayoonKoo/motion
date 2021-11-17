import "./scss/reset";
import "./scss/main";
import { HandleEvent } from "./interface/Interfaces";
import HandleEventImpl from "./module/HandleEvent";
import Callbacks from "./module/Callback";

interface MakeElement {}
class MakeElementImpl implements MakeElement {}
// AddDom
interface AddDom {}
class AddDomImpl implements AddDom {}

// main
const btn_class = [
  ".header__btn-image",
  ".header__btn-video",
  ".header__btn-note",
  ".header__btn-task",
];

const handler: HandleEvent = new HandleEventImpl();
handler.addEvent(
  { selector: ".header__btn-image", eventName: "click" },
  Callbacks.handleImageClick
);
handler.addEvent(
  { selector: ".header__btn-video", eventName: "click" },
  Callbacks.handleVideoClick
);
handler.addEvent(
  { selector: ".header__btn-note", eventName: "click" },
  Callbacks.handleNoteClick
);
handler.addEvent(
  { selector: ".header__btn-task", eventName: "click" },
  Callbacks.handleTaskClick
);
handler.addEvent(
  {
    selector: ".modal",
    eventName: "click",
  },
  Callbacks.initModal
);
handler.addEvent(
  { selector: ".close-btn", eventName: "click" },
  Callbacks.initModal
);
