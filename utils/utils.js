const addCardModal = document.querySelector("#add-card-modal");
const addCardModalCloseButton = addCardModal.querySelector(".modal__close");
const imageProfileModal = document.querySelector("#image-modal");
const closeImageModalButton = imageProfileModal.querySelector(".modal__close");

export function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", closeByEscape);
}

export function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", closeByEscape);
}

export function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".modal_opened");
    closeModal(openedPopup);
  }
}

export function handleEscape(e, modal) {
  if (e.key === "Escape") {
    closeModal(modal);
  }
}

export function handleMouseDown(e, modal) {
  handleClickOutsideCard(e, modal);
  console.log("clicked");
}

// handleClickOutsideProfile();
// export function handleClickOutsideProfile(modal) {
//   editProfileModal.addEventListener("mousedown", (e) => {
//     if (
//       e.target.classList.contains("modal") ||
//       e.target.classList.contains("modal__close")
//     ) {
//       closeModal(editProfileModal);
//     }
//   });
// }

handleClickOutsideCard();
export function handleClickOutsideCard(modal) {
  addCardModal.addEventListener("mousedown", (e) => {
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    ) {
      closeModal(addCardModal);
    }
  });
}

handleClickOutsideImage();
export function handleClickOutsideImage(modal) {
  imageProfileModal.addEventListener("mousedown", (e) => {
    console.log(e.target);
    if (
      e.target.classList.contains("modal") ||
      e.target.classList.contains("modal__close")
    ) {
      closeModal(imageProfileModal);
    }
  });
}

function openEditProfileModal() {
  openModal(editProfileModal);
}
