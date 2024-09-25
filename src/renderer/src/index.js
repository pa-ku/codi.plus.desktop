import { app  } from 'electron'
import { createWindow } from './main.js'


app.whenReady().then(createWindow)
