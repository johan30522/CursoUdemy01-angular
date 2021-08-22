import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/shared/interfaces/personajes';
import { DbzService } from '../../../core/data-services/dbz/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
 
  //@Input('personajes') listaPersonajes:Personaje[]=[];
  get listaPersonajes(){
    return this.dbzService.listaPersonajes;
  }

  constructor(private readonly dbzService:DbzService) { }

  ngOnInit(): void {

    
  }
}
