// preload.js

const { contextBridge, ipcRenderer } = require('electron');

// Expose selected Node.js APIs to the renderer process
contextBridge.exposeInMainWorld(
    'electron',
    {
        // Example: Expose a custom method to the renderer process
        sendToMain: (channel, data) => {
            ipcRenderer.send(channel, data);
        },
        // Add more methods or properties as needed
    }
);
