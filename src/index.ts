import "./scss/reset";
import "./scss/main";
import { HandleEvent } from "./interface/Interfaces";
import HandleEventImpl from "./module/HandleEvent";
import Callbacks from "./module/Callback";
// https://picsum.photos/300/100
const modalTitles = {
  imageTitle: (<HTMLInputElement>(
    document.querySelector(".modal-image__title")
  ))!,
  videoTitle: (<HTMLInputElement>(
    document.querySelector(".modal-video__title")
  ))!,
  noteTitle: (<HTMLInputElement>document.querySelector(".modal-note__title"))!,
  taskeTitle: (<HTMLInputElement>document.querySelector(".modal-task__title"))!,
};

const modalBodys = {
  imageBody: (<HTMLInputElement>document.querySelector(".modal-image__body"))!,
  videoBody: (<HTMLInputElement>document.querySelector(".modal-video__body"))!,
  noteBody: (<HTMLInputElement>document.querySelector(".modal-note__body"))!,
  taskeBody: (<HTMLInputElement>document.querySelector(".modal-task__body"))!,
};
// main

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
handler.addEvent(
  { selector: ".modal-image__btn", eventName: "click" },
  Callbacks.addMotion("image", modalTitles.imageTitle, modalBodys.imageBody)
);
handler.addEvent(
  { selector: ".modal-video__btn", eventName: "click" },
  Callbacks.addMotion("video", modalTitles.videoTitle, modalBodys.videoBody)
);
// handler.addEvent(
//   { selector: ".modal-image__btn", eventName: "click" },
//   Callbacks.addMotion("image", modalTitles.imageTitle, modalBodys.imageBody)
// );
// handler.addEvent(
//   { selector: ".modal-image__btn", eventName: "click" },
//   Callbacks.addMotion("image", modalTitles.imageTitle, modalBodys.imageBody)
// );
