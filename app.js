import { newUser } from './userUtils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData (form);

    const user = newUser(formData);

    const stringy = JSON.stringify(user);
    localStorage.setItem('USER', stringy);

    window.location = './map';
});
