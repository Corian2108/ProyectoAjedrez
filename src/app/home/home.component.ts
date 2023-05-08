import { Component, OnInit } from '@angular/core';

import { Celda } from 'src/app/interfaces/celda';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  marcas: any[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  tablero: any[] = [];
  // [
  //   ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  //   ['2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  //   ['3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  //   ['4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  //   ['5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  //   ['6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  //   ['7', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  //   ['8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  // ];

  constructor() {}

  ngOnInit() {
    this.crearTablero();
  }

  crearTablero() {
    for (let i = 1; i <= 8; i++) {
      let row: Celda[] = [new Celda(`${i}`,'', true)];
      this.marcas.forEach((col, index) => {
        let color1;
        let color2;
        (index + 1) % 2 == 0
          ? ((color1 = 'blanco'), (color2 = 'negro'))
          : ((color1 = 'negro'), (color2 = 'blanco'));
        row.push(
          new Celda(`${col + i}`, i % 2 == 0 ? `${color2}` : `${color1}`)
        );
      });
      this.tablero.push(row);
    }
    this.marcas.unshift('')
    // this.marcas.forEach((col, index) => {
    //   let column = [];
    //   let color1;
    //   let color2;
    //   (index + 1) % 2 == 0
    //     ? ((color1 = 'blanco'), (color2 = 'negro'))
    //     : ((color1 = 'negro'), (color2 = 'blanco'));

    //   for (let i = 1; i <= 8; i++) {
    //     column.push(
    //       new Celda(`${col + i}`, i % 2 == 0 ? `${color2}` : `${color1}`)
    //     );
    //   }
    //   this.tablero.push(column);
    // });
    console.log(this.tablero);
  }
}
