import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  // EL view child es una propiedad que nos permite acceder a los elementos del DOM
  @ViewChild('textBuscar') textBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService) {

  }

  ngOnInit(): void {}
  buscar() {
    const valor = this.textBuscar.nativeElement.value;
    // console.log(valor);
    if(valor.trim().length === 0){
      return;
    }
    this.gifsService.buscarGifs(valor);
    this.textBuscar.nativeElement.value = '';
  }
}
