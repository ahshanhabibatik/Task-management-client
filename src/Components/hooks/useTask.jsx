import { useContext } from "react";
import { AuthContext } from "../../Router/AuthProvider";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from '@tanstack/react-query'

const useTask = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const {refetch, data: task = []} = useQuery({
        queryKey: ['task', user?.email],
        queryFn: async () =>{
            const res = await axiosPublic.get(`/tasks?email=${user.email}`)
           console.log(res.data)
            return res.data || [];
        }
    })

    return [task, refetch]
};

export default useTask;