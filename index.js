const path = require("path");

const electron = require("electron");

function createWindow() {

	const window = new electron.BrowserWindow({
		width: 400,
		height: 600,
		maxWidth: 400,
		maxHeight: 600,
		minWidth: 400,
		minHeight: 600,
		icon: path.join(__dirname, "icon", "icon.png"),
		webPreferences: {
			contextIsolation: false,
			enableRemoteModule: true,
			nodeIntegration: true
		}
	});

	window.removeMenu();
	window.loadFile(path.join("page", "index.html"));
}

electron.app.whenReady().then(createWindow);

process.on("uncaughtException", console.error);