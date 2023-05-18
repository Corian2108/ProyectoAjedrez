import { Celda } from 'src/app/interfaces/celda';

export class Ficha {
  constructor(
    nombre: string,
    color: string,
    puntaje: number,
    pos: Celda,
    regla: string,
    sprite: string
  ) {
    this.Nombre = nombre;
    this.Color = color;
    this.Puntaje = puntaje;
    this.Posicion = pos;
    this.Regla = regla;
    this.Sprite = sprite;
  }

  Nombre: string;
  Color: string;
  Puntaje: number;
  Posicion: Celda;
  Regla: string;
  Movimiento?: Celda[];
  Sprite: string;

  CalcularMovimiento() {}
}
