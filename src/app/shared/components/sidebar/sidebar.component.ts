import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gif-page/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsServices:GifsService) { }

  // get end 10 items
  getAfterTen(){
    return this.gifsServices.historial;
  }

  buscar(query: string='') {
    console.log(query);
    this.gifsServices.buscarGifs(query);
  }

  ngOnInit(): void {
  }

}
