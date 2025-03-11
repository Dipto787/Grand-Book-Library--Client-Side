import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import UseAxiosSecure from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const UseCart = () => {
    let { user } = useContext(AuthContext);
    let axiosSecure = UseAxiosSecure();
    let { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            let res = await axiosSecure.get(`/myCart/${user?.email}`);
            return res.data;
        }
    })
    return [cart,refetch];
};

export default UseCart;