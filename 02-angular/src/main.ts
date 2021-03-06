import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

// enableProdMode();

platformBrowserDynamic()
  .bootstrapModule(AppModule, { ngZone: 'zone.js' })
  .catch(err => console.error(err));
