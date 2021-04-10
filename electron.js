const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const window = new BrowserWindow({
        width: 600,
        height: 600,
        webPreferences: {
            preload: `${__dirname}/preload.js`,
        }
    })

    window.loadURL("http://localhost:3000")
}

app.on('ready', createWindow)