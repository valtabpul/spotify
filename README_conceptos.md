# Conceptos clave: Namespaces, Clases y Decoradores

Este archivo ofrece una explicación clara y breve sobre tres conceptos usados en el proyecto: `namespace`, clases y constructores, y el decorador `logMetodo` (ver [src/models/models.ts](src/models/models.ts)).

## Resumen

- `namespace Modelos`: contenedor lógico que agrupa tipos, interfaces y clases del dominio (usuarios, canciones, podcasts).
- Clases (`Usuario`, `Cancion`, `Podcast`): plantillas (moldes) para crear objetos; los `constructor` inicializan sus propiedades.
- `@logMetodo`: decorador que imprime en consola cuando se ejecuta un método, útil para depuración.

---

## Namespace

Un `namespace` actúa como una "carpeta virtual" dentro del código. Ventajas:

- Organiza elementos relacionados (tipos, interfaces, clases).
- Evita conflictos de nombres en el scope global.
- Acceso explícito: `Modelos.Usuario`, `Modelos.Cancion`.

Ejemplo simple:

```ts
export namespace Modelos {
  export type Genero = "pop" | "hip hop" | "salsa";
  export interface UsuarioDatos { id: number; nombre: string }
  export class Usuario implements UsuarioDatos { constructor(public id: number, public nombre: string) {} }
}
```

---

## Clases y constructores

- Clase: plantilla que define propiedades (datos) y métodos (comportamiento).
- Constructor: función especial que se ejecuta al crear la instancia con `new` y asigna valores a las propiedades.
- Atajo de TypeScript: declarar parámetros del constructor con `public` crea y asigna la propiedad automáticamente.

En `src/models/models.ts`:

- `Usuario` — constructor con `id, nombre, userName, email, telefono, pais`.
- `Cancion` — constructor con `genero, duración, idioma, artista, fechaLanzamiento, reproduciones, favoritos`.
- `Podcast` — constructor con `tematica, duración, idioma, autor, fechaLanzamiento, reproduciones, seguir`.

Ejemplo de creación:

```ts
const u = new Modelos.Usuario(1, "Ana", "ana123", "ana@mail.com", 3001234567, "Colombia");
const c = new Modelos.Cancion(
  1, "Canción", "pop", 180, true, "Español", "Artista", new Date("2020-01-01"), 1000, false
);
```

---

## Decorador `logMetodo`

- Implementación: función `logMetodo` colocada sobre un método con `@logMetodo`.
- Función: intercepta la llamada, registra en consola (`[decorador] Ejecutando <nombre>`) y luego ejecuta el método original.
- En el proyecto: usado en `Cancion.resumen()` para mostrar trazabilidad cuando se invoca.

Ejemplo observado:

```ts
console.log(c.resumen());
// Consola: [decorador] Ejecutando resumen
// Salida: "Canción - Artista"
```


