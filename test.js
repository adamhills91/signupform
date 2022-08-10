const submit = document.getElementById('submit');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password-confirm');
const passwordMessage = document.querySelector('.password-error');

submit.addEventListener('click', () => {
    if (password1.value !== password2.value) {
        passwordMessage.classList.remove('hidden');
        password1.classList.add('red-border');
        password2.classList.add('red-border');

    } else if (password1.value === password2.value) {
        passwordMessage.classList.add('hidden');
        password1.classList.remove('red-border');
        password2.classList.remove('red-border');
    }
})
