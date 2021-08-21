import { Injectable } from '@angular/core';
import { Categoria } from '../categoria';

@Injectable({
  providedIn: 'root'
})
export class ImaServiceService {

  public categorias:Categoria[] = []
  public datosUsuario=[{"usuario":"usuario","contra":"456"}]
   public login = true;

  constructor() {
    this.categorias = [
      {
        nombre:"futbol",
        imagenes:  ["https://www.bbva.com/wp-content/uploads/2017/08/bbva-balon-futbol-2017-08-11-1024x622.jpg",
        "https://cdn.aarp.net/content/dam/aarp/entertainment/television/2017/07/1140-world-cup-trophy-ball-trivia-esp.imgcache.rev.web.900.513.jpg",
        "http://c.files.bbci.co.uk/046C/production/_118123110_ad83f8c5-2a46-4faa-a42d-fef5cd060d23.jpg"]
      },
      {
        nombre:"natacion",
        imagenes:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUJa2_zcca8ko6hPUKF7yw4qFmLYy2LBywLA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9gbdrLZv96kU_VclFkJHppFSEFE-On5aFCg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkEl5ualzLIg9iLCOTtTrHzbqtKKJH0ANhgQ&usqp=CAU"]
      }
   
    ] 
   }
   
   inicio(){
     this.login=false 
   }

}
