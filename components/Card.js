// const modalImageElement = document.querySelector(".modal__image");
// const modalTitleElement = document.querySelector(".modal__image_title");

// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", closeByEscape);
// }

// function closeByEscape(evt) {
//   if (evt.key === "Escape") {
//     const openedPopup = document.querySelector(".modal_opened");
//     closeModal(openedPopup);
//   }
// }

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

    // imageElement.addEventListener("click", () => {
    //   modalImageElement.setAttribute("src", imageElement.getAttribute("src"));
    //   modalImageElement.alt = data.name;
    //   modalTitleElement.textContent = data.name;
    //   openModal(imageProfileModal);
    // });
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

  _handleImagePreview() {
    modalImageElement.setAttribute("src", imageElement.getAttribute("src"));
    modalImageElement.alt = data.name;
    modalTitleElement.textContent = data.name;
    openModal(imageProfileModal);
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
