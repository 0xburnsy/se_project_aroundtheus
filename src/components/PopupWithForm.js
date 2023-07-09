import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, callback) {
    super(popupSelector);
    this._callback = callback;
    this._form = this._popupElement.querySelectorAll(".modal__form");
    this._handleFormSubmit = handleFormSubmit;
  }
  popupElement;

  _getInputValues() {
    let values = {};
    this._inputs.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._submitHandler);
  }

  _submitHandler = (e) => {
    e.preventDefault();
    this._callback(this._getInputValues());
    this.close();
  };

  close() {
    super.close();
    this._form.reset();
  }
}

const popup = new PopupWithForm(".popup", (data) => console.log(data));
popup.open();

popup.close();
