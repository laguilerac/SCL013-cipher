# README "AMOR CIFRADO"

## Introducción

"Amor Cifrado" es nuestro proyecto de cifrado para Laboratoria. Nuestro sitio esta orientado a personas enamoradas que deseen encriptar sus mensajes ya sea para dar una sorpresa o evitar que otras personas se enteren de que están escribiendo; de esta forma los usuarios pueden proteger información que consideren sensible.  Nuestra plataforma busca ser accesible y rápida, ideal para ser utilizada mientras se están enviando mensajes sin perder demasiado tiempo ocultando o descifrando el mensaje.

## Cómo utilizar la plataforma

-   Ingresar a la página de Amor Cifrado.
-   Digitar número el cual servirá como clave. 
-   Ingresar el mensaje para encriptar (cifrar) o descubrir (descifrar) el mensaje.
-   Recibir el mensaje decifrado o cifrado.
-   Si se quiere ingresar otro mensaje se puede utilizar el botón de "Hazlo de nuevo" para borrar el mensaje anterior y poder escribir nuevamente.
- 
Tener en consideración:

-   Se puede cambiar el número las veces que se desee pero debe utilizarse el mismo número para cifrar que para descifrar.
-   No reconoce símbolos ni espacios, tampoco la letra ñ.
-   Solo acepta números enteros y positivos.  

## Proceso y decisiones de diseño

Lo primero que hicimos al decidir nuestro proyecto fue generar un diagrama de flujo, como se puede ver en este y en nuestro prototipo en un comienzo pensamos en generar un menú dividiendo el cifrado y descifrado en más de una pantalla. Decisión que cambio gracias al feedback otorgado por nuestro squad
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-cipher/master/src/img/imagen1.png)
![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-cipher/master/src/img/imagen2.jpg)

![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-cipher/master/src/img/imagen3.jpg)
Luego del feedback recibido generamos la primera versión de nuestra página. Decimos mantener un diseño simple con una tipografía que se entendiera ya que lo importante era mantener la rapidez del uso de nuestra página. Primero onstruimos el HTML para tener una base en la cuál trabajar, luego nos dividimos los diferentes JS y el CSS para avanzar de una forma más organizada. En un comienzo nuestras cajas de ingreso de número y de texto se encontraban una bajo la otra lo que producía que los usuarios tuvieran que realizar scroll para poder ver toda la información.

![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-cipher/master/src/img/imagen4.png)

## Test de usabilidad

Con la primera versión de nuestra página nos acercamos a cinco usuarios para realizar el testeo y poder tener en cuenta cambios a realizar.

1.- Usuario 1:

Mujer, 30 años.

-   Indica que el texto del segundo botón es confuso, piensa que el texto se puede ingresar en la segunda caja de texto.    
-   Indica que el scroll hace que la página se vea extraña y es molesto tener que utilizarlo.
    
2.  -Usuario 2:

Mujer, 34 años.

-   Indica que es confuso el texto del segundo botón, pensaba que el segundo botón solo se aplicaba a la segunda caja.
-   Indica que el tamaño de los botones es demasiado pequeño y que no se distinguen bien.
    
3.  -Usuario 3:

Hombre, 30 años.

-   Indica que el scroll le parece bien al ver la página desde un celular, pero preferiría que estuviera organizada de una forma horizontal ("como google translate") al momento de usarla en el computador.

4.  -Usuario 4:

Mujer, 36 años.

-   Indica que el tamaño de las letras de las cajas de texto es demasiado pequeño lo que dificulta su lectura.
-   Preferiría no tener que realizar scroll en la página. 
- 
4.  -Usuario 4:

Mujer, 35 años.

-   No puede hacer funcionar la página mientras realizamos el testeo.

Luego de estos resultados decidimos modificar nuestra página dejando las cajas de forma horizontal, aumentamos el tamaño de la letra de nuestra caja y modificamos nuestros botones. De esa forma llegamos al resultado final

![enter image description here](https://raw.githubusercontent.com/laguilerac/SCL013-cipher/master/src/img/imagen5.JPG)

## Status del proyecto

Para que nuestro proyecto se encuentre completo nos falta que el cifrado y descifrado reconozca símbolos, espacios y la letra ñ. Además nos gustaría incluir un botón que permita copiar el texto de las cajas para facilitar el uso de la página. 