import axios from "axios";

const endpoint = 'http://localhost:3000/posts/';

describe('create post',()=>{

    it('create new post succesfully', async () => {
        const testData = {
                authorId: '089ddda5-f4c8-4bca-974a-e69d616e505a',
                title: 'Automated blog test',
                summary: 'kiiremini kõrgemale kaugemale',
                content: 'Komponenttestid (unit testid) testitakse süsteemi üksikuid komponente. Eesmärk on kinnitada, et süsteemi koodi kõik komponendid toimivad ootuspäraselt. Komponenttestimine (unit testimine) toimub süsteemi väljatöötamise (süsteemi koodi kirjutamise etapis) arendajate poolt. Komponenttestid (unit testid) eraldavad süsteemi koodi osa ja testid, mis kontrollivad süsteemi koodi ootuspärasust. Komponent võib olla individuaalne funktsioon, meetod, protseduur, moodul või objekt.'  
        };

        const response = await axios.post(endpoint, testData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const responseData = response.data;
        expect(responseData.authorId).toEqual(testData.authorId);
        expect(responseData.title).toEqual(testData.title);
        expect(responseData.summary).toEqual(testData.summary);
        expect(responseData.content).toEqual(testData.content);
        return;
    });

});