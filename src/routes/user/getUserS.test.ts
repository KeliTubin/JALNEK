import axios from 'axios';

const endpoint = 'http://localhost:3000/users/';

describe('users', ()=>{
    it('should return use by ID', async () =>{
        const response = await axios.get(endpoint + 'f7092f6d-b24e-4fd2-9013-c565a3d62f4b');
        const data = response.data;
        expect(data).toHaveProperty('id');
        expect(data.id).toEqual('f7092f6d-b24e-4fd2-9013-c565a3d62f4b');
        return;
    });
    it('should return error for no ID', async () =>{
        const response = await axios.get(endpoint + '/nonExsistingID');
        const data = response.data;
        expect(data).toHaveProperty('message');
        expect(data.message).toEqual('no user with given ID');
        return;
    });

});