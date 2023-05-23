import { Coordenada } from 'src/app/interfaces/coordenada';

export class Celda {
  constructor(celda: string, color: string, cor?: Coordenada, marc?: boolean) {
    this.IdCelda = celda;
    this.Color = color;
    this.Coord = cor;
    this.marca = marc;
  }

  IdCelda: string;
  Color: string;
  Coord?: Coordenada;
  marca?: boolean;
  Estado?: string;
}
