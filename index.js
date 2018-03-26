const {app, BrowserWindow} = require('electron');
let win;

const createWindow = () => {

    win = new BrowserWindow({
        width: 700,
        height: 500,
        show: false
    });

    setTimeout(()=>{
        win.loadURL(`file://${__dirname}/dist/index.html`);
    },2000);

    win.webContents.openDevTools();
    win.on('close', () => win = null);
    win.on('ready-to-show', () => {
        win.show();
        win.focus();
    })
};

app.on('ready', () => createWindow());
app.on('window-all-closed', () => {
    process.platform !== 'darwin' && app.quit()
});
app.on('activate', () => win === null && createWindow());
