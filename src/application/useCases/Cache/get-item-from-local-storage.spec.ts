import { InMemoryGetItemFromLocalStorage, InMemorySaveItemOnLocalStorage } from "../../tests/Cache/in-memory-local-storage";

interface TestObjectProps {
    token: string
};

describe('Save item on local storage', () => {

    const saveItemOnLocalStorage = new InMemorySaveItemOnLocalStorage<TestObjectProps>();
    const getItemfromLocalStorage = new InMemoryGetItemFromLocalStorage<TestObjectProps>();

    it('should add the item in the local storage', () => {

        saveItemOnLocalStorage.execute(
            'token',
            'fsakjrf23iwehjfglajshdg7hoisnafpçsh'
        );

        const response = getItemfromLocalStorage.execute(
            'token',
        );

        expect(response.isSuccess).toBeTruthy();
    });
});