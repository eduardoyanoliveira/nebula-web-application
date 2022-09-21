import { act, cleanup, renderHook, waitFor } from "@testing-library/react";
import useFilter from ".";

describe('useFilter tests', () => {
    
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
        },
        {
            id: 'fake-id-three',
            name: 'test-three',
            is_active: true
        }, 
        {
            id: 'fake-id-four',
            name: 'test-four',
            is_active: true
        }
    ];

    it('should be able to filter the array by the given field and value and return a array with the length of four', async () => {
        const { result } = renderHook(() => useFilter(mockData, 'name'));
        
        act(() => {
            result.current.setSearch('t');
        });
        
        await waitFor(() => expect(result.current.filteredData.length).toBe(4));

        cleanup();
    });

    it('should be able to filter the array by the given field and value and return a array with the length of three', async () => {
        const { result } = renderHook(() => useFilter(mockData, 'name'));

        act(() => {
            result.current.setSearch('o');
        });

        await waitFor(() => expect(result.current.filteredData.length).toBe(3));

        cleanup();
    });

    it('should be able to filter the array by the given field and value and  return a array with the length of one', async () => {
        const { result } = renderHook(() => useFilter(mockData, 'name'));

        act(() => {
            result.current.setSearch('two');
        });

        await waitFor(() => expect(result.current.filteredData.length).toBe(1));

        cleanup();
    });
    
});