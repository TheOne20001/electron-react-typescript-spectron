import { app, BrowserWindow, Menu } from 'electron'
import * as path from 'path'
import * as url from 'url'

let win: BrowserWindow | null

const createWindow = async () => {
  win = new BrowserWindow({
    width: 1600,
    height: 800,
    webPreferences: { nodeIntegration: true }
  })

  setTimeout(() => {
    if (win) {
      if (process.env.NODE_ENV !== 'production') {
        process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1' // eslint-disable-line require-atomic-updates
        win.loadURL(`http://localhost:2004`)
      } else {
        win.loadURL(
          url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
          })
        )
      }
    }
  }, 5000)

  if (process.env.NODE_ENV !== 'production') {
    // Open DevTools, see https://github.com/electron/electron/issues/12438 for why we wait for dom-ready
    win.webContents.once('dom-ready', () => {
      // win!.webContents.openDevTools()
    })
  }

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('certificate-error', (event, webContents, _url, error, certificate, callback) => {
  event.preventDefault()
  callback(true)
})

const template: Electron.MenuItemConstructorOptions[] = [
  {
    label: 'File',
    submenu: [{ role: 'quit' }]
  },
  // { role: 'editMenu' }
  {
    label: 'Edit',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
      { role: 'delete' },
      { type: 'separator' },
      { role: 'selectAll' }
    ]
  },

  {
    label: 'Window',
    submenu: [{ role: 'minimize' }, { role: 'zoom' }, { role: 'close' }]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'About...'
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
