// Preload.js is a file that is used to allow electron.js to interact with node.js APIs.
// Electron.js itself does not have access to node.js so communication via TCP/UDP is done by using
// preload.js as a bridge to transfer data from the node.js process and the electron.js process.
// Currently it is empty, when implementing something that requires interfacing with node.js, this will be used.

const {
  contextBridge,
  ipcRenderer
} = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  "api", {
      send: (channel, data) => {
          // whitelist channels
          let validChannels = ["toMain"];
          if (validChannels.includes(channel)) {
              ipcRenderer.send(channel, data);
          }
      },
      receive: (channel, func) => {
          let validChannels = ["fromMain"];
          if (validChannels.includes(channel)) {
              // Deliberately strip event as it includes `sender` 
              ipcRenderer.on(channel, (event, ...args) => func(event, ...args));
          }
      }
  }
);
