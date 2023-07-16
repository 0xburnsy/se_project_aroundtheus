import { Popup } from "./Popup.js";

export default class popupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._containerImage = this._popupElement.querySelector(
      ".modal__conatiner-image"
    );
    this._containerImageTitle = this._popupElement.querySelector(
      ".modal__image_title"
    );
  }

  open({ name, link }) {
    const image = this._containerImage.querySelector(".modal__image");
    this._containerImageTitle.textContent = name;
    this._containerImageTitle.alt = name;
    image.src = link;
    super.open();
  }
}
