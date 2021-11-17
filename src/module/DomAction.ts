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

  private getLi(title: string) {
    const liEl = document.createElement("li");
    const titleEl = document.createElement("h3");
    titleEl.innerText = title;
    liEl.appendChild(titleEl);

    return liEl;
  }

  addMotion = (
    e: any,
    type: MotionType,
    title: HTMLInputElement,
    body: HTMLInputElement
  ) => {
    const liEl = this.getLi(title.value);
    switch (type) {
      case "image":
        const imgEl = document.createElement("img");
        imgEl.src = body.value;
        liEl.appendChild(imgEl);
        this.motions.push(liEl);
        this.addDom();
        break;
      case "video":
        const embedEl = document.createElement("embed");
        embedEl.src = body.value;
        embedEl.width = "300";
        liEl.appendChild(embedEl);
        this.motions.push(liEl);
        this.addDom();
        break;
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
