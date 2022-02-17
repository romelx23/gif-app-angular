import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  constructor() {}

  personaje: Personaje = {
    nombre: 'Goku',
    poder: 0,
  };

  ngOnInit(): void {}
  

  // cambiarNombre(event: any) {
  //   console.log(event.target.value);
  // }
  // agregarPersonaje(argumento:Personaje) {
  //   // this.personajes.push(argumento);
  // }
}
