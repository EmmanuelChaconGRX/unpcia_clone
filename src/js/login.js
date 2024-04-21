const {ipcRenderer} = require('electron');
const form = document.querySelector('form');
// console.log('form', form);
form.addEventListener('submit',(e) => {
    e.preventDefault();
    const user = document.querySelector('#inputUser').value.trim();
    const password = document.querySelector('#inputPassword').value.trim();

    const data = {
        user,
        password
    };

    console.log(user, password);

    ipcRenderer.send('event:login', data);
});