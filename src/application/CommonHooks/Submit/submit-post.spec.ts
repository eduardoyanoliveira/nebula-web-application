import { InMemoryHTTPPostClient } from '../../tests/HttpRequestClients/in-memory-http-post-client';
import { baseSubject } from '../../features/Subjects/data';

describe('submitPost tests', () => {

    const inMemoryHTTPPostClient = new InMemoryHTTPPostClient();
    inMemoryHTTPPostClient.url = 'subjects'
    inMemoryHTTPPostClient.data.push({...baseSubject, id: 'test-id' });

    it('should fail if the url does not exists', async () => {
        const response = await inMemoryHTTPPostClient.post(
            'wrong-url',
            { ...baseSubject, name: 'new name'}   
        );

        expect(response.isFailure).toBeTruthy();
    });


    it('should be able to post the data', async () => {
        const response = await inMemoryHTTPPostClient.post(
            'subjects',
            { ...baseSubject, id: 'test-id', name: 'new name'}   
        );

        expect(response.isSuccess).toBeTruthy();
        expect(inMemoryHTTPPostClient.data.find(item => item.id === 'test-id')).toBeTruthy();
    });

});