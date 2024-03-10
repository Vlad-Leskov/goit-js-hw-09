const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const storageKey = 'feedback-form-state';

const saveDataToStorage = () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(storageKey, JSON.stringify(formData));
};

const fillFormFromStorage = () => {
  const storedData = JSON.parse(localStorage.getItem(storageKey));
  if (storedData) {
    emailInput.value = storedData.email;
    messageInput.value = storedData.message;
  }
};

fillFormFromStorage();

form.addEventListener('input', () => {
  saveDataToStorage();
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (emailInput.value.trim() && messageInput.value.trim()) {
    console.log({
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    });

    localStorage.removeItem(storageKey);
    emailInput.value = '';
    messageInput.value = '';
  } else {
    alert('Please fill in all fields.');
  }
});
