var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logMetodo(_target, propiedad, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`[decorador] Ejecutando ${String(propiedad)}`);
        return original.apply(this, args);
    };
}
export var Modelos;
(function (Modelos) {
    class Usuario {
        constructor(id, nombre, userName, email, telefono, pais) {
            this.id = id;
            this.nombre = nombre;
            this.userName = userName;
            this.email = email;
            this.telefono = telefono;
            this.pais = pais;
        }
    }
    Modelos.Usuario = Usuario;
    class Cancion {
        constructor(id, nombre, genero, duración, disponibilidad, idioma, artista, fechaLanzamiento, reproduciones, favoritos) {
            this.id = id;
            this.nombre = nombre;
            this.genero = genero;
            this.duración = duración;
            this.disponibilidad = disponibilidad;
            this.idioma = idioma;
            this.artista = artista;
            this.fechaLanzamiento = fechaLanzamiento;
            this.reproduciones = reproduciones;
            this.favoritos = favoritos;
        }
        resumen() {
            return `${this.nombre} - ${this.artista}`;
        }
    }
    __decorate([
        logMetodo
    ], Cancion.prototype, "resumen", null);
    Modelos.Cancion = Cancion;
    class Podcast {
        constructor(id, nombre, tematica, duración, disponibilidad, idioma, autor, fechaLanzamiento, reproduciones, seguir) {
            this.id = id;
            this.nombre = nombre;
            this.tematica = tematica;
            this.duración = duración;
            this.disponibilidad = disponibilidad;
            this.idioma = idioma;
            this.autor = autor;
            this.fechaLanzamiento = fechaLanzamiento;
            this.reproduciones = reproduciones;
            this.seguir = seguir;
        }
    }
    Modelos.Podcast = Podcast;
})(Modelos || (Modelos = {}));
