import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { JSXElementConstructor, ReactElement } from "react";
import { ISubject } from "../../../Domain/Entities/ISubject";
import { InMemoryHTTPGetClient } from "../../../tests/HttpRequestClients/in-memory-http-get-client";
import { subjectsMockData } from "../../../tests/mock/data/subject-mock-data";
import ListSubjects from "./list-subjects";

const mockData : ISubject[] = subjectsMockData;

interface WrapperProps {
    children: ReactElement<any, string | JSXElementConstructor<any>> | undefined
};

const wrapper = ({children}: WrapperProps) : ReactElement<any, any> | null => {
    const queryClient = new QueryClient();
    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
};

describe('List Subjects component', () => {

    const inMemoryHTTPGetClient = new InMemoryHTTPGetClient();
    inMemoryHTTPGetClient.url = 'subjects';

    inMemoryHTTPGetClient.data = mockData;

    it('should return a list of three subjects', async () => {

        const { result } = renderHook(() => ListSubjects(inMemoryHTTPGetClient), { wrapper });

        expect(result.current.isFetching).toBeTruthy();
        await waitFor(() => expect(result.current.subjects).toBe(mockData));
         
    });

});

describe('List Active Subjects component', () => {

    const inMemoryHTTPGetClient = new InMemoryHTTPGetClient();
    inMemoryHTTPGetClient.url = 'subjects/?is_active=true';

    inMemoryHTTPGetClient.data = mockData.filter(item => item.is_active === true);

    it('should return a list of two subjects', async () => {

        const { result } = renderHook(() => ListSubjects(inMemoryHTTPGetClient, true), { wrapper });

        expect(result.current.isFetching).toBeTruthy();
        await waitFor(() => expect(result.current.subjects?.length).toBe(2));

    });

});