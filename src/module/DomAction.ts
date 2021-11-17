import { DomAction } from "../interface/Interfaces";
import { MotionType } from "../types/types";

const sectionEl = document.querySelector(".document")!;
const motionUl = document.createElement("ul");
sectionEl.appendChild(motionUl);

class DomActionImpl implements DomAction {
  motions: HTMLLIElement[] = [];

  private addDom() {
    motionUl.innerHTML = "";
    this.motions.forEach((motion) => motionUl.appendChild(motion));
  }

  // private makeImagMotion(): HTMLLIElement {

  // }

  addMotion = (
    e: any,
    type: MotionType,
    title: HTMLInputElement,
    body: HTMLInputElement
  ) => {
    switch (type) {
      case "image":
        const liEl = document.createElement("li");
        const titleEl = document.createElement("h3");
        const imgEl = document.createElement("img");
        titleEl.innerText = title.value;
        imgEl.src = body.value;
        liEl.appendChild(titleEl);
        liEl.appendChild(imgEl);
        this.motions.push(liEl);
      // case "video":
      // 	const embedEl = document.createElement("embed")
      // case "note":
      // 	const imgEl = document.createElement("img")
      // case "task":
      // 	const imgEl = document.createElement("img")
      default:
        this.addDom();
        return;
    }
  };
}

export default DomActionImpl;
