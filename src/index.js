const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const url = require('url');
const path = require('path');
let mainWindow
let NewProductWindow
app.on('ready', () => {
	mainWindow = new BrowserWindow({});

	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'views/index.html'),
		protocol: 'file',
		slashes: true
	}))
	const mainMenu = Menu.buildFromTemplate(templateMenu);
	Menu.setApplicationMenu(mainMenu);

	mainWindow.on('close', () => {
		app.quit();
	})

});
const templateMenu = [
{
	label: 'File',
	submenu: [

{
	label:'Exit',
	accelerator: process.platform == 'darwin' ? 'command + Q' : 'Ctrl + Q',
	click(){
		app.quit();
	}
}
	]
},
];

if(process.platform === 'darwin'){
	templateMenu.unshift({
		label: app.getName()
	});
}

