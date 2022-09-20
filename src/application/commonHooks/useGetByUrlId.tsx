import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";

interface GetSubjectByUrlIdProps<T> {
    setItem: React.Dispatch<React.SetStateAction<T>>,
    data: T[] | undefined
};

function useGetByUrlId<T extends { id?: string }> ( 
    { setItem, data } : GetSubjectByUrlIdProps<T>
) {

    const isMounted = useRef(true);

    const params = useParams();

    useEffect(() => {
        if(isMounted.current){
            setItem((prev) => prev = data?.find(item => item.id === params.id) as T || prev);
        };
    },[params.id, setItem, data]);

};

export default useGetByUrlId;