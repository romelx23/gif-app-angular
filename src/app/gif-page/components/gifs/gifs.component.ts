import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit {

  private nextSearch:number=0;

  constructor(private gifsServices:GifsService) { }

  get resultados(){
    return this.gifsServices.resultados;
  }

  onSroll(){
    console.log('scroll')
    this.nextSearch+=20;
    this.gifsServices.getMoreGifs(this.nextSearch)
  }

  ngOnInit(): void {
    // this.gifsServices.getLastSearch();
  }

}
