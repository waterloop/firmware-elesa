const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

// Create the main window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 2800,
    height: 1600,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavascript: true,
      contextIsolation: true,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    }
  })

  win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  win.webContents.openDevTools()
}

if (isDev) {
  require('electron-reload')(__dirname, {
    electron: path.join(__dirname, '../node_modules', '.bin', 'electron')
  })
}

// Load the window when the app is ready
app.whenReady().then(() => {
  createWindow();

  // specific Mac OS requirement
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// closing the application for different OS's
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})