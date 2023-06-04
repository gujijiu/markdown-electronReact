/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const { ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
    // console.log(document.getElementById('node-version'),process.versions.node)
    document.getElementById('node-version').innerHTML = process.versions.node
    document.getElementById('send').addEventListener('click', () => {
        ipcRenderer.send('message', 'hello from renderer')
    })
    ipcRenderer.on('reply', function (event, arg) {
        // console.log(event, arg)
        document.getElementById('node-version').innerHTML = arg
    })
})