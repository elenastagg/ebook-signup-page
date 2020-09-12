// Get  HTML elements
const modalContainer = document.getElementById("modal-container");
const downloadButton = document.getElementById("download-button");
const modalCloseButton = document.getElementById("modal-close-button");
const modalForm = document.getElementById("modal-form");
const firstName = document.getElementById("first-name-input");
const lastName = document.getElementById("last-name-input");
const email = document.getElementById("email-input");
const submitButton = document.getElementById("submit");
const successMessage = document.getElementById("success-message");

const formElements = [firstName, lastName, email];

// Open Modal
downloadButton.addEventListener("click", openModal);
function openModal() {
  modalContainer.style.display = "flex";
}

// Close Modal
window.addEventListener("click", outsideClick);
function outsideClick(event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
  }
}
modalCloseButton.addEventListener("click", closeModal);
function closeModal() {
  modalContainer.style.display = "none";
}

// Submit form
modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInputs();
});
function checkInputs() {
  formElements.forEach((element) => {
    const elementBlank = element.value === "";
    if (elementBlank) {
      element.classList.add("error");
      element.placeholder = "Error";
    }
    const elementExists = (element) => element.value !== "";
    const allElementsExist = formElements.every(elementExists);
    if (allElementsExist) {
      submitButton.classList.add("sent");
      successMessage.style.display = "inline-block";
      submitButton.innerText = "Sent";
      element.style.border = "1px solid #d9dfe8";
    }
  });
}
