import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({

    declarations:[
        HeroeComponent,
        ListadoComponent
    ],

    exports:[ //aquello que quiero hacer publico
        ListadoComponent
    ],

    imports:[//aqui usualmente van modulos
        CommonModule  //para utilizar directivas ngif, ngfor, entre otras cosas

    ]


})
export class HeroesModule{

}