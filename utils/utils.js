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
