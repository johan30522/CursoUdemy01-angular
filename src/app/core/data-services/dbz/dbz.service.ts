import { Injectable } from '@angular/core';
import { Personaje } from '../../../shared/interfaces/personajes';

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  private _listaPersonajes:Personaje[]=[];

  constructor() { 
    this._listaPersonajes=[
      {
        nombre:'Krillin',
        poder:1000
      },
      {
        nombre:'batman',
        poder:2000
      },
      {
        nombre:'Goku',
        poder:22000
      },
      {
        nombre:'Superman',
        poder:230000
      }
    ];

  }


  get listaPersonajes(): any {
    return [...this._listaPersonajes];
  }

  public postListaPersonajes(pers:Personaje) {
    this._listaPersonajes.push(pers);
  }


}
