import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { ContadorComponent } from './contador/contador.component';


@NgModule({

    declarations:[
        ContadorComponent
        
    ],

    exports:[
        ContadorComponent //aquello que quiero hacer publico
        
    ],

    imports:[//aqui usualmente van modulos
        CommonModule  //para utilizar directivas ngif, ngfor, entre otras cosas

    ]


})
export class ContadorModule{

}