# PruebasAutomatizadasGhost

Estas pruebas fueron creadas y ejecutadas en un Mac book pro 1,4 Quad-core Intel con OS Sonoma 14.3.

Este repositorio contiene pruebas automatizadas para la aplicación Ghost, implementadas con Kraken. Incluye los siguientes 10 escenarios de prueba:

    Creación y verificación de nueva publicación de blog: El usuario crea una nueva publicación de blog en la aplicación y verifica que se refleja correctamente en el listado.

    Creación y verificación de nueva etiqueta: El usuario crea una nueva etiqueta y verifica que se refleja correctamente en el listado.

    Creación de etiqueta, post y asociación: El usuario crea una nueva etiqueta y un nuevo post, y luego asocia la etiqueta al post.

    Creación y eliminación de etiqueta: El usuario crea una nueva etiqueta, verifica su existencia y luego la elimina.

    Creación y eliminación de post: El usuario crea un nuevo post, verifica su existencia y luego lo elimina.

    Creación de post y verificación en view site: El usuario crea un nuevo post y verifica que se refleja correctamente en el sitio.

    Creación y verificación de página: El usuario crea una nueva página y verifica su existencia en el listado.

    Creación, verificación y eliminación de página: El usuario crea una nueva página, verifica su existencia y luego la elimina.

    Creación y verificación de borrador: El usuario crea un nuevo borrador y verifica que existe una actualización en el listado.

    Creación de post y búsqueda: El usuario crea un nuevo post y luego lo busca en la barra de búsqueda.

Integrantes: 
Felipe Rivera -> yf.rivera1851@uniandes.edu.co
Juan Pablo Camacho -> jp.camacho10@uniandes.edu.co

# Correr el proyecto!
Instalación de Node.js:
Se requiere Node.js versión 16!
    Puedes instalar Node.js usando Homebrew.
    En la terminal, ejecuta el siguiente comando:
    brew install node@16

Instalación de Kraken:
    Para ejecutar el proyecto, debes instalar Kraken.
    En la terminal, ejecuta el siguiente comando:
    npm install kraken-node -g

Ejecución de los escenarios de prueba:
    Para ejecutar los escenarios de prueba, ve al directorio raíz del proyecto.
    Desde allí, ejecuta el siguiente comando:
    ./node_modules/kraken-node/bin/kraken-node run
