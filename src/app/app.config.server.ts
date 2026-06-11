import { mergeApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/ssr';
import { appConfig } from './app.config';

export const appConfigServer = mergeApplicationConfig(
  appConfig,
  {
    providers: [
      provideServerRendering()
    ]
  }
);