import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';


const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea');
const inputEl = document.querySelector('.feedback-form input');

populateMessage();

formEl.addEventListener('submit', onClickSubmit);

formEl.addEventListener(
  'input',
  throttle( e => {
		const formData = {
      email: inputEl.value,
      message: textareaEl.value,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }, 500)
);

function onClickSubmit(e) {
  e.preventDefault();
	e.currentTarget.reset();
	console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
  
}

function populateMessage() {
	const savedValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
	if (savedValue) {
		inputEl.value = savedValue.email;
		textareaEl.value = savedValue.message;
  }
}
