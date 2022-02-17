import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Gif, GifResponse } from '../../interfaces/gif_interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private apiKey    :string = environment.API_KEY;
  private base:string=`${environment.BASE}/gifs`;
  private _historial: string[] = [];

  public resultados:Gif[] = [];

  constructor( private http: HttpClient) {
    this._historial=JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados=JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  get historial() {
    return [...this._historial];
  }

  buscarGifs(query: string='') {
    query=query.trim().toLocaleLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);
      // save history in local storage
      localStorage.setItem('historial', JSON.stringify(this._historial));
      // console.log(this._historial);

    }
    
    let params = new HttpParams()
    params=params.append('api_key',this.apiKey)
    params=params.append('limit','20')
    params=params.append('q',query)

    this.http.get<GifResponse>(`${this.base}/search`,{params})
    .subscribe((res) => {
      // console.log(res.data);
      localStorage.setItem('resultados', JSON.stringify(res.data));
      this.resultados = res.data;
    });
  }

  // getLastSearch
  getLastSearch() {
    this.http.get<GifResponse>(`${this.base}/search?api_key=${this.apiKey}&q=${this._historial[0]}&limit=20`)
    .subscribe((res) => {
      console.log(res.data);
      this.resultados = res.data;
    });
  }


}
