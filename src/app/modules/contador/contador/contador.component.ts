import { Component } from "@angular/core";


@Component({
    selector:'app-contador',
    templateUrl: './contador.component.html',
     styleUrls: ['./contador.component.css']
})
export class ContadorComponent{

    public title: string = 'contador APP';
    public numero: number = 10;
    public base:number=5;
  
    public sumar = () => {
      this.numero++;
    }
  
    public restar = () => {
      this.numero--;
    }
  
    public acumular=(valor:number)=>
    {
      this.numero+=valor;
  
    }
  
  


}