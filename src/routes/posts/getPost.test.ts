import axios from "axios";

const endpoint = 'http://localhost:3000/posts/';

describe('get post by ID',()=>{
    // beforeAll(() => {

    // });

    it('should return post by ID', async () => {

        const response = await axios.get(
            endpoint + '/e8145ea7-5c29-4a4e-8ce4-ada817e99c9e'
        );
        expect(response?.data).toHaveProperty('id');
        expect(response?.data?.title).toEqual('Saabuv lumesadu ja tuisk muudavad liiklemise ohtlikuks')
    });

    it('should return error for no ID', async () =>{
        const response = await axios.get(endpoint + '/nonExsistingID');
        const data = response.data;
        expect(data).toHaveProperty('message');
        expect(data.message).toEqual('no post with given ID');
        return;
    });

    // afterAll(() => {

    // });
});