export { H1 } from './H1';
export { H2 } from './H2';

// Esta seria realmente la mejor opcion si solo tengo que exportar una logica, tener un solo barrel y no tener un barrel en la carpeta y luego en cada componente.

//Si ese fuera el caso, se tendria que hacer de esta forma:

//export { default as H1 } from './H1';
//export { default as H2 } from './H2';

//Tambien tenemos que considerar usar barrels en lugares donde no tengamos 200 componentes.

//Tambien hay que considerar la longitud de los barriles.
