import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { appConfigServer } from './app/app.config.server';

export default bootstrapApplication(App, appConfigServer);