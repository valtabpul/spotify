import { actualizarCancion, agregarCancion, obtenerCatalogoCanciones, eliminarCancion } from "./services.js";
import { Modelos } from "../models/models.js";
import readline from "readline";

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function pregunta(texto: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(texto, (respuesta: string) => {
            resolve(respuesta);
        });
    });
}

const generosDisponibles: Modelos.Genero[] = ["pop", "hip hop", "salsa", "bachata", "vallenato", "reggaeton"];
const idiomasDisponibles: Modelos.Idioma[] = ["Español", "Ingles", "Coreano", "Portugués", "Turco"];

function parseNumero(valor: string): number {
    const numero = Number(valor);
    return Number.isNaN(numero) ? 0 : numero;
}

function normalizarGenero(valor: string): Modelos.Genero {
    const encontrado = generosDisponibles.find((g) => g === valor);
    return encontrado ?? "pop";
}

function normalizarIdioma(valor: string): Modelos.Idioma {
    const encontrado = idiomasDisponibles.find((i) => i === valor);
    return encontrado ?? "Español";
}

async function agregarCancionMenu(): Promise<void> {
    console.log("\n--- Agregar Nueva Canción ---");
    const id = parseNumero(await pregunta("ID: "));
    const nombre = await pregunta("Nombre: ");
    const generoTexto = await pregunta("Género (pop/hip hop/salsa/bachata/vallenato/reggaeton): ");
    const genero = normalizarGenero(generoTexto);
    const duración = parseNumero(await pregunta("Duración (segundos): "));
    const disponibilidad = (await pregunta("¿Disponible? (si/no): ")).toLowerCase() === "si";
    const idiomaTexto = await pregunta("Idioma (Español/Ingles/Coreano/Portugués/Turco): ");
    const idioma = normalizarIdioma(idiomaTexto);
    const artista = await pregunta("Artista: ");
    const reproduciones = parseNumero(await pregunta("Reproducciones: "));
    const favoritos = (await pregunta("¿Favorito? (si/no): ")).toLowerCase() === "si";

    const nuevaCancion = new Modelos.Cancion(
        id,
        nombre,
        genero,
        duración,
        disponibilidad,
        idioma,
        artista,
        new Date(),
        reproduciones,
        favoritos
    );

    agregarCancion(nuevaCancion);
}

async function actualizarCancionMenu(): Promise<void> {
    console.log("\n--- Actualizar Canción ---");
    const id = parseNumero(await pregunta("ID de la canción: "));
    console.log("Ingresa los datos a actualizar (deja vacío para no cambiar):");
    const nombre = await pregunta("Nuevo nombre: ");
    const artista = await pregunta("Nuevo artista: ");

    const datos: Partial<Omit<Modelos.CancionDatos, "id">> = {};
    if (nombre) datos.nombre = nombre;
    if (artista) datos.artista = artista;

    if (Object.keys(datos).length > 0) {
        actualizarCancion(id, datos);
    } else {
        console.log("No se realizó ninguna actualización");
    }
}

async function eliminarCancionMenu(): Promise<void> {
    console.log("\n--- Eliminar Canción ---");
    const id = parseNumero(await pregunta("ID de la canción a eliminar: "));
    eliminarCancion(id);
}

async function mostrarMenu(): Promise<void> {
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