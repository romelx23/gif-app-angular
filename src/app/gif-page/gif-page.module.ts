import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifPageComponent } from './pages/gif-page/gif-page.component';
import { SearchComponent } from './components/search/search.component';
import { GifsComponent } from './components/gifs/gifs.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';



@NgModule({
  declarations: [
    GifPageComponent,
    SearchComponent,
    GifsComponent,
  ],
  exports:[
    GifPageComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule
  ]
})
export class GifPageModule { }
