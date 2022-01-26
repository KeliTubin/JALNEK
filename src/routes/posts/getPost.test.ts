import axios from "axios";

const endpoint = 'http//localhost:3000/posts/';

describe('get post by ID',()=>{
    // beforeAll(() => {

    // });

    it('should return post by ID', async () => {

        const response = await axios.get(
            endpoint + '/089ddda5-f4c8-4bca-974a-e69d616post1'
        );
        expect(response?.data).toHaveProperty('id');
        expect(response?.data?.title).toEqual('Title for a random post')
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