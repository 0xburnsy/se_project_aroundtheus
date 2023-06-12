import { openModal } from "../utils/utils.js";
// import { closeModal } from "../utils/utils.js";
// import { handleEscape } from "../utils/utils.js";
// import { handleMouseDown } from "../utils/utils.js";
// import { handleClickOutsideImage } from "../utils/utils.js";
// import { handleClickOutsideCard } from "../utils/utils.js";
// import { closeByEscape } from "../utils/utils.js";
const previewModal = document.querySelector("#image-modal");
const previewModalImage = previewModal.querySelector(".modal__image");
console.log(previewModalImage);
const previewModalTitle = previewModal.querySelector(".modal__image_title");
console.log(previewModalTitle);

export default class Card {
  constructor({ name, link }, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }

  _setEventListeners() {
    this._cardElement
      .querySelector(".card__like-button")
      .addEventListener("click", () => {
        this._handleLikeIcon();
      });

    this._cardElement
      .querySelector(".card__delete-button")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });

    this._cardElement
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handleImagePreview();
      });
  }

  _handleLikeIcon() {
    this._cardElement
      .querySelector(".card__like-button")
      .classList.toggle("card__like-button_active");
  }

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  _handleImagePreview(previewModal, previewModalImage, previewModalTitle) {
    previewModalImage.src = this._link;
    previewModalImage.alt = this._link;
    previewModalTitle.textContent = this._name;
    openModal(previewModal);
  }

  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
  }

  getView() {
    this._cardElement = this._getTemplate();
    const imageElement = document.createElement("img");
    imageElement.src = this._link;
    imageElement.classList.add("card__image");
    this._cardElement.querySelector(".card__image").replaceWith(imageElement);
    this._cardElement.querySelector(".card__title").textContent = this._name;

    this._setEventListeners();

    return this._cardElement;
  }
}
