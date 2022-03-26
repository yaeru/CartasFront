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

Al comenzar el usuario solo tiene 5 cartas.
Por cada batalla ganada, obtiene una carta de premio.
Por cada batalla perdida, no hay penalizacion.
El usuario batalla hasta obtener todas las cartas disponibles en la temporada, de un total de 30 cartas.

## Colecciones

Cada jugador puede coleccionar cartas para luego armar sus mazos y leer informacion sobre el dios y la cultura de la misma.
Las colecciones pueden ampliarse por temporadas y eventos especiales.

## Mazos

Cada mazo esta compuesto de hasta 10 cartas, seleccionadas de las disponibles en la coleccion del jugador.
Si el jugador tiene 15 cartas, debe armar un mazo con solo 10 y dejar las 5 restantes sin utilizarce en las batallas.
Se pueden crear hasta 3 mazos con diferentes configuraciones de cartas para conseguir diversos efectos.

Cada mazo debe incluir:

- Un nombre.
- Una descripcion opcional.
- 10 cartas seleccionadas.
- Una url unica.

## Carta

Cada carta representa a un Dios o personaje mitologico.

Cada carta debe incluir:

- Un nombre
- Una descripcion breve
- Una descripcion larga
- Una imagen
- Una cultura
- Un nivel de Poder

## Batalla

Cada batalla se da entre dos participantes: el usuario es jugador A y la PC el jugador B.
Ambos jugadores comienzan con 100 de vida, pierde la batalla el primer jugador que se quede sin vida.

Cada batalla puede tener varios rounds. En cada round el jugador A escoge una carta de su mazo, el jugador B hara lo mismo, ambas se comparan y la que tenga el nivel de fuerza mas alto, gana el round.
El jugador que pierda el round se penaliza con -10 puntos de vida.

Terminado el round, se muestran los resultados y comienza un siguiente round, asi hasta que uno de los jugadores quede en 0 vida y pierda la batalla.

Una vez finalizada la batalla, si el jugador A gana, obtiene de recompenza una carta nueva en su coleccion.


## Temporadas

Las temporadas son un periodo de x tiempo en la que x cultura esta promocionada. Una vez comenzada la nueva temporada, se agrega un nuevo set de cartas para hacer interesante el juego.

### Ejemplo:

Temporada 1 arranca con 30 cartas: 10 griegas, 10 nordicas y 10 egipcias.
El usuario batalla hasta obtener las 30 cartas.
Comienza la temporada 2 "Culturas Latinas" y en el juego se añaden 30 cartas nuevas: 10 maya, 10 cartas araucania, 10 cartas inca.
Ahora el usuario que ya tenia 30 en su coleccion, puede coleccionar 30 mas. El usuario que inicia por primera vez el juego, tiene 60 cartas para coleccionar.

### Deck builder
### Info sobre cartas

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
