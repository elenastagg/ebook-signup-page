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

const formInputs = [firstName, lastName, email];

// Open Modal
function openModal() {
  modalContainer.style.display = "flex";
}
downloadButton.addEventListener("click", openModal);

// Close Modal
function outsideClick(event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
  }
}
window.addEventListener("click", outsideClick);
function closeModal() {
  modalContainer.style.display = "none";
}
modalCloseButton.addEventListener("click", closeModal);

// Submit form
function checkInputs() {
  const isEmpty = (element) => element.value === "";
  formInputs.forEach((element) => {
    if (isEmpty(element)) {
      element.classList.add("error");
      element.placeholder = "This field should not be empty";
    } else {
      element.classList.remove("error");
    }
  });
  if (!formInputs.some(isEmpty)) {
    submitButton.classList.add("sent");
    successMessage.style.display = "inline-block";
    submitButton.innerText = "Sent";
  }
}

modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  checkInputs();
});
