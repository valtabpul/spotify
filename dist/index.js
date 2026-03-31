import { actualizarCancion, agregarCancion, obtenerCatalogoCanciones } from "./services/services.js";
console.table(obtenerCatalogoCanciones());
agregarCancion({
    id: 11,
    nombre: "Nueva Canción",
    genero: "pop",
    duración: 200,
    disponibilidad: true,
    idioma: "Español",
    artista: "Nuevo Artista",
    fechaLanzamiento: new Date(),
    reproduciones: 0,
    favoritos: false
});
console.table(obtenerCatalogoCanciones());
actualizarCancion(1, { nombre: "Sueños Actualizados" });
console.table(obtenerCatalogoCanciones());
