import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DeportesComponent } from './deportes/deportes.component';
import { ImagenesComponent } from './imagenes/imagenes.component';
import { BotonesComponent } from './botones/botones.component';
import { AdeportesComponent } from './adeportes/adeportes.component';
import { BbotonesComponent } from './bbotones/bbotones.component';
import { BimagenesComponent } from './bimagenes/bimagenes.component';
import { CbotonesComponent } from './cbotones/cbotones.component';

@NgModule({
  declarations: [
    AppComponent,
    DeportesComponent,
    ImagenesComponent,
    BotonesComponent,
    AdeportesComponent,
    BbotonesComponent,
    BimagenesComponent,
    CbotonesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
