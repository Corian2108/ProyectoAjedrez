export class Regla {}
/**
 * ?reglas del ajedrez
 *
 * !Reglas generales
 * Esto hay que definirlo en la calse juego.turno
 * *Empiezan moviendo las blancas.
 * Esto hay que definirlo en cada ficha en la función calcular movimiento
 * *Dos fichas no pueden ocupar la misma celda al mismo tiempo.
 * *Ninguna ficha puede pasar a travéz de otra a excepción del caballo.
 * Esto se define en le clase juego
 * *Cada jugador puede mover una ficha por turno.
 * *El ganador es quien pone en jaque mate al rey enemigo.
 * !hay que poner un estado en las fichas y el objeto juego tiene que evaluar si el rey está amenazado y en el método calcular movimiento if(rey amenazado){movimiento quita amenaza?permitir:bloquear}
 * *Si el rey es amenazado está en Jaque, el siguiente movimiento del jugador en jaque debe sacar al rey de ese estado.
 * !para evaluar esto cacho que hay que calcular el movimiento de cada ficha al inicio de cada turno, con el fin de verificar si quedan movimientos posbles para el jugador en turno, sin necesidad de hacer click en cada ficha y si el rey está en jaque, entonces ocurre que: if(rey en jaque){quedan movimientos?jaque:jaque mate}else if(!rey en jaque){quedan movimientos?mover:jaque ahogado}, controlar jaque con estado global en el objeto juego
 * *El jaque mate se produce cuando el jugador en jaque no puede sacar a su rey de dicho estado con ninguno de sus movimientos.
 * *Si el rey no está en jaque pero el jugador en turno no tiene más movimientos se dice un jaque ahogado y el juego termina.
 * Esto hay que evaluarlo en el movimiento del rey??
 * *Ningún jugador puede exponer a su rey al jaque.
 * Esto se coloca por ficha
 * *Cada ficha cumple su regla de movimiento.
 * Esto lo controlamos a través de estados en las fichas y activar el movimiento enroque en el juego
 * *Enroque: Es un movimiento especial que puede ejecutar cualquier jugador durante su turno mientras: el rey y la torre involucradas no se hayan movido anteriormente, ninguno de los dos esté amenazado, ninguna de las casillas por las que tienen que moverse esté amenazada; Existen dos tipos: enroque corto se hace con la torre del rey, el rey toma la posición g y la torre la f; enroque largo se hace con la torre de la dama, el rey toma la posición c y la torre la posición d.
 *
 * !Reglas de movimiento
 * Por ficha
 * *El peón: se mueve siempre con un paso al frente pero cuando ataca lo hace en diagonal siempre al frente; excepciones: cuando está en posición inicial puede moverse dos pasos al frente, la regla de comer al paso que no la entiendo muy bien; especial: cuando alcanza el otro extremo del tablero se puede transformar en cualquier pieza de mayor valor en su lugar.
 *
 * *La torre: se mueve en lineas rectas, hacia adelante, atrás, derecha o izquierda a todo lo largo y ancho del tablero mientras nada se lo impida.
 *
 *a partir de la posición inicial de la ficha se cuenta las casillas hacia donde dicata la regla, si la ficha es blanca el frente estará en sentido 1-8 creciente, is son negras el frente será en sentido 8-1 decreciente, como los lados (derecha, izquierda) son relativos bastará con verificar si hay espacio.
 *
 * *El alfíl: se mueve en diagonales a todo lo que da el tablero, solo por celdas del color inicial, cada jugador tiene un alfil que mueve por negras y uno que mueve por blancas.
 *
 * *El caballo: es la única ficha que puede saltar a otras, su movimiento es el L dos celdas adelante o los lados y una hacia los lados o las verticales para completar el movimiento.
 *
 * *La dama o reina: se mueve en verticales, y diagonales, como una torre y un alfil combinados, a todo lo largo y ancho del tablero.
 *
 * *El rey: se mueve dando un paso a la vez en cualquier dirección siempre y cuadno la casilla no esté amenazada.
 */
