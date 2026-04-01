function logMetodo(
    _target: object,
    propiedad: string | symbol,
    descriptor: PropertyDescriptor
): void {
    const original = descriptor.value as (...args: unknown[]) => unknown;

    descriptor.value = function (...args: unknown[]): unknown {
        console.log(`[decorador] Ejecutando ${String(propiedad)}`);
        return original.apply(this, args);
    };
}

export namespace Modelos {
    export type Tematica = "literatura" | "noticias" | "video juegos" | "comedia" | "religion" | "politica" | "deportes" | "estilos de vida" | "tecnologia" | "ciencia";
    export type Genero = "pop" | "hip hop" | "salsa" | "bachata" | "vallenato" | "reggaeton";
    export type Idioma = "Español" | "Ingles" | "Coreano" | "Portugués" | "Turco";

    export interface UsuarioDatos {
        id: number;
        nombre: string;
        userName: string;
        email: string;
        telefono: number;
        pais: string;
    }

    export interface CancionDatos {
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
    }

    export interface PodcastDatos {
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

    export class Usuario implements UsuarioDatos {
        constructor(
            public id: number,
            public nombre: string,
            public userName: string,
            public email: string,
            public telefono: number,
            public pais: string
        ) {}
    }

    export class Cancion implements CancionDatos {
        constructor(
            public id: number,
            public nombre: string,
            public genero: Genero,
            public duración: number,
            public disponibilidad: boolean,
            public idioma: Idioma,
            public artista: string,
            public fechaLanzamiento: Date,
            public reproduciones: number,
            public favoritos: boolean
        ) {}

        @logMetodo
        resumen(): string {
            return `${this.nombre} - ${this.artista}`;
        }
    }

    export class Podcast implements PodcastDatos {
        constructor(
            public id: number,
            public nombre: string,
            public tematica: Tematica,
            public duración: number,
            public disponibilidad: boolean,
            public idioma: Idioma,
            public autor: string,
            public fechaLanzamiento: Date,
            public reproduciones: number,
            public seguir: boolean
        ) {}
    }
}

