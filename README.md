
WEATHER APP
=============================================================================================================

**1. DESCRIPCIÓN PROYECTO**

Sencilla aplicación del tiempo en la que podemos consultar la temperatura, la humedad y la velocidad del viento
de diferentes ciudades del mundo.

<br><br>
**2. FUENTES**

- Canal de youtube: https://www.youtube.com/c/FaztTech
- Tutorial: https://www.youtube.com/watch?v=yxT6ylPM7uM
- API utilizada: https://openweathermap.org/


<br><br>

**3. CONOCIMIENTOS ADQUIRIDOS**

- Primer acercamiento a la librería webpack.

  - Fichero de configuración
  - Instrucciones en el fichero package.json, para configurar un entorno de trabajo en modo desarrollo.
  <br><br>
- Puesta en práctica de los métodos async y await.  
- Desarrollo de proyecto desarrollado con POO, módulos de JS y consumo de datos de una API.


<br><br>

**4. ANOTACIONES**

**4.1. CLI:** 

- *npm run dev*: Pone en marcha el servidor en modo desarrollo. Nos permite ver los cambios en vivo en el navegador, sin necesidad de refrescar. 

- *npm run build*: Compila la aplicación en modo producción, mandando los ficheros finales a la carpeta de distribución.

<br><br>

Hay que tener en cuenta que para que npm sepa que webpack va a gestionar estas tareas (servidor en modo desarrollo y compilado para producción), tenemos que modificar el package.json.


<br><br>

  **4.2. PACKAGE.JSON** 
  
  Al ser webpack un módulo de node, los propios comandos de arranque de servidor y compilado de npm, tenemos la posibilidad de modificar el package.json para indicarle los scripts que tiene que ejecutar npm cuando le pidamos que compile, o que arranque el servidor de desarrollo en localhost.

  
- Esta es la línea que añadimos en el package.json para poder compilar:

  "build": "webpack --mode production",


- Esta es la línea que añadimos en el package.json para arrancar el servidor local:

  "dev": "webpack server --mode development"

<br><br>
De esta manera, cuando ejecutamos *npm run build* y *npm run dev*, en realidad, estamos ejecutando estos dos comandos de webpack.


<br><br>
=====================
<br><br>

- *Nota: <br> Un par de veces, ejecuté lso comandos de webpack directamente, sin pasar por npm, y por error, no especifiqué si el arranque del servidor tenía que ser en modo desarrollo o en modo producción. El sistema de debug de webpack me informó al respecto con una ventana de diálogo en la aplicación, lo cual fue muy útil para darme cuenta del error.*
<br><br>
- *Nota: <br> En el vídeo del tutorial se utiliza una versión anterior de webpack, y los comandos son diferentes. Gracias a un usuario que informaba al respecto en los comentarios del vídeo, pude saber que los comandos nuevos eran los que he especificado arriba.*
<br><br>

- *Nota: <br>Si incluimos esta línea en el webpack.config: **stats: { children: true }**, cuando obtenemos errores, de tal manera que el proceso de compilado, nos muestre algo de más información en el debug.*
