import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent implements OnInit {

  enMayusculas:boolean;

  ordenarPor:string='nombre';

  heroes:Heroe[]=[];

  constructor() {
    this.enMayusculas=false;
    this.heroes=[
      {
        nombre:'Superman',
        vuela:true,
        color:Color.azul
      },
      {
        nombre:'Batman',
        vuela:false,
        color:Color.negro
      },
      {
        nombre:'Robin',
        vuela:false,
        color:Color.verde
      },
      {
        nombre:'Daredevil',
        vuela:false,
        color:Color.rojo
      },
      {
        nombre:'Linterna Verde',
        vuela:true,
        color:Color.verde
      }
    ];
   }

  ngOnInit(): void {
  }

  toggleMayusculas() {
    this.enMayusculas=!this.enMayusculas;
  }

  cambiarOrden( valor:string) {
    this.ordenarPor=valor;
  }

}
