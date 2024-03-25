import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { provideClientHydration } from '@angular/platform-browser';
import { AppModule } from './app.modules';

platformBrowserDynamic().bootstrapModule(AppModule)

  .catch(err => console.error(err));


