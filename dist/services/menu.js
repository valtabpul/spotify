var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { actualizarCancion, agregarCancion, obtenerCatalogoCanciones, eliminarCancion } from "./services.js";
import readline from "readline";
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
function pregunta(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta) => {
            resolve(respuesta);
        });
    });
}
function agregarCancionMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\n--- Agregar Nueva Canción ---");
        const id = parseInt(yield pregunta("ID: "));
        const nombre = yield pregunta("Nombre: ");
        const genero = yield pregunta("Género (pop/hip hop/salsa/bachata/vallenato/reggaeton): ");
        const duración = parseInt(yield pregunta("Duración (segundos): "));
        const disponibilidad = (yield pregunta("¿Disponible? (si/no): ")).toLowerCase() === "si";
        const idioma = yield pregunta("Idioma (Español/Ingles/Coreano/Portugués/Turco): ");
        const artista = yield pregunta("Artista: ");
        const reproduciones = parseInt(yield pregunta("Reproducciones: ")) || 0;
        const favoritos = (yield pregunta("¿Favorito? (si/no): ")).toLowerCase() === "si";
        const nuevaCancion = {
            id,
            nombre,
            genero,
            duración,
            disponibilidad,
            idioma,
            artista,
            fechaLanzamiento: new Date(),
            reproduciones,
            favoritos
        };
        agregarCancion(nuevaCancion);
    });
}
function actualizarCancionMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\n--- Actualizar Canción ---");
        const id = parseInt(yield pregunta("ID de la canción: "));
        console.log("Ingresa los datos a actualizar (deja vacío para no cambiar):");
        const nombre = yield pregunta("Nuevo nombre: ");
        const artista = yield pregunta("Nuevo artista: ");
        const datos = {};
        if (nombre)
            datos.nombre = nombre;
        if (artista)
            datos.artista = artista;
        if (Object.keys(datos).length > 0) {
            actualizarCancion(id, datos);
        }
        else {
            console.log("No se realizó ninguna actualización");
        }
    });
}
function eliminarCancionMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\n--- Eliminar Canción ---");
        const id = parseInt(yield pregunta("ID de la canción a eliminar: "));
        eliminarCancion(id);
    });
}
function mostrarMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("\n=== CRUD Canciones ===");
        console.log("1. Ver todas las canciones");
        console.log("2. Agregar una canción");
        console.log("3. Actualizar una canción");
        console.log("4. Eliminar una canción");
        console.log("5. Salir");
        const opcion = yield pregunta("\nElige una opción (1-5): ");
        switch (opcion) {
            case "1":
                console.log("\n--- Catálogo de Canciones ---");
                console.table(obtenerCatalogoCanciones());
                yield mostrarMenu();
                break;
            case "2":
                yield agregarCancionMenu();
                yield mostrarMenu();
                break;
            case "3":
                yield actualizarCancionMenu();
                yield mostrarMenu();
                break;
            case "4":
                yield eliminarCancionMenu();
                yield mostrarMenu();
                break;
            case "5":
                console.log("\n¡Hasta luego!");
                rl.close();
                break;
            default:
                console.log("Opción no válida");
                yield mostrarMenu();
        }
    });
}
export { mostrarMenu };
