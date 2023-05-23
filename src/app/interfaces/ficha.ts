import { Celda } from 'src/app/interfaces/celda';

export class Ficha {
  constructor(
    nombre: string,
    color: string,
    puntaje: number,
    pos: Celda,
    regla: string,
    sprite: string,
    inicial: boolean
  ) {
    this.Nombre = nombre;
    this.Color = color;
    this.Puntaje = puntaje;
    this.Posicion = pos;
    this.Regla = regla;
    this.Sprite = sprite;
    this.Inicial = inicial;
  }

  Nombre: string;
  Color: string;
  Puntaje: number;
  Posicion: Celda;
  Regla: string;
  Movimientos: Celda[] = [];
  Sprite: string;
  Inicial: boolean;

  CalcularMovimiento(tablero: any[]) {
    switch (this.Nombre) {
      case 'Peón':
        this.Movimientos = [];
        this.CalcularVertical(tablero, 1);
        break;
      case 'Torre':
        this.Movimientos = [];
        this.CalcularVertical(tablero, 7);
        this.CalcularLateral(tablero, 7);
        break;
      case 'Alfil':
        this.Movimientos = [];
        this.CalcularDiagonal(tablero, 7);
        break;
      case 'Caballo':
        this.Movimientos = [];
        this.CalcularL(tablero, 3);
        break;
      case 'Reina':
        this.Movimientos = [];
        this.CalcularVertical(tablero, 7);
        this.CalcularLateral(tablero, 7);
        this.CalcularDiagonal(tablero, 7);
        break;
      case 'Rey':
        this.Movimientos = [];
        this.CalcularVertical(tablero, 1);
        this.CalcularLateral(tablero, 1);
        this.CalcularDiagonal(tablero, 1);
        break;
    }
  }

  private CalcularVertical(table: any[], max: number) {
    let col = this.Posicion.Coord?.Columna;
    table.forEach((item: Celda[]) => {
      let movs = item.filter((cel) => {
        cel.Coord?.Columna === col && cel.Estado !== 'ocupado' ? (cel.Estado = 'amenazado') : cel.Estado;
        return cel.Coord?.Columna === col && !cel.marca && cel.IdCelda !== this.Posicion.IdCelda; //falta colocar filtro de celdas ocupadas e inaccesibles
      });
      this.Movimientos.push(...movs);
    });
  }

  private CalcularLateral(table: any[], max: number) {
    let fil = this.Posicion.Coord?.Fila;
    table.forEach((item: Celda[]) => {
      let movs = item.filter((cel) => {
        cel.Coord?.Fila === fil && cel.Estado !== 'ocupado' ? (cel.Estado = 'amenazado') : cel.Estado;
        return cel.Coord?.Fila === fil && !cel.marca && cel.IdCelda !== this.Posicion.IdCelda; //falta colocar filtro de celdas ocupadas e inaccesibles
      });
      this.Movimientos.push(...movs);
    });
  }

  private CalcularDiagonal(table: any[], max: number) {}

  private CalcularL(table: any[], max: number) {}
}
