import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {

  constructor(private dbzService:DbzService) {}

  // @Input() personajes: Personaje[] = [];

  @Input() personaje: Personaje = {
    nombre: '',
    poder: 0,
  };
  // se pasa por referencia
  // Ahora Output
  // @Output() agregarPersonaje:EventEmitter<Personaje> = new EventEmitter();
  
  agregar() {
    // event=event as SubmitEvent;
    // event.preventDefault();
    // console.log('Hey',event)
    // if (this.personaje.nombre.trim().length === 0) return;
    // console.log(this.personaje);
    // this.agregarPersonaje.emit(this.personaje);
    // this.personajes.push(this.personaje);
    this.dbzService.agregarPersonaje(this.personaje);
    this.personaje = {
      nombre: '',
      poder: 0,
    };
  }

  ngOnInit(): void {}
}
