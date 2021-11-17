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

  private pushLi(el: HTMLLIElement, item: Element) {
    el.appendChild(item);
    this.motions.push(el);
    this.addDom();
  }

  addMotion = (
    e: any,
    type: MotionType,
    title: HTMLInputElement,
    body: HTMLInputElement
  ) => {
    const liEl = this.getLi(title.value);
    console.log(body.value);
    console.log(type);

    switch (type) {
      case "image":
        const imgEl = document.createElement("img");
        imgEl.src = body.value;
        imgEl.width = 300;
        imgEl.height = 200;
        this.pushLi(liEl, imgEl);
        break;
      case "video":
        const embedEl = document.createElement("embed");
        embedEl.src = body.value;
        embedEl.width = "300";
        this.pushLi(liEl, embedEl);
        break;
      case "note":
        const pEl = document.createElement("p");
        pEl.innerText = body.value;
        this.pushLi(liEl, pEl);
        break;
      case "task":
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = `${new Date()}`;
        const label = document.createElement("label");
        label.innerText = body.value;
        label.htmlFor = checkbox.id;
        this.pushLi(liEl, checkbox);
        this.pushLi(liEl, label);
        break;
      default:
        this.addDom();
        return;
    }
  };
}

export default DomActionImpl;
