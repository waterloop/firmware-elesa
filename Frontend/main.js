const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;

// Create the main window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      worldSafeExecuteJavascript: true,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile(path.resolve(__dirname, 'index.html'));
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