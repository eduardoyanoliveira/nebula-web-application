import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { JSXElementConstructor, ReactElement } from "react";
import { IQuestion } from "../../../Domain/Entities/IQuestion";
import { InMemoryHTTPGetClient } from "../../../tests/HttpRequestClients/in-memory-http-get-client";
import { questionsMockData } from "../../../tests/mock/data/question-mock-data";
import ListQuestios from "./list-questions";

const mockData : IQuestion[] = questionsMockData;

interface WrapperProps {
    children: ReactElement<any, string | JSXElementConstructor<any>> | undefined
};

const wrapper = ({children}: WrapperProps) : ReactElement<any, any> | null => {
    const queryClient = new QueryClient();
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
};

describe('List Questions component', () => {

    const inMemoryHTTPGetClient = new InMemoryHTTPGetClient();
    inMemoryHTTPGetClient.url = 'questions';

    inMemoryHTTPGetClient.data = mockData;

    it('should return a list of three questions', async () => {

        const { result } = renderHook(() => ListQuestios(inMemoryHTTPGetClient), { wrapper });

        expect(result.current.isFetching).toBeTruthy();
        await waitFor(() => expect(result.current.questions).toBe(mockData));
         
    });

});

describe('List Public Questions component', () => {

    const inMemoryHTTPGetClient = new InMemoryHTTPGetClient();
    inMemoryHTTPGetClient.url = 'questions/?is_public=true';

    inMemoryHTTPGetClient.data = mockData.filter(item => item.is_public === true);

    it('should return a list of two questions', async () => {

        const { result } = renderHook(() => ListQuestios(inMemoryHTTPGetClient, '?is_public=true'), { wrapper });

        expect(result.current.isFetching).toBeTruthy();
        await waitFor(() => expect(result.current.questions?.length).toBe(2));

    });

});


describe('List closed Questions component', () => {

    const inMemoryHTTPGetClient = new InMemoryHTTPGetClient();
    inMemoryHTTPGetClient.url = 'questions/?is_closed=true';

    inMemoryHTTPGetClient.data = mockData.filter(item => item.is_closed === true);

    it('should return a list of two questions', async () => {

        const { result } = renderHook(() => ListQuestios(inMemoryHTTPGetClient, '?is_closed=true'), { wrapper });

        expect(result.current.isFetching).toBeTruthy();
        await waitFor(() => expect(result.current.questions?.length).toBe(2));

    });

});