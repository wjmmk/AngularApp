import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent  {
 constructor() {
   setTimeout(
     () => {
        this.agregarPersona = false;
     }
   ,5000);
 }

 onCrearPersona(){
   this.agregarPersonaStaus = "Persona Agregada";
 }

 onModificarPersona(event: Event){
   // En esta linea se hace un casting al "event.target" para los valores digitados por el teclado se soporten en el HTML
    this.tituloPersona = (<HTMLInputElement>event.target).value;
 }

   nombrePersona:string = 'William';
   apellidoPersona:string = 'Mosquera';
   edad:number = 30;
   tituloPersona = 'Ingeniero de Sistemas';

   agregarPersona:boolean = true;
   agregarPersonaStaus= "No se ha agregado ninguna persona";

}
