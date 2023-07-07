import { Popup } from "./popup";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super({ popupSelector });
    this._popupElement;
    this._popupFrom = this._popupElement.querySelector(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

// index.js

const newCardPopup = new PopupWithForm("#card-template", () => {});
newCardPopup.open();

newCardPopup.close();
