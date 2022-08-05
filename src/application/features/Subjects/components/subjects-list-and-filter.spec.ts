import { act, renderHook, waitFor } from "@testing-library/react";
import { ISubject } from "../../../Domain/Entities/ISubject";
import { InMemoryHTTPGetClient } from "../../../tests/HttpRequestClients/in-memory-http-get-client";
import SubjectsListAndFilter from "./subjects-list-and-filter";

const mockData : ISubject[] = [
    {
        id: 'sf1as5fd1asgha-fafa',
        name: 'sales',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 'sf1as5fd1asgha-fhdfkhartsgxfa',
        name: 'stock',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
    },
    {
        id: 'sf1as5fd1-asghankjghoww',
        name: 'crm',
        is_active: true,
        created_at: new Date(),
        updated_at: new Date()
    },
];

describe('Subjects list and filter component', () => {

    const inMemoryHTTPGetClient = new InMemoryHTTPGetClient();
    inMemoryHTTPGetClient.url = 'subjects';

    inMemoryHTTPGetClient.data = mockData;

    it('should start with a list of three subjects', async () => {

        const { result } = renderHook(() => SubjectsListAndFilter(inMemoryHTTPGetClient));
 
        expect(result.current.isFetching).toBeTruthy();
        await waitFor(() => expect(result.current.filteredSubjects).toBe(mockData));
    });


    it('should be only two items on the list if the search is seted to "s"', async () => {

        const { result } = renderHook(() => SubjectsListAndFilter(inMemoryHTTPGetClient));
        
        act( () => result.current.setSearch('s'));
        await waitFor(() => expect(result.current.filteredSubjects?.length).toBe(2));
    });


    it('should be only one item on the list if the search is seted to "r"', async () => {

        const { result } = renderHook(() => SubjectsListAndFilter(inMemoryHTTPGetClient));
        
        act( () => result.current.setSearch('r'));
        await waitFor(() => expect(result.current.filteredSubjects?.length).toBe(1));
    });


    it('should be no item on the list if search is seted to "w"', async () => {

        const { result } = renderHook(() => SubjectsListAndFilter(inMemoryHTTPGetClient));
        
        act( () => result.current.setSearch('w'));
        await waitFor(() => expect(result.current.filteredSubjects?.length).toBe(0));
    });

    
    it('should be reset the list if search is seted to an empty string', async () => {

        const { result } = renderHook(() => SubjectsListAndFilter(inMemoryHTTPGetClient));
        
        act( () => result.current.setSearch(''));
        await waitFor(() => expect(result.current.filteredSubjects?.length).toBe(3));
    });
});