import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, renderHook, waitFor } from "@testing-library/react";
import { JSXElementConstructor, ReactElement } from "react";
import { ISubject } from "../../../Domain/Entities/ISubject";
import { InMemoryHTTPGetClient } from "../../../tests/HttpRequestClients/in-memory-http-get-client";
import FilterSubjects from "./filter-subjects";

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

interface WrapperProps {
    children: ReactElement<any, string | JSXElementConstructor<any>> | undefined
};

const wrapper = ({children}: WrapperProps) : ReactElement<any, any> | null => {
    const queryClient = new QueryClient();
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
};

describe('Filter Subjects component', () => {

    const inMemoryHTTPGetClient = new InMemoryHTTPGetClient();
    inMemoryHTTPGetClient.url = 'subjects';

    inMemoryHTTPGetClient.data = mockData;


    it('should start with a list of three subjects', async () => {

        const { result } = renderHook(() => FilterSubjects(inMemoryHTTPGetClient), { wrapper });
 
        expect(result.current.isFetching).toBeTruthy();
        await waitFor(() => expect(result.current.filteredSubjects).toBe(mockData));
    });


    it('should be only two items on the list if the search is seted to "s"', async () => {

        const { result } = renderHook(() => FilterSubjects(inMemoryHTTPGetClient), { wrapper });
        
        act( () => result.current.setSearch('s'));
        await waitFor(() => expect(result.current.filteredSubjects?.length).toBe(2));
    });


    it('should be only one item on the list if the search is seted to "r"', async () => {

        const { result } = renderHook(() => FilterSubjects(inMemoryHTTPGetClient), { wrapper });
        
        act( () => result.current.setSearch('r'));
        await waitFor(() => expect(result.current.filteredSubjects?.length).toBe(1));
    });


    it('should be no item on the list if search is seted to "w"', async () => {

        const { result } = renderHook(() => FilterSubjects(inMemoryHTTPGetClient), { wrapper });
        
        act( () => result.current.setSearch('w'));
        await waitFor(() => expect(result.current.filteredSubjects?.length).toBe(0));
    });

    
    it('should be reset the list if search is seted to an empty string', async () => {

        const { result } = renderHook(() => FilterSubjects(inMemoryHTTPGetClient), { wrapper });
        
        act( () => result.current.setSearch(''));
        await waitFor(() => expect(result.current.filteredSubjects?.length).toBe(3));
    });
});