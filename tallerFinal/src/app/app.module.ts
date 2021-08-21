import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdeportesComponent } from './adeportes/adeportes.component';
import { BimagenesComponent } from './bimagenes/bimagenes.component';
import { CbotonesComponent } from './cbotones/cbotones.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [	
    AppComponent,
    AdeportesComponent,
    BimagenesComponent,
    CbotonesComponent,
      LoginComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
