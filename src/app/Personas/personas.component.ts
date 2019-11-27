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
   ,3000);
 }

 onCrearPersona(){
   this.agregarPersonaStaus = "Persona Agregada";
 }

 onModificarPersona(event: Event){
    this.tituloPersona = (<HTMLInputElement>event.target).value;
 }


   nombrePersona:string = 'William';
   apellidoPersona:string = 'Mosquera';
   edad:number = 30;
   tituloPersona = 'Ingeniero';

   agregarPersona:boolean = true;
   agregarPersonaStaus= "No se ha agregado ninguna persona";




}
