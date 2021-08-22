import { Component, OnInit } from '@angular/core';
import { DbzService } from 'src/app/core/data-services/dbz/dbz.service';
import { Personaje } from 'src/app/shared/interfaces/personajes';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  };
  //public listaPersonajes: Personaje[] = [];

  constructor() { }

  ngOnInit(): void {
    //this.loadPersonajes();
  }

}
