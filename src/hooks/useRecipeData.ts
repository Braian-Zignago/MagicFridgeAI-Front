import axios, { type AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<String> => {
    const response = axios.get(API_URL + '/generate');
    return response;
}


export function useRecipeData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['recipe-data'],
        enabled: false, 
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data,
        refetch: query.refetch
    }

}