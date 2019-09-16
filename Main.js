import Tablero from "./Tablero.js";
import Jugador from "./Jugadores.js";
import Carrera from "./Carrera.js";

class Main {
    constructor() {
        let playerUno = new Jugador(0);
        let playerDos = new Jugador(0);
        let carrera = new Carrera();
        let tablero = new Tablero();

        while (playerUno._posicionActual <= 99 && playerDos._posicionActual <= 99) {

            playerUno.runPlayerUno(playerUno.lanzarDado());
            playerDos.runPlayerDos(playerDos.lanzarDado());
            console.log("Nuevo tiro")
            console.log(playerUno._posicionActual, "player 1");
            // console.log(playerUno.tabla(playerUno._posicionActual, playerDos._posicionActual));
            if (playerUno._posicionActual == 5) {
                console.log(playerUno._posicionActual += 12,"Player 1 sube con escalera a 17");
            } else if (playerUno._posicionActual == 13) {
                console.log(playerUno._posicionActual += 18,"Player 1 sube con escalera a 31");
            } else if (playerUno._posicionActual == 21) {
                console.log(playerUno._posicionActual += 16,"Player 1 sube con escalera a 37");
            } else if (playerUno._posicionActual == 28) {
                console.log(playerUno._posicionActual += 36,"Player 1 sube con escalera a 64");
            } else if (playerUno._posicionActual == 48) {
                console.log(playerUno._posicionActual += 4,"Player 1 sube con escalera a 52");
            } else if (playerUno._posicionActual == 54) {
                console.log(playerUno._posicionActual += 37,"Player 1 sube con escalera a 91");
            } else if (playerUno._posicionActual == 62) {
                console.log(playerUno._posicionActual += 36,"Player 1 sube con escalera a 98");
            } else if (playerUno._posicionActual == 76) {
                console.log(playerUno._posicionActual += 10,"Player 1 sube con escalera a 86");
            }

            if (playerUno._posicionActual == 26) {
                console.log(playerUno._posicionActual -= 19, "Player 2 baja con serpiente a 7");
            } else if (playerUno._posicionActual == 33) {
                console.log(playerUno._posicionActual -= 23, "Player 2 baja con serpiente a 10");
            } else if (playerUno._posicionActual == 57) {
                console.log(playerUno._posicionActual -= 4, "Player 2 baja con serpiente a 53");
            } else if (playerUno._posicionActual == 59) {
                console.log(playerUno._posicionActual -= 35, "Player 2 baja con serpiente a 24");
            } else if (playerUno._posicionActual == 67) {
                console.log(playerUno._posicionActual -= 31, "Player 2 baja con serpiente a 36");
            } else if (playerUno._posicionActual == 71) {
                console.log(playerUno._posicionActual -= 22, "Player 2 baja con serpiente a 49");
            } else if (playerUno._posicionActual == 77) {
                console.log(playerUno._posicionActual -= 36, "Player 2 baja con serpiente a 41");
            } else if (playerUno._posicionActual == 84) {
                console.log(playerUno._posicionActual -= 23, "Player 2 baja con serpiente a 61");
            } else if (playerUno._posicionActual == 92) {
                console.log(playerUno._posicionActual -= 18, "Player 2 baja con serpiente a 74");
            } else if (playerUno._posicionActual == 97) {
                console.log(playerUno._posicionActual -= 31, "Player 2 baja con serpiente a 66");
            }


            console.log(playerDos._posicionActual, "player 2");
            if (playerDos._posicionActual == 5) {
                console.log(playerDos._posicionActual += 12, "Player 2 sube con escalera a 17");
            } else if (playerDos._posicionActual == 13) {
                console.log(playerDos._posicionActual += 18, "Player 2 sube con escalera a 31");
            } else if (playerDos._posicionActual == 21) {
                console.log(playerDos._posicionActual += 16, "Player 2 sube con escalera a 37");
            } else if (playerDos._posicionActual == 28) {
                console.log(playerDos._posicionActual += 36, "Player 2 sube con escalera a 64");
            } else if (playerDos._posicionActual == 48) {
                console.log(playerDos._posicionActual += 4, "Player 2 sube con escalera a 52");
            } else if (playerDos._posicionActual == 54) {
                console.log(playerDos._posicionActual += 37, "Player 2 sube con escalera a 91");
            } else if (playerDos._posicionActual == 62) {
                console.log(playerDos._posicionActual += 36, "Player 2 sube con escalera a 98");
            } else if (playerDos._posicionActual == 76) {
                console.log(playerDos._posicionActual += 10, "Player 2 sube con escalera a 86");
            }

            if (playerDos._posicionActual == 26) {
                console.log(playerDos._posicionActual -= 19, "Player 2 baja con serpiente a 7");
            } else if (playerDos._posicionActual == 33) {
                console.log(playerDos._posicionActual -= 23, "Player 2 baja con serpiente a 10");
            } else if (playerDos._posicionActual == 57) {
                console.log(playerDos._posicionActual -= 4, "Player 2 baja con serpiente a 53");
            } else if (playerDos._posicionActual == 59) {
                console.log(playerDos._posicionActual -= 35, "Player 2 baja con serpiente a 24");
            } else if (playerDos._posicionActual == 67) {
                console.log(playerDos._posicionActual -= 31, "Player 2 baja con serpiente a 36");
            } else if (playerDos._posicionActual == 71) {
                console.log(playerDos._posicionActual -= 22, "Player 2 baja con serpiente a 49");
            } else if (playerDos._posicionActual == 77) {
                console.log(playerDos._posicionActual -= 36, "Player 2 baja con serpiente a 41");
            } else if (playerDos._posicionActual == 84) {
                console.log(playerDos._posicionActual -= 23, "Player 2 baja con serpiente a 61");
            } else if (playerDos._posicionActual == 92) {
                console.log(playerDos._posicionActual -= 18, "Player 2 baja con serpiente a 74");
            } else if (playerDos._posicionActual == 97) {
                console.log(playerDos._posicionActual -= 31, "Player 2 baja con serpiente a 66");
            }

            console.log("")
            //  console.log(carrera.progreso(playerUno._posicionActual, playerDos._posicionActual));            
        }

        if (carrera.terminarCarrera(playerUno._posicionActual, playerDos._posicionActual) === true) {
            if (carrera.empate(playerUno._posicionActual, playerDos._posicionActual) === true) {
                console.log("empate");
            }
            console.log(carrera.ganador(playerUno._posicionActual, playerDos._posicionActual));
        }
    }
}
let m = new Main();