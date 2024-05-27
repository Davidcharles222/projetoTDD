//npm install @types/jest >> para trabalhar com alto complite
//npm install supertest >> para interagir com rotas (parecido com axios)
let app = require('../src/app')
let supertest = require('supertest');
let request = supertest(app);


test("A aplicação deve responder na porta 3131", () => {
    return request.get('/').then(res => {//precisa do return 
        let status = res.statusCode
        expect(status).toEqual(200);
    }).catch(err => {
        fail(err)
    });
});