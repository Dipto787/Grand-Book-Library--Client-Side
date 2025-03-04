import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    let { signinUser } = useContext(AuthContext);
    let [valid, setValid] = useState(true);
    let navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    let sub = (e) => {
        signinUser(e.email, e.password)
            .then(res => {
                console.log(res.user)
                navigate('/');
            })
    }
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleValidCaptcha = (e) => {
        let user_captcha_value = e.target.value;
        if (validateCaptcha(user_captcha_value)) {
            setValid(false)
        } else {
            setValid(true);
        }
    }
    return (
        <div className="py-8 ">
            <div className="card bg-base-100 w-full max-w-lg m-auto my-8 shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit(sub)} className="card-body">
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
                        {errors.password && <span className="text-red-600 mt-2 font-semibold">This field is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <LoadCanvasTemplate></LoadCanvasTemplate>
                        </label>
                        <input type="text" onBlur={handleValidCaptcha} name="captcha" placeholder="write the captcha" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button disabled={valid} className="btn btn-primary">Login</button>
                    </div>
                    <p>Don`t have an account? please <Link to={'/register'} className="text-blue-600 underline">Register</Link></p>
                </form>
            </div>

        </div>
    );
};

export default Login;
