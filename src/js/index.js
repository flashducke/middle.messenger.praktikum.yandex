import avatar from '../js/modules/avatar.js'

// временный код для перехода по страницам
const loginButton = document.querySelector('.page-login .submit-btn');
const regButton = document.querySelector('.page-reg .submit-btn');

const temporaryFunc = (trigger) => {
    if (trigger) {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            window.location = '/chat.html';
        })
    }
}

temporaryFunc(loginButton);
temporaryFunc(regButton);

