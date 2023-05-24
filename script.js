const form = document.getElementsByTagName('form')[0];
const input = document.getElementById('email');
const error = document.getElementById('error');
const errorMessage = document.getElementsByClassName('error-message');

input.addEventListener('input', function () {
	if (!input.validity.valid) {
		error.style.display = 'block';
		errorMessage.style.display = 'block';
	} else {
		error.style.display = 'none';
	}
});

form.addEventListener('submit', function (event) {
	event.preventDefault();
	if (!input.validity.valid) {
		error.style.display = 'block';
		errorMessage.style.display = 'block';
	}
});
