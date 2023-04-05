export class Celda {

  constructor(celda: string, color: string, bloqueada: boolean) {
    this.IdCelda = celda;
    this.Color = color
    this.Bloqueada = bloqueada
  }

  IdCelda: string
  Color: string
  Bloqueada: boolean

}
