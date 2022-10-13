const { app, BrowserWindow } = require('electron');
const path = require('path');

// Create the main window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile(path.resolve(__dirname, 'index.html'));
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