const fs = require("fs");
const path = require("path");

const electron = require("electron");
const electronLocalshortcut = require("electron-localshortcut");

let cssKey = "";
let font = "digital";

function createWindow() {

	const window = new electron.BrowserWindow({
		width: 400,
		height: 590,
		maxWidth: 400,
		maxHeight: 590,
		minWidth: 400,
		minHeight: 590,
		icon: path.join(__dirname, "icon", "icon.png"),
		webPreferences: {
			contextIsolation: false,
			enableRemoteModule: true,
			nodeIntegration: true
		}
	});

	window.removeMenu();
	window.loadFile(path.join("page", "index.html"));

	electronLocalshortcut.register(window, 'Ctrl+F', () => {
		if (font === "digital") {
			font = "normal";
			window.webContents.insertCSS(`
				.equation {
					font-family: inherit !important;
					font-size: 30pt !important;
					padding-top: 8px !important;
					padding-bottom: 8px !important;
				}
			`).then(key => { cssKey = key });
		} else {
			font = "digital";
			window.webContents.removeInsertedCSS(cssKey);
		}
	});
}

electron.app.whenReady().then(createWindow);

process.on("uncaughtException", console.error);