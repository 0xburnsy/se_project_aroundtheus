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
    this._containerImageTitle.textContent = name;
    this._containerImageTitle.alt = name;
    this._containerImage.src = link;
    super.open();
  }
}
