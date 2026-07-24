import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
import { App } from './app/app';
import { appConfig } from './app/product/app.config';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
