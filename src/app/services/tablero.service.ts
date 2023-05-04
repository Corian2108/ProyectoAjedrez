import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Celda } from 'src/app/interfaces/celda';

@Injectable({
  providedIn: 'root',
})
export class TableroService {
  url: string = '../../assets/json/celdas.json';
  result: Celda[] = [];

  constructor(private http: HttpClient) {}

  getTablero() {
    return this.http.get<Celda[]>(this.url).pipe(
      tap((resp) => {
        this.result = resp;
      })
    );
  }
}
