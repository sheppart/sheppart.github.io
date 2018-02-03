const {app, BrowserWindow} = require('electron')

app.on('browser-window-created', (e,window) => {
   window.setMenu(null)
})
let win = null
app.on('ready', () => {
    win = new BrowserWindow({
        width: 600,
        height: 450
    })
    win.loadURL("file://"+__dirname+"/index.html")
    win.show()
})
