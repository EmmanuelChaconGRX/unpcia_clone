const {BrowserWindow, app} = require('electron');
const url = require('url');
const path = require('path');



function mainScreen (){
    mainWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        maximizable:false,
        width: 600,
        height: 400,
    });
    mainWindow.setMenu(null);
    mainWindow.loadURL(url.format({
        pathname:path.join(__dirname, '../views/login.html'),
        protocol: 'file',
        slashes: true,
    }));   

    mainWindow.on('close', () => {
        app.quit();
    })
}

function alertScreenError(){
    alertWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        maximizable: false,
        minimizable: false,
        width: 400,
        height: 150,
    });
    alertWindow.setMenu(null);
    alertWindow.loadURL(url.format({
        pathname:path.join(__dirname, '../views/alertError.html'),
        protocol: 'file',
        slashes: true,
    })); 
}

function alertScreenExpired(){
    alertExpiredWindow = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
        maximizable: false,
        minimizable:false,
        width: 400,
        height: 200,
    });
    alertExpiredWindow.setMenu(null);
    alertExpiredWindow.loadURL(url.format({
        pathname:path.join(__dirname, '../views/alertExpired.html'),
        protocol: 'file',
        slashes: true,
    })); 
}









module.exports = {
    mainScreen,
    alertScreenError,
    alertScreenExpired
};