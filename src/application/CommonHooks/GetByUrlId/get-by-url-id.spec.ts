import { getByUrlId } from "./getByUrlId";

describe('getByUrlId tests', () => {

    const mockData = [
        {
            id: 'fake-id-one',
            name: 'test-one',
            is_active: true
        },
        {
            id: 'fake-id-two',
            name: 'test-two',
            is_active: true
        }
    ];

    it('should be able to return the item on the data with the given id', () => {

        global.window = Object.create(window);
        const url = "http://dummy.com/fake-id-one";

        Object.defineProperty(window, 'location', {
            value: url
        });

        const { item } = getByUrlId(mockData);

        expect(item).toBeTruthy();
    });
});