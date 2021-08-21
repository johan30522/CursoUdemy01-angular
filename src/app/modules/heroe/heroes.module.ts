import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { HeroeDialogComponent } from './heroe-dialog/heroe-dialog.component';



@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent,
    HeroeDialogComponent

  ],
  exports:[
    HeroeComponent,
    ListadoComponent,
    HeroeDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule {



 }
