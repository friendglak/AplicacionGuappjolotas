//Configurar nuestro path.
const path = require('path');
//Plugin que instalamos.
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const svgToMiniDataURI = require('mini-svg-data-uri');

module.exports = {
    //Entrada , cual va a ser mi elemento principal, punto de entrada
    entry: './src/index.js',
    //A donde quiero empujar mi proyecto ouput
    output: {
        // Saber donde me encuentro, directorio donde esta el proyecto y ahi crea una carpeta dist donde se va a guardar nuestros proyecto.
        path: path.resolve(__dirname, 'build'),
        //lamar a mi compilado de JS una asignacion de nombre, como se va a construir.
        filename: 'bundle.js',
    },
    //Configuración para saber con que archivos vamos a trabajar.
    resolve: {
        //Extenciones con las cuales estamos trabajando
        extensions: ['.js', '.jsx'],
    },
    //Módulo donde vamos a tener las reglas de negocio del proyecto.
    module: {
        //Definimos las reglas por medio de arreglos.
        rules: [
            {
                //Creamos expresion regular para identificar estos archivos
                //
                test: /\.(js|jsx)$/,
                //Vamos a excluir la carpeta de node modules
                exclude: /node_modules/,
                //Y vamos a utilizar el loder que utilizamos en babel
                use: {
                    loader: 'babel-loader',
                },
            },
            //Identificar los archivos html de nuestro proyecto, entenderlos y prepararlos
            //
            {
                test: /\.html$/,
                //Uso del loader que previamente instalamos.
                use: {
                    loader: 'html-loader',
                },
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.svg$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      generator: (content) => svgToMiniDataURI(content.toString()),
                    },
                  },
                ]
            }

        ],
    },
    //Agregar plugin que instalamos para entender el archivo index y el que vamos a generar en la carpeta dist para enviar a produccion.
    plugins: [
        new HtmlWebPackPlugin({
            template: './public/index.html',
            //Se va a empujar como
            filename: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'build'),
        compress: true,
        //Habilitar para poder acceder a la información y mostrar cada una de las rutas.
        historyApiFallback: true,
        port: 3005,
    },
};