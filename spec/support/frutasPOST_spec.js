const frisby = require('frisby');

it (' POST Debe crearse un dato y no tener errores', function () {
  return frisby
    .post('https://api-frutas1.herokuapp.com/api/frutas', {
      nombre: 'Berenjenas 5 unidades',
      precio: 1000
    })
    .expect('status', 201);
});