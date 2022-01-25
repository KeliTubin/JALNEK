import axios from 'axios';

const endpoint = 'http://localhost:3000/users/';

describe('users', ()=>{
    it('should return use by ID', async () =>{
        const response = await axios.get(endpoint + '089ddda5-f4c8-4bca-974a-e69d616e504a');
        const data = response.data;
        expect(data).toHaveProperty('id');
        expect(data.id).toEqual('089ddda5-f4c8-4bca-974a-e69d616e504a');
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