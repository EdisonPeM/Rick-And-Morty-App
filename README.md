# Rick And Morty App

Este es un proyecto de ACM GIWEB React, por y para los estudiantes.

## Requisitos

Para correr este proyecto en tu máquina debes tener instalado [git](https://git-scm.com/), [nodejs](https://nodejs.org/es/) y [npm](https://www.npmjs.com/) globalmente.

Opcionalmente podrás usar [Docker](https://www.docker.com/) para correr el proyecto en un contenedor.

## Descarga

Para bajar el repo debes clonarlo con `git clone`.

```
git clone https://github.com/EdisonPeM/Rick-And-Morty-App.git
```

## Instalación de dependencias

Con `npm install` se descargarán las dependencias necesarias del proyecto.

```
npm install
```

## Correr en Local

Con el comando `npm start` se levantará un servidor de desarrollo, el cuál estará corriendo en [localhost:3000/](localhost:3000/)

```
npm start
```

## Correr en Docker

Para correr con docker podrás usar el script `docker-build.sh` para construir una imagen y luego el script `docker-run.sh` crear un contenedor que correa esa imagen

```
sh docker-build.sh
sh docker-run.sh
```

Adicionalmente, si quieres ver los log podrás correr

```
docker logs -f rick-app
```

## Despliegue

Puedes con construir el sitio con el comando `npm run build` y luego correr un servidor estático local con `npm run server`, éste estará corriendo en [localhost:5000/](localhost:5000/)

**_Más adelante se agregarán opciones de despliegue en hosting!_**

```
npm run build
npm run server
```

## Herramientas

Este proyecto está construido con

- [React](https://reactjs.org/)
- [Webpack](http://webpack.js.org/)
- [Babel](https://babeljs.io/)

## Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para detalles
