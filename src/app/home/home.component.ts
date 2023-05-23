import { Component, OnInit } from '@angular/core';

import { Celda } from 'src/app/interfaces/celda';
import { Ficha } from 'src/app/interfaces/ficha';
import { Coordenada } from 'src/app/interfaces/coordenada';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  marcas: any[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  fichas: string[] = ['Peón', 'Torre', 'Alfil', 'Caballo', 'Reina', 'Rey'];
  tablero: any[] = []; //no le puedo asignar el tipo celda porque es el iterable sobre el que construyo el tablero
  negras: Ficha[] = [];
  blancas: Ficha[] = [];
  torre?: Ficha

  constructor() {}

  ngOnInit() {
    this.crearTablero();
    this.crearFichas();
    this.colocarFichas();
    this.torre = this.blancas[8]
    this.torre.CalcularMovimiento(this.tablero)
    console.log('Movimientos: ',this.torre.Movimientos)
    console.log(this.tablero);

  }

  crearTablero() {
    for (let i = 1; i <= 8; i++) {
      let cord = new Coordenada(0, i);
      let row: Celda[] = [new Celda(`${i}`, '', cord, true)];
      this.marcas.forEach((col, index) => {
        let color1;
        let color2;
        (index + 1) % 2 == 0
          ? ((color1 = 'blanco'), (color2 = 'negro'))
          : ((color1 = 'negro'), (color2 = 'blanco'));
        row.push(
          new Celda(
            `${col + i}`,
            i % 2 == 0 ? `${color2}` : `${color1}`,
            new Coordenada(index+1, i)
          )
        );
      });
      this.tablero.unshift(row);
    }
    this.marcas.unshift('');
  }

  crearFichas() {
    for (let i = 0; i <= 1; i++) {
      this.fichas.forEach((item) => {
        let col = i == 0 ? 'negro' : 'blanco';
        let punt: number;
        let pos: Celda;
        switch (item) {
          case 'Peón':
            punt = 1;
            for (let j = 1; j <= 8; j++) {
              //a partir del tablero define la posición
              this.tablero[i == 0 ? 1 : 6][j].Estado = 'ocupado';
              pos = this.tablero[i == 0 ? 1 : 6][j];
              let ficha = new Ficha(item, col, punt, pos, '', '', true);
              i == 0 ? this.negras.push(ficha) : this.blancas.push(ficha);
            }
            break;
          case 'Torre':
            punt = 5;
            for (let k = 0; k <= 1; k++) {
              this.tablero[i == 0 ? 0 : 7][k == 0 ? 1 : 8].Estado = 'ocupado';
              pos = this.tablero[i == 0 ? 0 : 7][k == 0 ? 1 : 8];
              let ficha = new Ficha(item, col, punt, pos, '', '', true);
              i == 0 ? this.negras.push(ficha) : this.blancas.push(ficha);
            }
            break;
          case 'Alfil':
            punt = 3;
            for (let l = 0; l <= 1; l++) {
              this.tablero[i == 0 ? 0 : 7][l == 0 ? 2 : 7].Estado = 'ocupado';
              pos = this.tablero[i == 0 ? 0 : 7][l == 0 ? 2 : 7];
              let ficha = new Ficha(item, col, punt, pos, '', '', true);
              i == 0 ? this.negras.push(ficha) : this.blancas.push(ficha);
            }
            break;
          case 'Caballo':
            punt = 3;
            for (let m = 0; m <= 1; m++) {
              this.tablero[i == 0 ? 0 : 7][m == 0 ? 3 : 6].Estado = 'ocupado';
              pos = this.tablero[i == 0 ? 0 : 7][m == 0 ? 3 : 6];
              let ficha = new Ficha(item, col, punt, pos, '', '', true);
              i == 0 ? this.negras.push(ficha) : this.blancas.push(ficha);
            }
            break;
          case 'Reina':
            {
              punt = 9;
              this.tablero[i == 0 ? 0 : 7][4].Estado = 'ocupado';
              pos = this.tablero[i == 0 ? 0 : 7][4];
              let ficha = new Ficha(item, col, punt, pos, '', '', true);
              i == 0 ? this.negras.push(ficha) : this.blancas.push(ficha);
            }
            break;
          default:
            {
              punt = 10;
              this.tablero[i == 0 ? 0 : 7][5].Estado = 'ocupado';
              pos = this.tablero[i == 0 ? 0 : 7][5];
              let ficha = new Ficha(item, col, punt, pos, '', '', true);
              i == 0 ? this.negras.push(ficha) : this.blancas.push(ficha);
            }
            break;
        }
      });
    }
    console.log(this.negras);
    console.log(this.blancas);
  }

  colocarFichas() {}

  //esto se gatilla al click y aquí se llama a la función calcular movimiento de la ficha donde se le pasará el tablero.
  marcarMovimiento(elem: any) {
    console.log(elem);
  }
}
