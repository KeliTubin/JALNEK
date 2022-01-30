import axios from "axios";

const endpoint = 'http://localhost:3000/comments/';

describe('get comment by ID',()=>{
  
    it('should return comment by ID', async () => {

        const response = await axios.get(
            endpoint + '/5d1cb4f0-70cf-4c68-9355-d60ba8307e07'
        );
        expect(response?.data).toHaveProperty('id');
        expect(response?.data?.title).toEqual('Pohmell ei ole haigus')
    });

    it('should return error for no ID', async () =>{
        const response = await axios.get(endpoint + '/nonExsistingID');
        const data = response.data;
        expect(data).toHaveProperty('message');
        expect(data.message).toEqual('no comment with given ID');
        return;
    });

});