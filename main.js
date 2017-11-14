const {app, BrowserView, BrowserWindow, Tray, Menu} = require('electron')


app.on('ready', () => {
    console.log('we in')

    //app.setName('Beatbox')
    app.setBadgeCount(1)
    Main()

})

var Main = (function() {
    //getURL('https://github.com')

    winOptions = {
        title: "Beatbox",
        width: 900, 
        height: 600,
        x: 300, 
        y: 80, 
        titleBarStyle: 'hiddenInset'
    }

    let win = new BrowserWindow(winOptions)

    //win.minimize()
    
    win.on('closed', (event) => {
      win = null
      console.log('closed')
      //win.hide()
    })
    
    win.loadURL('http://localhost:9000')

    let view = new BrowserView({
        webPreferences: {
            nodeIntegration: false
        }
    })


    win.setBrowserView(view)

    view.setAutoResize({ width: true })

    view.setBounds({ x: 540, y: 0, width: 375, height: 667 })
    //view.webContents.loadURL('https://electron.atom.io')
    view.webContents.loadURL('http://127.0.0.1:8080/data-test.framer/')
})

