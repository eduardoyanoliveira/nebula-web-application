import { InMemoryDeleteItemFromLocalStorage, inMemoryLocalStorage, InMemorySaveItemOnLocalStorage } from "../../tests/Cache/in-memory-local-storage";

interface TestObjectProps {
    token: string
};

describe('Save item on local storage', () => {

    const saveItemOnLocalStorage = new InMemorySaveItemOnLocalStorage<TestObjectProps>();
    const deleteItemfromLocalStorage = new InMemoryDeleteItemFromLocalStorage();

    it('should add the item in the local storage', () => {

        saveItemOnLocalStorage.execute(
            'token',
            'fsakjrf23iwehjfglajshdg7hoisnafpçsh'
        );

        expect((inMemoryLocalStorage as any)['token']).toBeTruthy();

        const response = deleteItemfromLocalStorage.execute(
            'token',
        );

        expect(response.isSuccess).toBeTruthy();
    });
});