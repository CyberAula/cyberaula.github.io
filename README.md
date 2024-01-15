# Instrucciones para actualizar la página del GING 
Para actualizar la información de la página hay que seguir los siguientes pasos:

## Puesta a punto
  * Requisitos:
    * node.js
    * git
  * Clona el repositorio:
   ```bash
   git clone git@github.com:ging/ging.github.com.git
   ```
  * Instala las dependencias:
   ```bash
   npm install # o yarn 
   ```
 ## Actualiza la información
  * Para añadir una nueva publicación, modificar el fichero `/src/constants/publications.bib` incluyendo la nueva publicación en formato BibTex. Para comprobar que el formato es correcto, puedes usar la herramienta [BibTex Tidy](https://flamingtempura.github.io/bibtex-tidy/). Es importante que la información sea correcta y lo más completa posible (título, autores, fecha, nombre de la revista/actas, DOI...). Importante: Las publicaciones no se actualizarán en la web hasta que hagas `npm run publications`o `npm run build`.
  * Para añadir un nuevo miembro al equipo, modificar el fichero `/src/constants/team.js` incluyendo el nuevo miembro en la lista siguiendo el formato de los miembros ya existentes. Puedes incluir su foto en el directorio `/public/assets/img/team` y referenciarla desde `team.js`.
  * Para añadir un nuevo proyecto, modificar el fichero `/src/constants/projects.js` incluyendo la información del nuevo proyecto. Puedes añadir un enlace a la página del proyecto o subir tu propio contenido en un nuevo directorio. También puedes añadir un logo para el proyecto en el directorio `public/assets/img/logos`. Puedes subir el logo en formato PNG  pero es importante que el logo no tenga fondo. Puedes usar [esta web](https://www.remove.bg/) para eliminar el fondo del logo. Si lo prefieres también subir el logo en formato SVG. Para convertir el logo a SVG y modificarlo puedes usar [esta web](https://www.pngtosvg.com/). 
  * Para añadir una nueva noticia en la página de inicio, modificar el fichero `/src/constants/carousel.js` incluyéndola en la lista siguiendo el formato de las noticias ya existentes. Puedes incluir una imagen en formato 16:9 de fondo en el directorio `/public/assets/img/carousel` o usar la imagen por defecto `/public/assets/img/carousel/default-image.png` y referenciarla desde `carousel.js`.
 
 ## Guarda los cambios y publícalos
  * Una vez hayas terminado de realizar todas las modificaciones, compila la aplicación:
  ```bash
  npm run build # o yarn build
  ```
  * Commitea tus cambios y súbelos al repositorio
  ```bash
  git add .
  git commit -am "Update info"
  git push origin master
  ```
  * Ya tienes tu página actualizada en [https://ging.github.io](https://ging.github.io)
