import { DomAction } from "../interface/Interfaces";
import { MotionType } from "../types/types";
import DomActionImpl from "./DomAction";

const imageModal = document.querySelector(".modal-image")!;
const videoModal = document.querySelector(".modal-video")!;
const noteModal = document.querySelector(".modal-note")!;
const taskModal = document.querySelector(".modal-task")!;

const imageBtn = document.querySelector(".header__btn-image");
const videoBtn = document.querySelector(".header__btn-video");
const noteBtn = document.querySelector(".header__btn-note");
const taskBtn = document.querySelector(".header__btn-task");

const domAction: DomAction = new DomActionImpl();

class Callbacks {
  public static initModal(e?: any) {
    if (e) {
      const { target, currentTarget } = e;
      if (target !== currentTarget) {
        return;
      }
    }
    imageModal.classList.add("displayNone");
    videoModal.classList.add("displayNone");
    noteModal.classList.add("displayNone");
    taskModal.classList.add("displayNone");
    imageBtn?.classList.remove("active");
    videoBtn?.classList.remove("active");
    noteBtn?.classList.remove("active");
    taskBtn?.classList.remove("active");
  }
  public static handleImageClick(e: any) {
    Callbacks.initModal();
    imageModal.classList.remove("displayNone");
    e.target.classList.add("active");
  }
  public static handleVideoClick(e: any) {
    Callbacks.initModal();
    videoModal.classList.remove("displayNone");
    e.target.classList.add("active");
  }
  public static handleNoteClick(e: any) {
    Callbacks.initModal();
    noteModal.classList.remove("displayNone");
    e.target.classList.add("active");
  }
  public static handleTaskClick(e: any) {
    Callbacks.initModal();
    taskModal.classList.remove("displayNone");
    e.target.classList.add("active");
  }
  public static addMotion(
    type: MotionType,
    title: HTMLInputElement,
    body: HTMLInputElement
  ) {
    return (e: any) => {
      domAction.addMotion(e, type, title, body);
    };
  }
}

export default Callbacks;
