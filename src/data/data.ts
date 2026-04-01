import { Modelos } from "../models/models.js";


export const usuarios: Modelos.Usuario[] = [
  new Modelos.Usuario(1, "Juan Pérez", "juanp", "juan@gmail.com", 3001234567, "Colombia"),
  new Modelos.Usuario(2, "Ana Gómez", "anag", "ana@gmail.com", 3012345678, "México"),
  new Modelos.Usuario(3, "Carlos Ruiz", "carlosr", "carlos@gmail.com", 3023456789, "España"),
  new Modelos.Usuario(4, "Luisa Martínez", "luism", "luisa@gmail.com", 3034567890, "Argentina"),
  new Modelos.Usuario(5, "Pedro Sánchez", "pedros", "pedro@gmail.com", 3045678901, "Chile"),
];

export const canciones: Modelos.Cancion[] = [
  new Modelos.Cancion(1, "Sueños", "pop", 210, true, "Español", "Artista 1", new Date("2023-01-10"), 1500, true),
  new Modelos.Cancion(2, "Flow Urbano", "hip hop", 180, true, "Español", "Artista 2", new Date("2022-05-20"), 2500, false),
  new Modelos.Cancion(3, "Salsa Viva", "salsa", 240, true, "Español", "Artista 3", new Date("2021-08-15"), 3200, true),
  new Modelos.Cancion(4, "Bachata Rosa", "bachata", 200, false, "Español", "Artista 4", new Date("2020-03-11"), 1800, false),
  new Modelos.Cancion(5, "Vallenato Love", "vallenato", 230, true, "Español", "Artista 5", new Date("2023-07-01"), 4000, true),
  new Modelos.Cancion(6, "Reggaeton Beat", "reggaeton", 190, true, "Español", "Artista 6", new Date("2024-01-01"), 6000, false),
  new Modelos.Cancion(7, "Pop Star", "pop", 220, true, "Ingles", "Artista 7", new Date("2023-02-14"), 7200, true),
  new Modelos.Cancion(8, "Hip Hop Kings", "hip hop", 210, false, "Ingles", "Artista 8", new Date("2022-09-09"), 2900, false),
  new Modelos.Cancion(9, "Latin Salsa", "salsa", 250, true, "Español", "Artista 9", new Date("2021-06-06"), 3300, true),
  new Modelos.Cancion(10, "Bachata Nights", "bachata", 205, true, "Español", "Artista 10", new Date("2023-11-11"), 4100, false),
];

export const podcasts: Modelos.Podcast[] = [
  new Modelos.Podcast(1, "Tech Today", "tecnologia", 1800, true, "Español", "Autor 1", new Date("2023-01-01"), 1000, true),
  new Modelos.Podcast(2, "Noticias Globales", "noticias", 1500, true, "Español", "Autor 2", new Date("2023-02-01"), 2000, false),
  new Modelos.Podcast(3, "Gaming Show", "video juegos", 2100, true, "Ingles", "Autor 3", new Date("2022-11-01"), 3500, true),
  new Modelos.Podcast(4, "Ciencia al Día", "ciencia", 1900, true, "Español", "Autor 4", new Date("2021-06-01"), 2800, false),
  new Modelos.Podcast(5, "Risas Podcast", "comedia", 1600, true, "Español", "Autor 5", new Date("2023-04-01"), 4200, true),
];

