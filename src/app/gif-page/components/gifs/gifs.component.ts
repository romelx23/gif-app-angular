import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {

  constructor(private gifsServices:GifsService) { }

  get resultados(){
    return this.gifsServices.resultados;
  }

  ngOnInit(): void {
    // this.gifsServices.getLastSearch();
  }

}
