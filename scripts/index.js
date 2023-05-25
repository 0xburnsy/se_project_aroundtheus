const titleElement = document.querySelector(".profile__title");
const descriptionElement = document.querySelector(".profile__description");
const editProfileModal = document.querySelector("#edit-profile-modal");
const imageProfileModal = document.querySelector("#image-modal");
const closeImageModalButton = imageProfileModal.querySelector(".modal__close");

// Define for OpenModal Function
const editProfileButton = document.querySelector(".profile__edit-button");

//Get the current Name and About me values displayed on page
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");

//Close Edit Modal//
const profileModalCloseButton = editProfileModal.querySelector(".modal__close");

// Definitions for saveAndClose Function
const profileSaveButton = document.querySelector(".modal__button");

const modalImageElement = document.querySelector(".modal__image");
const modalTitleElement = document.querySelector(".modal__image_title");

// Clone the template element and its content
const template = document
  .querySelector("#card-template")
  .content.querySelector(".card");

// Get the cards list element
const cardsList = document.querySelector(".cards__list");

// Get the form input elements
const titleInput = document.querySelector(".modal__input-profile");
const descriptionInput = document.querySelector(".modal__input-description");

const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

function getCardElement(data) {
  const cardElement = template.cloneNode(true);

  // Access the card title and image elements
  const titleElement = cardElement.querySelector(".card__title");
  const imageElement = cardElement.querySelector(".card__image");
  const likeButton = cardElement.querySelector(".card__like-button");
  const deleteButton = cardElement.querySelector(".card__delete-button");

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__like-button_active");
  });

  deleteButton.addEventListener("click", () => {
    cardElement.remove();
  });

  imageElement.addEventListener("click", () => {
    modalImageElement.setAttribute("src", imageElement.getAttribute("src"));
    modalImageElement.alt = data.name;
    modalTitleElement.textContent = data.name;
    openModal(imageProfileModal);
  });

  // Set the card title
  titleElement.textContent = data.name;

  // Set the image source and alt text
  imageElement.src = data.link;
  imageElement.alt = data.name;

  // Return the filled-in card element
  return cardElement;
}

function renderInitialCards(initialCards) {
  // Loop through the initial cards array and create a new card element for each
  initialCards.forEach((cardData) => {
    const cardElement = getCardElement(cardData);
    cardsList.appendChild(cardElement);
  });
}

// Call the renderInitialCards function to populate the initial cards on page load
renderInitialCards(initialCards);

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal_opened");
    closeModal(openedPopup);
  }
}

// Add the "submit" event listener to the form
const profileFormElement = editProfileModal.querySelector(".modal__form");
profileFormElement.addEventListener("submit", handleProfileFormSubmit);

function handleProfileFormSubmit(event) {
  event.preventDefault();

  // Get the new values entered by the user
  const newTitle = titleInput.value;
  const newDescription = descriptionInput.value;

  // Update the name and about me sections on the page with the new values
  profileTitle.textContent = newTitle;
  profileDescription.textContent = newDescription;

  closeModal(editProfileModal);
}

const addCardModalButton = document.querySelector(".profile__add-button");
const addCardModal = document.querySelector("#add-card-modal");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const addCardFromElement = addCardModal.querySelector(".modal__form");
const cardTitleInput = addCardFromElement.querySelector(".modal__input-title");
const cardUrlInput = addCardFromElement.querySelector(".modal__input-link");

function handleAddCardFormSubmit(event) {
  event.preventDefault();

  const name = cardTitleInput.value;
  const link = cardUrlInput.value;
  renderCard({ name, link });
  closeModal(addCardModal);
  addCardFromElement.reset();
}

function renderCard(cardData) {
  const cardElement = getCardElement(cardData);
  cardsList.prepend(cardElement);
}

function fillProfileForm() {
  titleInput.value = profileTitle.textContent;
  descriptionInput.value = profileDescription.textContent;
}

function openEditProfileModal() {
  openModal(editProfileModal);
}

function handleEscape(e, modal) {
  if (e.key === "Escape") {
    closeModal(modal);
  }
}

function handleClickOutsideProfile(e, modal) {
  editProfileModal.addEventListener("mousedown", (e) => {
    console.log(e.target);
  });
  if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("modal__close")
  ) {
    closeModal(editProfileModal);
  }
}

function handleClickOutsideCard(e, modal) {
  addCardModal.addEventListener("mousedown", (e) => {
    console.log(e.target);
  });
  if (
    e.target.classList.contains(addCardModal) ||
    e.target.classList.contains(addCardModalCloseButton)
  ) {
    closeModal(addCardModal);
  }
}

function handleClickOutsideImage(e, modal) {
  imageProfileModal.addEventListener("mousedown", (e) => {
    console.log(e.target);
  });
  if (
    e.target.classList.contains("modal") ||
    e.target.classList.contains("modal__close")
  ) {
    closeModal(imageProfileModal);
  }
}

// Event Listeners
addCardFromElement.addEventListener("submit", handleAddCardFormSubmit);
addCardModalButton.addEventListener("click", () => openModal(addCardModal));
editProfileButton.addEventListener("click", () => {
  fillProfileForm(editProfileModal);
  openEditProfileModal();
});
