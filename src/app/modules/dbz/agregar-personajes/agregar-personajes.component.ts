import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



import { Personaje } from '../../../shared/interfaces/personajes';
import { DbzService } from '../../../core/data-services/dbz/dbz.service';

@Component({
  selector: 'app-agregar-personajes',
  templateUrl: './agregar-personajes.component.html',
  styleUrls: ['./agregar-personajes.component.css']
})
export class AgregarPersonajesComponent implements OnInit {


  @Input('personajesNuevo') public nuevoPersonaje: Personaje = { nombre: "", poder: 0 };


  constructor(private readonly dbzservice:DbzService) { }

  ngOnInit(): void {
  }



  public submitForm = () => {

    if (this.nuevoPersonaje.nombre.trim().length === 0) { return; }

      this.dbzservice.postListaPersonajes(this.nuevoPersonaje);

      this.nuevoPersonaje={nombre:'',poder:0};

  }
}
