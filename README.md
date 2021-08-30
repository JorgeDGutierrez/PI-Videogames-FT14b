
   <p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
    
</p>

# Individual Project - Henry Videogames



<p align="right">
  <img height="200" src="./videogame.png" />
   
</p>

## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.



## Desarrollo de una APP de videojuegos,se ocuparon las siguientes tecnologias:

- React para el Front-End.
- Redux para el control de estados globales.
- CSS. 
- Node JS.
- express.
- PostgreSQL y Sequelize para la  base de datos.
- Utilice la api de videojuegos (https://rawg.io/apidocs) para guardar los primeros 100 videojuegos.


## FUNCIONALIDAD
-Ordenamiento por (nombre del videojuego (A-Z /Z-A )
-Ordenamiento por rating de videojuego (low Rating / high Rating)
-Búsqueda por nombre del videojuego
-Filtrado por juegos Agregados
-Filtrado por Géneros del Videojuego
-Formulario  para crear videojuegos







### Los endpoints utilizados fueron:

  - GET https://api.rawg.io/api/games
  - GET https://api.rawg.io/api/games?search={game}
  - GET https://api.rawg.io/api/genres
  - GET https://api.rawg.io/api/games/{id}




#### Base de datos


La relación entre ambas entidades debio  ser de muchos a muchos ya que un videojuego puede pertenecer a varios géneros en simultaneo y, a su vez, un género puede contener múltiples videojuegos distintos. Un ejemplo sería el juego `Counter Strike` pertenece a los géneros Shooter y Action al mismo tiempo. Pero a su vez existen otros videojuegos considerados como Shooter o como Action.



#### Backend

Se  desarrollo un servidor en Node/Express con las siguientes rutas:


-  __GET /videogames__:
  - Se obtuvo un listado de los primeras 15 videojuegos
  - Debe devolver solo los datos necesarios para la ruta principal
-  __GET /videogames?name="..."__:
  - Se obtuvo un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
  - Si no existe ningún videojuego mostrar un mensaje adecuado
-  __GET /videogame/{idVideogame}__:
  - Se obtuvo el detalle de un videojuego en particular
  - Se trajo solo los datos pedidos en la ruta de detalle de videojuego
  - Incluir los géneros asociados
-  __GET /genres__:
  - Se obtuvo todos los tipos de géneros de videojuegos posibles
  - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
-  __POST /videogame__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
  - Crea un videojuego en la base de datos


#### SE realizo el testing tonto del backend como el frontend.

## Landing del proyecto
![landing](https://user-images.githubusercontent.com/83549945/131284712-003c125f-9023-4c8e-98bc-55541c7d60a0.JPG)

## Muestra todos los videjuegos tanto de la API como de la base de datos creada en Postgresql
![muestra videojuegos](https://user-images.githubusercontent.com/83549945/131286156-87c0b636-ac72-4ea8-85bd-2ca6f441fb25.JPG)

## Muestra solo los videojuegos creados en la basede datos creada en Postgresql
![videojuegos creados en la base de datos](https://user-images.githubusercontent.com/83549945/131286543-360f670e-b3e5-4c2f-b315-21cb984e6ad7.JPG)

## Creacion de un videojuego
![creacion de videojuegos](https://user-images.githubusercontent.com/83549945/131286626-bcc54e20-44e5-4a5c-aad4-e6c6aaa7fec3.JPG)
