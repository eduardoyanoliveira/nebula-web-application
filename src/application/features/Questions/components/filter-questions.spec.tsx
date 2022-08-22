import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, renderHook, waitFor } from "@testing-library/react";
import { JSXElementConstructor, ReactElement } from "react";
import { IQuestion } from "../../../Domain/Entities/IQuestion";
import { InMemoryHTTPGetClient } from "../../../tests/HttpRequestClients/in-memory-http-get-client";
import { questionsMockData } from "../../../tests/mock/data/question-mock-data";
import FilterQuestions from "./filter-questions";

const mockData : IQuestion[] = questionsMockData;


interface WrapperProps {
    children: ReactElement<any, string | JSXElementConstructor<any>> | undefined
};

const wrapper = ({children}: WrapperProps) : ReactElement<any, any> | null => {
    const queryClient = new QueryClient();
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
};

describe('Filter Questions component', () => {

    const inMemoryHTTPGetClient = new InMemoryHTTPGetClient();
    inMemoryHTTPGetClient.url = 'questions';

    inMemoryHTTPGetClient.data = mockData;


    it('should start with a list of three questions', async () => {

        const { result } = renderHook(() => FilterQuestions(inMemoryHTTPGetClient), { wrapper });
 
        expect(result.current.isFetching).toBeTruthy();
        await waitFor(() => expect(result.current.filteredQuestions).toBe(mockData));
    });


    it('should be only one item on the list if the search is seted to "y"', async () => {

        const { result } = renderHook(() => FilterQuestions(inMemoryHTTPGetClient), { wrapper });
        
        act( () => result.current.setSearch('y'));
        await waitFor(() => expect(result.current.filteredQuestions?.length).toBe(1));
    });


    it('should be only two items on the list if the search is seted to "h"', async () => {

        const { result } = renderHook(() => FilterQuestions(inMemoryHTTPGetClient), { wrapper });
        
        act( () => result.current.setSearch('h'));
        await waitFor(() => expect(result.current.filteredQuestions?.length).toBe(2));
    });

    
    it('should be reset the list if search is seted to an empty string', async () => {

        const { result } = renderHook(() => FilterQuestions(inMemoryHTTPGetClient), { wrapper });
        
        act( () => result.current.setSearch(''));
        await waitFor(() => expect(result.current.filteredQuestions?.length).toBe(3));
    });
});