import { actualizarCancion, agregarCancion, obtenerCatalogoCanciones, eliminarCancion } from "./services.js";
import type { Canciones } from "../models/models.js";
import readline from "readline";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pregunta(texto: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta: string) => {
            resolve(respuesta);
        });
    });
}

async function agregarCancionMenu() {
    console.log("\n--- Agregar Nueva Canción ---");
    const id = parseInt(await pregunta("ID: "));
    const nombre = await pregunta("Nombre: ");
    const genero = await pregunta("Género (pop/hip hop/salsa/bachata/vallenato/reggaeton): ") as any;
    const duración = parseInt(await pregunta("Duración (segundos): "));
    const disponibilidad = (await pregunta("¿Disponible? (si/no): ")).toLowerCase() === "si";
    const idioma = await pregunta("Idioma (Español/Ingles/Coreano/Portugués/Turco): ") as any;
    const artista = await pregunta("Artista: ");
    const reproduciones = parseInt(await pregunta("Reproducciones: ")) || 0;
    const favoritos = (await pregunta("¿Favorito? (si/no): ")).toLowerCase() === "si";

    const nuevaCancion: Canciones = {
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
}

async function actualizarCancionMenu() {
    console.log("\n--- Actualizar Canción ---");
    const id = parseInt(await pregunta("ID de la canción: "));
    console.log("Ingresa los datos a actualizar (deja vacío para no cambiar):");
    const nombre = await pregunta("Nuevo nombre: ");
    const artista = await pregunta("Nuevo artista: ");

    const datos: any = {};
    if (nombre) datos.nombre = nombre;
    if (artista) datos.artista = artista;

    if (Object.keys(datos).length > 0) {
        actualizarCancion(id, datos);
    } else {
        console.log("No se realizó ninguna actualización");
    }
}

async function eliminarCancionMenu() {
    console.log("\n--- Eliminar Canción ---");
    const id = parseInt(await pregunta("ID de la canción a eliminar: "));
    eliminarCancion(id);
}

async function mostrarMenu() {
    console.log("\n=== CRUD Canciones ===");
    console.log("1. Ver todas las canciones");
    console.log("2. Agregar una canción");
    console.log("3. Actualizar una canción");
    console.log("4. Eliminar una canción");
    console.log("5. Salir");

    const opcion = await pregunta("\nElige una opción (1-5): ");

    switch (opcion) {
        case "1":
            console.log("\n--- Catálogo de Canciones ---");
            console.table(obtenerCatalogoCanciones());
            await mostrarMenu();
            break;
        case "2":
            await agregarCancionMenu();
            await mostrarMenu();
            break;
        case "3":
            await actualizarCancionMenu();
            await mostrarMenu();
            break;
        case "4":
            await eliminarCancionMenu();
            await mostrarMenu();
            break;
        case "5":
            console.log("\n¡Hasta luego!");
            rl.close();
            break;
        default:
            console.log("Opción no válida");
            await mostrarMenu();
    }
}

export { mostrarMenu };