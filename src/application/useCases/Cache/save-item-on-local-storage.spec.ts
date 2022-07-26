import { inMemoryLocalStorage, InMemorySaveItemOnLocalStorage } from "../../tests/Cache/in-memory-local-storage";

interface TestObjectProps {
    token: string
};

describe('Save item on local storage', () => {

    const saveItemOnLocalStorage = new InMemorySaveItemOnLocalStorage<TestObjectProps>();

    it('should add the item in the local storage', () => {
        const response = saveItemOnLocalStorage.execute(
            'token',
            'fsakjrf23iwehjfglajshdg7hoisnafpçsh'
        );

        expect(response.isSuccess).toBeTruthy();
        expect((inMemoryLocalStorage as any)['token']).toBeTruthy();

    });
});