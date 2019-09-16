class Jugador{
    constructor(posicion){
        this._posicionActual = posicion;
    }

    get posicionActual() {
        return this._posicionActual;
    }

    lanzarDado() {
        return Math.trunc(Math.random()*6+1);
    }

    tabla(_posicionUno, _posicionDos, _posicionActual) {
        if (_posicionActual == 5) {
            return console.log(playerUno._posicionActual += 12, "Player 1 sube con escalera a 17");
        }
    }
}

class PlayerUno extends Jugador {
    constructor(_posicionActual){
        super(_posicionActual);
    }

    runPlayerUno(numero){
        if (numero <= 1){
            this._posicionActual += 1;
        } else if (numero <= 2){
            this._posicionActual += 2;
        } else if (numero <= 3){
            this._posicionActual += 3;
        } else if (numero <= 4){
            this._posicionActual += 4;
        } else if (numero <= 5){
            this._posicionActual += 5;
        } else if (numero <= 6){
            this._posicionActual += 6;
        }
    }

}

export default class PlayerDos extends PlayerUno {
    constructor(_posicionActual){
        super(_posicionActual);
    }

    runPlayerDos(numero){
        if (numero <= 1){
            this._posicionActual += 1;
        } else if (numero <= 2){
            this._posicionActual += 2;
        } else if (numero <= 3){
            this._posicionActual += 3;
        } else if (numero <= 4){
            this._posicionActual += 4;
        } else if (numero <= 5){
            this._posicionActual += 5;
        } else if (numero <= 6){
            this._posicionActual += 6;
        }
    }
}