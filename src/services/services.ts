import  { usuarios,canciones,podcasts} from "../data/data.js";

import type { Canciones } from "../models/models.js";

export const obtenerCatalogoCanciones = (): Canciones[] => {
    return [...canciones];
}

//agregar funcion que me permita insertar un nuevo objeto
export const agregarCancion = (nuevaCancion: Canciones): void => {
    const existe = canciones.some(p => p.id === nuevaCancion.id);

    if (existe) {
        console.log("Cancion ya existente ");
        return;
    }
    else {
    canciones.push(nuevaCancion);
    console.log("Se agrego exitosamente la cancion ");
    }
}

export const actualizarCancion = (id: number, datosActualizados: Partial<Omit<Canciones, 'id'>>): void => {
    const index = canciones.findIndex(c => c.id === id);

    if (index === -1) {
        console.log("Canción no encontrada");
        return;
    }

    canciones[index] = {
        ...canciones[index],
        ...datosActualizados
    } as Canciones;

    console.log("Canción actualizada correctamente");
}