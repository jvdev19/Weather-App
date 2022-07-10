const path = require('path'); // 3
const HtmlWebpackPlugin = require('html-webpack-plugin');// 7


module.exports = { // 1
    entry: './src/app/index.js', // 2
    stats: { children: true },
    output: {
        path: path.join(__dirname, 'dist'),  // >> 3
        filename: 'bundle.js'
    },
    devServer: {// 4
        port:3000
    },
    module: { // 5
        rules: [
            {
                test:/\.css$/,
                use: ['style-loader', 'css-loader'] // 6
            }
        ]
    },
    plugins:[// 7
        new HtmlWebpackPlugin({
                template: './src/index.html'
            }
        )
    ]
}



// ESCRIBIENDO EL FICHERO

// 1 >> Node exporta el objeto principal de la app

// 2 >> Le pasamos como parámetro los ficheros que tiene que coger para combinarlos en el el JS final.

// 3 >> Para poder definir la ruta del directorio de distribución tenemos que traernos un componente
//      de webpack que se puede implementar en nuestro fichero de configuración. En output/path, le pasamos
//      como valor el nombre del directorio (/dist). Asimismo, definimos un nombre para el fichero JS en el
//      que se combinarán todos los JS de la carpeta src (desarrollo).

// 4 >> En este mismo fichero, también iniciamos el servidor de desarrollo, especificando el puerto a la escucha.

// 5 >> Ahora especificamos las tareas que webpack tiene que realizar en este entorno de desarrollo.
//      

// 6 >> Webpack es la utilizad que empaquetará nuestra aplicación, pero para que pueda realizar tareas de, como es el caso,
//      minificado y combinación de ficheros CSS, tenemos que especificar el módulo de NPM que tiene que utilizar.

// 7 >> Ya terminando, y para el caso del html-webpack-plugin, tenemos que incluirlo dentro de otra propiedad del objeto
//      llamada plugins. Este plugin debe ser requerido como módulo en la parte de arriba. Este plugin nos permite copiar
//      un fichero HTML de un directorio a otro.



// 8 >> Por último, y ya fuera de este fichero, tenemos que especificar en el package.json una pequeña propiedad dentro del objeto,
//      que servirá para especificar que es webpack el que va a preparar los ficheros que se van a mandar a producción (es decir,
//      a la carpeta /dist). Para ver cómo funciona ahora nuestro entorno de desarrollo, nos vamos a la terminar y ejecutamos:

//      npm run build

//      npm ejecutará el comando especificado en el packaje.json "build" 



/* 

COMPILANDO:

- Nuestra aplicación es pequeña, con lo cual compilamos el JS a un mismo fichero todo el JS. En aplicaciones 
  más grandes, es muy posible que utilicemos más de un JS en el paquete de distribución final (carpeta /dist, que
  es lo que se lleva a producción).

- Mencionar que la sintaxis rara de las contrabarras es una EXPRESIÓN REGULAR de JS. La que hemos escrito en particular,
  le está diciendo que copie a /dist todos los ficheros que terminen en .css

- Si incluimos esta línea en el webpack.config

  stats: { children: true },

  cuando obtenemos errores, de tal manera que el proceso de compilado, nos
  muestre algo de más información en el debug.

- Esta es la línea que añadimos en el package.json para poder compilar:

  "build": "webpack --mode production",


- Esta es la línea que añadimos en el package.json para arrancar el servidor local:

  "dev": "webpack server --mode development"

*/



/* 

REUMEN:

    1. Especificar los ficheros JS que tiene que llevar combinados la app a la carpeta /dist
    2. Carga en la carepta /dist todos los ficheros CSS
    3. Copia el fichero index.html.



*/