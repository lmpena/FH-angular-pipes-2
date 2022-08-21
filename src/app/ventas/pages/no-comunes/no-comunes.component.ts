import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre:string='Luis';
  genero:string='masculino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  }

  // i18nPlural
  clientes:string[]=['Maria','Pedro','Juan','Eduardo','Fernando','Luis'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando',
  }


  cambiarPersona() {
    
    console.log('cambiarPersona:',this.nombre);

    if(this.nombre === 'Luis') {
      this.nombre='Sandra';
      this.genero='femenino';
    } else {
      this.nombre='Luis';
      this.genero='masculino';
    }
  }

  borrarCliente() {
    this.clientes.shift();
  }


  // KeyValuePipe
  persona= {
    nombre:'Fernando',
    edad:35,
    direccion:'Ottawa, Canadá'
  }

  heroes = [
    {
      nombre:'Superman',
      vuela:true
    },
    {
      nombre:'Robin',
      vuela:false
    },
    {
      nombre:'Aquaman',
      vuela:false
    }
  ]

  // Async Pipe
  miObservable=interval(1000); // 0, 1, 2, 3, 4, 5, 6, ...

  valorPromesa= new Promise ( (resolve, reject) => {

    setTimeout( ()=> {
      resolve('datos de la promesa');
    },3500)
  })
}
