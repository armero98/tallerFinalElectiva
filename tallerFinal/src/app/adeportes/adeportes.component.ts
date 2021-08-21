import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { ImaServiceService } from '../servicios/ima-service.service';

@Component({
  selector: 'app-adeportes',
  templateUrl: './adeportes.component.html',
  styleUrls: ['./adeportes.component.css']
})
export class AdeportesComponent implements OnInit {

  categorias: Categoria []=[]
  index: number =0
  
  constructor(private imagenesServicio: ImaServiceService) { }

  ngOnInit(): void {
    this.categorias = this.imagenesServicio.categorias
  }

  click(index:number){
    this.index= index
  }
}

