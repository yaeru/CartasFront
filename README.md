# front

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

# Instrucciones

## Cartas

Cada Carta representa a un dios o personaje mitologico.

Cada Carta debe incluir:

- Un nombre
- Una descripcion breve
- Una descripcion larga
- Una imagen
- Una cultura
- Un nivel de Poder
- Temporada a la que pertenece

## Colecciones

Cada Jugador puede coleccionar Cartas para luego armar sus mazos y leer informacion sobre el dios y la cultura de la misma.
Las Colecciones pueden ampliarse por Temporadas y Eventos especiales.

## Temporadas

Las Temporadas son un periodo de x tiempo en la que x cultura esta promocionada. Una vez comenzada la nueva temporada, se agrega un nuevo set de Cartas para hacer interesante el juego.

Ejemplo:

Temporada 1 arranca con 30 Cartas: 10 griegas, 10 nordicas y 10 egipcias.
El usuario Batalla hasta obtener las 30 Cartas.
Comienza la temporada 2 "Culturas Latinas" y en el juego se añaden 30 Cartas nuevas: 10 maya, 10 Cartas araucania, 10 Cartas inca.
Ahora el usuario que ya tenia 30 en su coleccion, puede coleccionar 30 mas. El usuario que inicia por primera vez el juego, tiene 60 Cartas para coleccionar.

## Mazos

El Jugador puede tener varios Mazos, cada Mazo esta compuesto de hasta 10 Cartas, seleccionadas de las disponibles en la coleccion del Jugador.
Si el Jugador tiene 15 Cartas, debe armar un Mazo con solo 10 y dejar las 5 restantes sin poder utilizarce en las batallas.
Se pueden crear hasta 3 Mazos con diferentes configuraciones de Cartas para conseguir diversos efectos.

Cada Mazo debe incluir:

- Un nombre.
- Una descripcion opcional.
- 10 Cartas seleccionadas.
- Una url unica.

# Cómo Jugar

## Jugadores

En el juego exiten dos participantes: el usuario es Jugador A y la PC el Jugador B.

## Batalla

Las Batallas se dan entre el Jugador A y el Jugador B.

Ambos Jugadores comienzan con 100 de Vida, pierde la Batalla el primer Jugador que se quede sin Vida.

Al iniciar la Batalla, en caso de que el Jugador A tenga mas de un Mazo, este debe seleccionar con cual quiere participar.

Cada Batalla puede tener varios rounds. En cada Round el Jugador A escoge una Carta de su mazo, el Jugador B hara lo mismo, ambas se comparan y la que tenga el nivel de Poder mas alto, gana el Round.
El Jugador que pierda el Round se penaliza con -10 puntos de Vida.

Terminado el Round, se muestran los resultados y comienza un siguiente Round, asi hasta que uno de los Jugadores quede en 0 Vida y pierda la Batalla.

Una vez finalizada la Batalla, si el Jugador A gana, obtiene de recompenza una Carta nueva en su Coleccion.


## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
