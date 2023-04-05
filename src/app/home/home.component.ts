import { Component, OnInit } from '@angular/core';

import { Celda } from '../interfaces/celda';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  marcas: any[] = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  tablero: any[] = [
    ['1', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['2', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['3', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['4', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['5', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['6', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['7', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    ['8', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  ];

  constructor() {}

  ngOnInit(): void {}
}
