import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-titulo-header-hijo',
  imports: [],
  templateUrl: './titulo-header-hijo.component.html',
  styleUrl: './titulo-header-hijo.component.scss'
})
export class TituloHeaderHijoComponent implements OnChanges{
  //transferir datos entre componentes padre-hijo
  @Input() titulo: string = "";
  @Output() datosHijo = new EventEmitter();
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.datosHijo.emit("datos desde el hijo");
  }

  

}
