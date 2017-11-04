import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';
if (process.env.ENV === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule).then(()=>{
if ('serviceWorker' in navigator) {
    navigator['serviceWorker'].register('worker-basic.min.js');
}
});