import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 9001,
    },
    {
      nombre: 'Vegeta',
      poder: 9002,
    },
    {
      nombre: 'Piccolo',
      poder: 9003,
    },
  ];

  constructor() {
    console.log('DbzServices');
  }

  get personajes():Personaje[]{
      return [...this._personajes];
  }
  agregarPersonaje(personaje:Personaje){
        this._personajes.push(personaje);
  }
}
