import request from 'superagent'

const URL = 'https://secure-sea-50426.herokuapp.com';

export async function getAllDucks() {
    const data = await request.get(`${URL}/ducks`);

    return data.body;
}

export async function getOneDuck(id) {
    const { body } = await request.get(`${URL}/ducks/${id}`);

    return body;
}

export async function updateDuck(id, duckData) {
    const { body } = await request
    .put(`${URL}/ducks/${id}`)
    .send(`duckData`);

    return body;
}


export async function createDuck(duckData) {
    const { body } = await request
    .post(`${URL}/ducks/`)
    .send(duckData);

    return body;
}

export async function getAllCategories() {
    const { body } = await request.get(`${URL}/categories`);

    return body;
}

export async function deleteDuck(id) {
    const { body } = await request.delete(`${URL}/ducks/${id}`);

    return body;
}