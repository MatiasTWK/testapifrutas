const frisby = require('frisby');

it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('https://api-frutas1.herokuapp.com/api/frutas')
    .expect('status', 200);
});
