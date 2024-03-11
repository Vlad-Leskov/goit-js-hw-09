const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

function fillFormFromStorage() {
  const storedData = localStorage.getItem(storageKey);
  if (storedData) {
    const parsedData = JSON.parse(storedData);
    emailInput.value = parsedData.email;
    messageTextarea.value = parsedData.message;
  }
}

function updateStorage() {
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
}

function clearFormAndStorage() {
  form.reset();
  localStorage.removeItem(storageKey);
}

form.addEventListener('input', updateStorage);

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  if (formData.email && formData.message) {
    console.log(formData);
    clearFormAndStorage();
  } else {
    alert('Please fill in all fields.');
  }
});

fillFormFromStorage();
