import { Component, Input, OnInit } from '@angular/core';
import { ImaServiceService } from '../servicios/ima-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario  = "";
  contrasena = "";
  constructor(public servicioImagen:ImaServiceService) { }

  ngOnInit(): void {
  }
  IniciarSeccion (){
    if((this.servicioImagen.datosUsuario[0].usuario)==(this.usuario)&&(this.servicioImagen.datosUsuario[0].contra)==(this.contrasena)){
      this.servicioImagen.inicio();
    }
  }
}
