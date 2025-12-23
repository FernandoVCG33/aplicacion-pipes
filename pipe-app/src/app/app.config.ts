import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import routes from './app.routes';
import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es';
import localFR from '@angular/common/locales/fr';
import {LocaleService} from './services/locale.service';
registerLocaleData(localEs,'es');
registerLocaleData(localFR,'fr');
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // 1. Debes proveer la clase del servicio para que Angular pueda inyectarla
    LocaleService,
    {
      provide: LOCALE_ID,
      deps: [LocaleService],
      // 2. Asegúrate de ejecutar la función/lógica para obtener el string del locale
      useFactory: (localeService: LocaleService) => {
        return localeService.getLocale; // Si es un método, llámalo con ()
      },
    },
  ],
};
