"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const readline = require("readline");
class AppNotas {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    iniciar() {
        this.pedirNota();
    }
    pedirNota() {
        this.rl.question("ingrese su nota: ", (respuesta) => {
            const nota = Number(respuesta);
            this.evaluarNota(nota);
            this.cerrar();
        });
    }
    evaluarNota(nota) {
        if (nota >= 0 && nota < 6) {
            console.log("Estado: Reprobado");
        }
        else if (nota >= 6 && nota < 7) {
            console.log("Estado: Regular");
        }
        else if (nota >= 7 && nota < 9) {
            console.log("Estado: Bueno");
        }
        else if (nota >= 9 && nota <= 10) {
            console.log("Estado: Exelente!!");
        }
        else {
            console.log("Ingrese una nota valida");
        }
    }
    cerrar() {
        this.rl.close();
    }
}
const estudiante = new AppNotas();
estudiante.iniciar();
//# sourceMappingURL=Ejercicio01.js.map