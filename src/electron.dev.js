const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;


console.log("Test Log");
console.log("this is dirname:");
console.log(__dirname);

const createWindow = () => {
    setTimeout(() => {
        win = new BrowserWindow({
            webPreferences: {
                nodeIntegration: true
            },
            width: 800,
            height: 600,
            icon: './src/favicon.ico',
            frame: false
        });

        win.loadURL(url.format({
            pathname: 'localhost:4200',
            protocol: 'http:',
            slashes: true
        }));
        
        win.maximize();
        // win.webContents.openDevTools();

        win.on('closed', () => {
            win = null;
        });
    }, 10000);
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin'){
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null){
        createWindow();
    }
});
