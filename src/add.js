const electron = require('electron');
const path = require('path');
const remote = electron.remote;
const ipc = electron.ipcRenderer;
const closeBtn = document.querySelector('#closeBtn');

// add arrow functions
closeBtn.addEventListener('click', (event) => {
    var window = remote.getCurrentWindow();
    window.close();
})

const updateBtn = document.querySelector('#updateBtn');

updateBtn.addEventListener('click', () => {
    ipc.send('update-notify-value', document.querySelector('#notifyVal').value);

    var window = remote.getCurrentWindow();
    window.close();
})
