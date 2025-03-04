import { useContext } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { auth, AuthContext } from "../../Components/Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
const Register = () => {
    let { createUser } = useContext(AuthContext);
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    let sub = (e) => {
        console.log(e);
        createUser(e.email, e.password)
            .then(res => {
                console.log(res.user)
                navigate('/');
                updateProfile(auth.currentUser,{
                    displayName:e.name
                })
            })
    }
    return (
        <div className="py-8 ">
            <div className="card bg-base-100 w-full max-w-lg m-auto my-8 shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(sub)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register('name', { required: true })} placeholder="name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600 mt-2 font-semibold">This field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoUrl</span>
                        </label>
                        <input type="text" {...register('photo', { required: true })} placeholder="upload photo" className="input input-bordered" />
                        {errors.photo && <span className="text-red-600 mt-2 font-semibold">This field is required</span>}
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register('email', { required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className="text-red-600 mt-2 font-semibold">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register('password', { required: true, maxLength: 20, minLength: 6 })} placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <span className="text-red-500 font-bold p-2">This field is required</span>}

                        {errors.password?.type === 'minLength' && <span className="text-red-600 mt-2 font-semibold">password must 6 character</span>}

                        {errors.password?.type === 'maxLength' && <span className="text-red-600 mt-2 font-semibold">Password must be less than 20 characters</span>}


                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Register</button>
                    </div>
                    <p>Already have an account? please <Link to={'/login'} className="text-blue-600 underline">Login</Link></p>
                </form>
            </div>

        </div>

    );
};

export default Register;