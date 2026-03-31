type Tematica = 'literatura' | 'noticias' | 'video juegos' | 'comedia' | 'religion' | 'politica' | 'deportes' | 'estilos de vida' | 'tecnologia' | 'ciencia';
type Genero = 'pop' | 'hip hop' | 'salsa' | 'bachata' | 'vallenato' | 'reggaeton';
type Idioma = 'Español' | 'Ingles' | 'Coreano' | 'Portugués' | 'Turco';
export interface Usuario {
    id: number;
    nombre: string;
    userName: string;
    email: string;
    telefono: number;
    pais: string;
}
export type Canciones = {
    id: number;
    nombre: string;
    genero: Genero;
    duración: number;
    disponibilidad: boolean;
    idioma: Idioma;
    artista: string;
    fechaLanzamiento: Date;
    reproduciones: number;
    favoritos: boolean;
};
export interface Podcast {
    id: number;
    nombre: string;
    tematica: Tematica;
    duración: number;
    disponibilidad: boolean;
    idioma: Idioma;
    autor: string;
    fechaLanzamiento: Date;
    reproduciones: number;
    seguir: boolean;
}
export {};
//# sourceMappingURL=models.d.ts.map