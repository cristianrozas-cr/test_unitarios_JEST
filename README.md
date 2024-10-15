# Test Unitarios con JEST

Este proyecto es el backend desarrollado como parte del Desafío Cafeteria Nanacao de la Academia Desafío LATAM. El objetivo principal es desarrollar test unitarios con JEST y Supertest a una API REST asegurándonos que cada ruta funciona correctamente segun los requerimientos.

## Requerimientos

1. Testea que la ruta GET /cafes devuelve un status code 200 y el tipo de dato recibido
   es un arreglo con por lo menos 1 objeto.
2. Comprueba que se obtiene un código 404 al intentar eliminar un café con un id que
   no existe.
3. Prueba que la ruta POST /cafes agrega un nuevo café y devuelve un código 201.
4. Prueba que la ruta PUT /cafes devuelve un status code 400 si intentas actualizar un
   café enviando un id en los parámetros que sea diferente al id dentro del payload.

## Tecnologías utilizadas

- Node.js: Framework de JavaScript del lado del servidor.
- Express.js: Framework minimalista para construir APIs y servidores web.
- JEST: Jest Framework de testing en JavaScript. Se utiliza para ejecutar pruebas unitarias y de integración.
- SuperTest: Librería para realizar pruebas HTTP en aplicaciones Node.js.

## Authors

- [@cristianrozas-cr](https://www.github.com/cristianrozas-cr)
