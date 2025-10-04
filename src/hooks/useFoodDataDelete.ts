import axios, { type AxiosPromise } from "axios";
import type { FoodData } from "../interface/FoodData";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { use } from "react";

const API_URL = 'http://localhost:8080';

const deleteData = async (foodId: number): AxiosPromise<any> => {
    const response = axios.delete(API_URL + '/food/delete/'+foodId);
    return response;
}


export function useFoodDataDelete(){
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: deleteData,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['food-data'] });
        }
    })

    return mutate;
}