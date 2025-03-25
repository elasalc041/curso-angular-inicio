import { Component, OnDestroy, OnInit, DoCheck, AfterContentInit, AfterViewInit, OnChanges, AfterContentChecked, AfterViewChecked, SimpleChanges } from '@angular/core';
//importar componente hijo
import { TituloHeaderHijoComponent } from '../titulo-header-hijo/titulo-header-hijo.component';


@Component({
  selector: 'app-header',
  imports: [TituloHeaderHijoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent /*implements OnInit, AfterContentInit, AfterViewInit, OnDestroy, OnChanges, DoCheck, AfterContentChecked, AfterViewChecked */{
  
  //transferir datos entre componentes padre-hijo
  tituloPadre: string = "Titulo desde el padre";

  //función para recibir datos del hijo
  onDataCheck(e: any){
    console.log(e);
  }

  constructor() { 
    console.log("Costructor de HeaderComponent");
  }

/*
  //funciones ciclo de vida componentes

//detecta cada vez que nueva información llega al componente
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges ejecutado");
  }
//detecta cada vez que se inicia el componente
  ngOnInit(): void {
    console.log("ngOnit ejecutado");
  }
//detecta cada vez que se ejecuta un cambio en el componente
  ngDoCheck(): void {
    console.log("ngDoCheck ejecutado");
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit ejecutado");
  }
  //detecta cada vez que se ejecuta un cambio en el contenido del componente
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked ejecutado");
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit ejecutado");
  }
  //detecta cada vez que se ejecuta un cambio en la vista del componente
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked ejecutado");
  }
//detecta cada vez que se destruye el componente
  ngOnDestroy(): void {
    console.log("ngOnDestroy ejecutado");
  }

  */

  



  

}
