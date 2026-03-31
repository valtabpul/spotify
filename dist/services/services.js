import { canciones } from "../data/data.js";
export const obtenerCatalogoCanciones = () => {
    return [...canciones];
};
//agregar funcion que me permita insertar un nuevo objeto
export const agregarCancion = (nuevaCancion) => {
    const existe = canciones.some(p => p.id === nuevaCancion.id);
    if (existe) {
        console.log("Cancion ya existente ");
        return;
    }
    else {
        canciones.push(nuevaCancion);
        console.log("Se agrego exitosamente la cancion ");
    }
};
export const actualizarCancion = (id, datosActualizados) => {
    const index = canciones.findIndex(c => c.id === id);
    if (index === -1) {
        console.log("Canción no encontrada");
        return;
    }
    canciones[index] = Object.assign(Object.assign({}, canciones[index]), datosActualizados);
    console.log("Canción actualizada correctamente");
};
export const eliminarCancion = (id) => {
    const index = canciones.findIndex(c => c.id === id);
    if (index === -1) {
        console.log("Canción no encontrada");
        return;
    }
    canciones.splice(index, 1);
    console.log("Canción eliminada correctamente");
};
