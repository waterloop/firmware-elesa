const { app, BrowserWindow, ipcRenderer } = require('electron');
const path = require('path');
const log = require('electron-log');

var zmq = require("zeromq");

// Logger for debugging purposes
log.initialize({ preload: true });

const sockPort = "tcp://127.0.0.1:3000";
const sockTopic = "data";
const sock = new zmq.Subscriber
const isDev = !app.isPackaged;

// Create the main window
const createWindow = async () => {
  const win = new BrowserWindow({
    backgroundColor: "white",
    webPreferences: {
      nodeIntegration: false,
      enableRemoteModule: false,
      contextIsolation: true,
      worldSafeExecuteJavascript: true,
      preload: path.join(__dirname, 'preload.js')
    }
    
  })
  
  win.maximize();
  win.loadFile(path.resolve(__dirname, 'index.html'));
  win.webContents.openDevTools();

  await sock.connect(sockPort);
  sock.subscribe(sockTopic);
  
  for await (const [topic, msg] of sock) {
    win.webContents.send("fromMain", {});
  }
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