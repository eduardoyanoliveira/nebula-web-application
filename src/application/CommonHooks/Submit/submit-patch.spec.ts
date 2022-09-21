import { InMemoryHTTPPatchClient } from '../../tests/HttpRequestClients/in-memory-http-patch-client';
import { baseSubject } from '../../features/Subjects/data';

describe('submitPatch tests', () => {

    const inMemoryHTTPPatchClient = new InMemoryHTTPPatchClient();
    inMemoryHTTPPatchClient.url = 'subjects'
    inMemoryHTTPPatchClient.data.push({...baseSubject, id: 'test-id' });

    it('should fail if the url does not exists', async () => {
        const response = await inMemoryHTTPPatchClient.patch(
            'wrong-url',
            { ...baseSubject, name: 'new name'}   
        );

        expect(response.isFailure).toBeTruthy();
    });

    it('should fail if the object does not exists', async () => {
        const response = await inMemoryHTTPPatchClient.patch(
            'subjects',
            { ...baseSubject, name: 'new name'}   
        );

        expect(response.isFailure).toBeTruthy();
        expect(response.error).toBe('Id is not valid');
    });


    it('should be able to update the data', async () => {
        const response = await inMemoryHTTPPatchClient.patch(
            'subjects',
            { ...baseSubject, id: 'test-id', name: 'new name'}   
        );

        expect(response.isSuccess).toBeTruthy();
        expect(inMemoryHTTPPatchClient.data.find(item => item['name'] === 'new name')).toBeTruthy();
    });

});