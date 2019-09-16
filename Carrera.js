export default class Carrera {

    terminarCarrera(_posicionUno, _posicionDos) {
        if (_posicionUno >= 100 || _posicionDos >= 100) {
            return true;
        } else {
            return false;
        }
    }

    empate(_posicionUno, _posicionDos) {
        if (_posicionUno >= 100 && _posicionDos >= 100) {
            return true;
        } else {
            return false;
        }
    }

    ganador(_posicionUno, _posicionDos) {
        if (_posicionUno < _posicionDos) {
            return "Ganador Player Dos";
        } else {
            return "Ganador Player Uno";
        }
    }

    progreso(_posicionUno, _posicionDos) {
        if (_posicionUno < _posicionDos) {
            return "player 2 ganando";
        } else if (_posicionUno > _posicionDos) {
            return "player 1 ganando";
        } else if (_posicionUno === _posicionDos) {
            return "Van empatados";
        }
    }


    tabla(posicionUno, posicionDos, posicionActual) {
        if (posicionActual == 5) {
            return console.log(playerUno._posicionActual += 12,
            "Player 1 sube con escalera a 17");
        }
    }
}