'use strict';
const supertest = require('supertest');
const server = require('../src/server.js');
const request = supertest(server.server)

describe('Server', () => {

    it('Handler Bad Routes', async () => {
        const response = await request.get('/*');
        expect(response.status).toEqual(404);
    });

    it('Handler Bad Methods for food', async () => {
        const response = await request.patch('/food');
        expect(response.status).toEqual(404);
    });
    it('Handler Bad Methods for clothes', async () => {
        const response = await request.patch('/cloth');
        expect(response.status).toEqual(404);
    });
});

describe('Server', () => {
    let ID1;
    let ID2;
    it('Create record using POST', async () => {
        const response = await request.post(`/food`).send({ food: "apple" })
        expect(response.body.data.food).toEqual('apple')
        ID1 = response.body.id
    });

    it('Read a list of record using GET', async () => {
        const response = await request.get(`/food`)
        let DATA = response.body.find((obj) => obj.id === ID1);
        expect(DATA.id).toEqual(ID1)
    });

    it('Read a record using GET', async () => {
        const response = await request.get(`/food/${ID1}`)
        expect(response.body.id).toEqual(ID1)
    });

    it('Update a record using PUT', async () => {
        const response = await request.put(`/food/${ID1}`).send({food:"banana"})
        expect(response.body.data.food).toEqual('banana')
    });

    it('Destroy a record using DELETE', async () => {
        const response = await request.delete(`/food/${ID1}`)
        expect(response.body).toEqual([])
    });




    it('Create record using POST', async () => {
        const response = await request.post(`/cloth`).send({ cloth: "shirt" })
        expect(response.body.data.cloth).toEqual('shirt')
        ID2 = response.body.id
    });

    it('Read a list of record using GET', async () => {
        const response = await request.get(`/cloth`)
        let DATA = response.body.find((obj) => obj.id === ID2);
        expect(DATA.id).toEqual(ID2)
    });

    it('Read a record using GET', async () => {
        const response = await request.get(`/cloth/${ID2}`)
        expect(response.body.id).toEqual(ID2)
    });

    it('Update a record using PUT', async () => {
        const response = await request.put(`/cloth/${ID2}`).send({cloth:"hat"})
        expect(response.body.data.cloth).toEqual('hat')
    });

    it('Destroy a record using DELETE', async () => {
        const response = await request.delete(`/cloth/${ID2}`)
        expect(response.body).toEqual([])
    });


});