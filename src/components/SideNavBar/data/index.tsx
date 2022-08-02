import { useEffect, useRef, useState } from "react";
import { ISubject } from "../../../application/Domain/Entities/ISubject";
import { useStaleWhileRevalidate } from "../../../application/hooks/useStaleWhileRevalidate";
import { axiosInstance } from "../../../application/Infra/axios/axios-instance";
import { HTTPAxiosGetClient } from "../../../application/Infra/axios/http-axios-get-client";
import { baseData, SubItem } from "./baseData";

const httpAxiosGetClient = new HTTPAxiosGetClient(axiosInstance);


function useMenuData(){

    const { data, isFetching, error } = useStaleWhileRevalidate<ISubject[]>(
        'subjects', 
        httpAxiosGetClient, 
        10
    );

    const isMounted = useRef(true);

    const [subItems, setSubItems] = useState<SubItem[]>([]);

    useEffect(() => {

        if(isMounted.current){
            setSubItems([]);

            data?.forEach((subject : ISubject) => {
                setSubItems((prev) => [
                    ...prev,
                    {
                        title: subject.name,
                        path: `/subjects/${subject.id}`,
                        permission: 'USER'
                    }
                ]);
            });
        };

        return () => {
            isMounted.current = false
        };

    }, [data]);

    if(isMounted.current){
        const index = baseData.findIndex(item => item.path === '/subjects');
        baseData[index].subItems = subItems;
    };

    return { baseData, isFetching, error };
};

export default useMenuData;