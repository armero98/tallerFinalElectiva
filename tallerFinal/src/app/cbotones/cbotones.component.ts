import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cbotones',
  templateUrl: './cbotones.component.html',
  styleUrls: ['./cbotones.component.css']
})
export class CbotonesComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }

  @Output() onClick = new EventEmitter()
  @Input() color: string = "bnt-primary"
  @Input() mensaje: string = "btn"
  @Input() tamano: string = ""


  click(){
    this.onClick.emit
  }

}


