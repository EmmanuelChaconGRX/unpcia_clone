const {app, Menu, ipcMain} = require('electron');
const path = require('path');
const {mainScreen, alertScreenError, alertScreenExpired} = require('./js/screens');
const templateMenu = require('./js/menu');

/*if(process.env.NODE_ENV !=='production'){
    require('electron-reload')(__dirname,{
        electron: path.join(__dirname, '../node_modules/', '.bin', 'electron')
    })
}*/

app.on('ready', () => {
    mainScreen();
    // const mainmenu = Menu.buildFromTemplate(templateMenu);
    // Menu.setApplicationMenu(mainmenu);
});

ipcMain.on('event:login', (e, dataLogin) => {
    const {user, password} = dataLogin;
    if(user == '' || password == ''){
        alertScreenError();
    }else if (user != 'almassari' && password != 'qwerty'){
        alertScreenError();
    }else {
        alertScreenExpired();
    }
});

