export class Celda {
  constructor(celda: string, color: string, marc?: boolean) {
    this.IdCelda = celda;
    this.Color = color;
    this.marca = marc;
  }

  IdCelda: string;
  Color: string;
  marca?: boolean;
}
