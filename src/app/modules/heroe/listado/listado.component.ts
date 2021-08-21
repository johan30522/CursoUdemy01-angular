import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

public heroes:string[]=['Ironman','thor','Hulk','Antman','SuperMan'];
public heroeBorrado:string="";


  constructor() { }

  ngOnInit(): void {
  }

  public borrarHeroe=()=>{
    //this.heroes.splice(this.heroes.length-1, 1);
    this.heroeBorrado=this.heroes.shift()?.toString()|| '';

  }

}
