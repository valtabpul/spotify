var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { rl } from "../interactions";
import { obtenerCatalogoCanciones, agregarCancion, actualizarCancion, eliminarCancion } from "./services";
export function menu() {
    return __awaiter(this, void 0, void 0, function* () {
        let opcion = "";
        do {
            console.log("\n--- MENÚ SPOTIFY ---");
            console.log("1. Ver canciones");
            console.log("2. Agregar canción");
            console.log("3. Actualizar canción");
            console.log("4. Eliminar canción");
            console.log("5. Salir");
            opcion = yield rl.question("Elige una opción: ");
            switch (opcion) {
                case "1":
                    console.table(obtenerCatalogoCanciones());
                    break;
                case "2":
                    console.log("\n======= AGREGAR NUEVA CANCIÓN =======\n");
                    const nuevaCancion = {
                        id: Number(yield rl.question("ID de la canción: ")),
                        nombre: yield rl.question("Nombre de la canción: "),
                        genero: yield rl.question("Género (pop/hip hop/salsa/bachata/vallenato/reggaeton): "),
                        duración: Number(yield rl.question("Duración en segundos: ")),
                        disponibilidad: (yield rl.question("¿Disponible? (si/no): ")).toLowerCase() === "si",
                        idioma: yield rl.question("Idioma (Español/Ingles/Coreano/Portugués/Turco): "),
                        artista: yield rl.question("Artista: "),
                        fechaLanzamiento: new Date(yield rl.question("Fecha de lanzamiento (YYYY-MM-DD): ")),
                        reproduciones: Number(yield rl.question("Número de reproducciones: ")),
                        favoritos: (yield rl.question("¿Es favorita? (si/no): ")).toLowerCase() === "si"
                    };
                    agregarCancion(nuevaCancion);
                    break;
                case "3":
                    console.log("\n======= ACTUALIZAR CANCIÓN =======\n");
                    const idActualizar = Number(yield rl.question("ID de la canción a actualizar: "));
                    const nuevoNombre = yield rl.question("Nuevo nombre de la canción: ");
                    actualizarCancion(idActualizar, { nombre: nuevoNombre });
                    break;
                case "4":
                    console.log("\n======= ELIMINAR CANCIÓN =======\n");
                    const idEliminar = Number(yield rl.question("ID de la canción a eliminar: "));
                    eliminarCancion(idEliminar);
                    break;
            }
        } while (opcion !== "5");
        rl.close();
    });
}
