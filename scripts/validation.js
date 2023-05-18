// enabling validation by calling enableValidation()
// pass all the settings on call

function setEventListeners(formElement, config) {
  const { inputSelector } = options;
  //   const inputSelector = config.inputSelector;
  const inputsElements = [...formElement.querySelectorAll(inputSelector)];
  console.log(inputElements);
}

function enableValidation(config) {
  const formElements = [...document.querySelectorAll(config.formSelector)];
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formElement, config);
  });
}

const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(config);
