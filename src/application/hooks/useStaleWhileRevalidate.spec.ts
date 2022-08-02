import { renderHook, waitFor } from "@testing-library/react";
import { InMemoryHTTPGetClient } from "../tests/HttpRequestClients/in-memory-http-get-client";
import { CACHE, useStaleWhileRevalidate } from "./useStaleWhileRevalidate";

const mockData = [
    {
        id: '1',
        username: 'test_one'
    },
    {
        id: '1',
        username: 'test_two'
    }
]


describe('Stale While Revalidate hook', () => {

    const inMemoryHTTPGetClient = new InMemoryHTTPGetClient();
    inMemoryHTTPGetClient.url = 'users';

    inMemoryHTTPGetClient.data = mockData;

    it('should be able to get users and save the request on cache', async ()=> {
        const { result } = renderHook(() => useStaleWhileRevalidate( 'users', inMemoryHTTPGetClient, 10 ));

        expect(result.current.isFetching).toBeTruthy();
        await waitFor(() => expect(result.current.data).toBe(mockData));
        expect(CACHE.find(item => item.url === 'users')).toBeTruthy();
    });

    it('should be able to get users from cache if the request has already been done', async ()=> {
        const { result } = renderHook(() => useStaleWhileRevalidate( 'users', inMemoryHTTPGetClient, 10 ));

        await waitFor(() => expect(result.current.isFetching).toBeFalsy());
    });
});