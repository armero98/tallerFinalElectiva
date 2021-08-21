import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bimagenes',
  templateUrl: './bimagenes.component.html',
  styleUrls: ['./bimagenes.component.css']
})
export class BimagenesComponent implements OnInit {

  @Input() imagenes: string[] = []
  private index = 0
  public url = ""

  constructor() { }

  ngOnInit(): void {
  }

  anterior(){
    if(this.index == 0){ 
      this.index = this.imagenes.length
    }
    this.index--
    this.url = this.imagenes[this.index-1]
  }

  siguiente(){
    if(this.index == this.imagenes.length-1){ 
      this.index = -1
    }
    this.index++
    this.url = this.imagenes[this.index+1]
  }

}
