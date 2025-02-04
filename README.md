### Evaluacion final modulo 3

#### El ejercicio consiste en desarrollar una página web con un listado de personajes de Harry Potter, que podemos filtrar por el nombre del personaje. Vamos a usar React para realizarlo.

1-Para realizar el listado de personajes vamos a utilizar el servicio de https://hp-api.onrender.com/ que nos devuelve información sobre los personajes. 

2-La  segunda parte consiste en poder buscarlos por nombre. Para eso, añadimos un input a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas.

3-Ahora que ya tenemos el listado de personajes en pantalla, y filtrado por nombre la siguiente parte consiste
en poder buscarlos por casa. Para eso, añadimos un select a la interfaz, de forma que al seleccionar una
casa queden en la interfaz solo los personajes cuya casa es la seleccionada.

4-Detalles de personajes:al hacer clic sobre la tarjeta de un personaje, su información
aparecerá a pantalla completa. Para hacer esto usaremos rutas y React Router DOM. En la pantalla de detalle aparecerá además de la foto, nombre, la casa a la que pertenece , si está vivo o muerto, género,
especie y los nombres alternativos en caso de que los tenga.

## Instalación
Dentro de nuestro archivo de trabajo abrir una terminal BASH y clonar el repositorio de github.
Comprobar que estamos en la ruta del directorio adecuada. Posteriormente instalar las dependencias "node_modules" para la ejecución del framework Vite, e iniciar el proyecto. 


Clonar repositorio:
~~~
$ git clone [jacquelinlopez/project-promo-B-module-3-team-1] (https://github.com/Adalab/modulo-3-evaluacion-final-jacquelinlopez.git)
~~~
Ruta directorio:
~~~
$ cd ../path/to/the/file
~~~
Instalación dependencias:
~~~
$ npm install 
~~~
Iniciar proyecto:
~~~
$ npm run dev
~~~


