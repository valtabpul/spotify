import type { Canciones } from "../models/models.js";
export declare const obtenerCatalogoCanciones: () => Canciones[];
export declare const agregarCancion: (nuevaCancion: Canciones) => void;
export declare const actualizarCancion: (id: number, datosActualizados: Partial<Omit<Canciones, "id">>) => void;
//# sourceMappingURL=services.d.ts.map