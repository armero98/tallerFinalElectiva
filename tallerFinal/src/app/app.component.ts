import { Component } from '@angular/core';
import { ImaServiceService } from './servicios/ima-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tallerFinal';
  constructor(public servicioImagen: ImaServiceService){
    // setTheme('bs3');
   }
}
