import { MdDelete } from "react-icons/md";
import UseCart from "../../Components/Hooks/UseCart";
import UseAxiosSecure from "../../Components/Hooks/UseAxiosSecure";
import Swal from "sweetalert2";

const MyCart = () => {
    let [cart, refetch] = UseCart();
    let axiosSecure = UseAxiosSecure();
    let handleCartDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/myCart/${id}`)
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                refetch();
            }
        });
    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>img</th>
                            <th>name</th>
                            <th>email</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((books, index) => <tr key={books.id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-14 w-16">
                                                <img
                                                    src={books.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        {/* <div>
                                            <div className="font-bold">Hart Hagerty</div>
                                            <div className="text-sm opacity-50">United States</div>
                                        </div> */}
                                    </div>
                                </td>
                                <td>
                                    {books.name}
                                </td>
                                <td>{books.email}</td>
                                <th>
                                    <button onClick={() => handleCartDelete(books._id)} className="btn btn-ghost btn-xs"><MdDelete className="text-red-600" size={26} /></button>

                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;