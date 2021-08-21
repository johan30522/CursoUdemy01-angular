import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl: './heroe.component.html',
     styleUrls: ['./heroe.component.css']
})
export class HeroeComponent{

    public nombre:string='Ironman';
  public edad:number=44;


  public obtenerNombre=()=>{
      return `El nombre es ${this.nombre} y la edad es de ${this.edad}`
  }

  
  public get nombreCapitalizado() : string {
      return this.nombre.toUpperCase();
  }

  public cambiarNombre=():void=>{
        this.nombre='SpiderMan';
  }

  public cambiarEdad=():void=>{
    this.edad=22;
}


}