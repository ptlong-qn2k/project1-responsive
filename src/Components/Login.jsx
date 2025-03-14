import { useForm } from 'react-hook-form';
import '../Styles/App.css';
import Checkbox from '@mui/material/Checkbox';
import yup from '../Services/yupGlobal';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { ToastifyError } from '../ComponentPage/Toasttify';
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
    const token = localStorage.getItem('token_user');
    useEffect(() => {
        if (token) {
            navigate('/'); // Điều hướng đến dashboard nếu đã đăng nhập
        }
    }, [token]);

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const navigate = useNavigate();
    const schema = yup.object().shape({
        username: yup
            .string()
            .required('username is Required')
            .matches(/^[a-zA-Z0-9@]+$/, 'Username can only contain letters, numbers, and underscores')
            .min(3, 'Username must be at least 3 characters')
            .max(20, 'Username must not exceed 20 characters'),
        password: yup.string().required('password is Required'),
        // .password('Password invalid'),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'onChange',
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        await axios({
            url: 'https://dummyjson.com/auth/login',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            data: JSON.stringify({
                username: data.username,
                password: data.password,
                expiresInMins: 30, // optional, defaults to 60
            }),
        })
            .then((res) => {
                console.log(res.data.accessToken);
                localStorage.setItem(`token_user`, res.data.accessToken);
                navigate('/');
            })
            .catch((error) => {
                ToastifyError('nhap lai thong tin dang nhap');
            });
    };

    return (
        <div className="w-full h-[690px] flex flex-row items-center  ">
            <img src="/images/login/Illustrations.png" alt="" className="w-[67%] h-[100%] md:hidden" />
            <div className="w-[33%] h-full flex flex-col px-[5%] justify-center md:w-full">
                <div className="w-[100%] h-[74px] flex flex-col justify-between mb-[23px]">
                    <p className="text-lg font-bold text-center">Welcome to Entrance Test Interview!</p>
                    <p className="text-sm text-centers text-center">
                        Please sign-in to your account and start the adventure
                    </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="mb-[15px]">
                        <label htmlFor="" className="block">
                            Username*
                        </label>
                        <input
                            type="text"
                            placeholder="johndoe@gmail.com"
                            className="w-full h-[38px] border border-solid rounded-[5px] pl-[15px] bg-white"
                            {...register('username')}
                        />
                        {/* {errors?.emilyspass?.type === "required" && (
                        <p className="text-[#EA5455]">Username is required</p>
                    )} */}
                        {errors.username && <p className="text-[#EA5455]">{errors.username.message}</p>}
                    </div>
                    <div className="mb-[14px]">
                        <div className="flex flex-row h-[18px] justify-between items-center mb-1">
                            <label htmlFor="">Password*</label>
                            <button className="text-[#7367F0] flex flex-row items-center bg-white border-hidden h-[18px]">
                                forgot Password?
                            </button>
                        </div>
                        <input
                            type="password"
                            name="password"
                            placeholder="⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉ ⚉"
                            className="w-full h-[38px] border border-solid rounded-[5px] pl-[15px] bg-white"
                            {...register('password')}
                        />
                        {/* {errors?.password?.type === "required" && (
                        <p className="text-[#EA5455]">Password is require</p>
                    )} */}
                        {errors.password && <p className="text-[#EA5455]">{errors.password.message}</p>}
                    </div>
                    <div className="flex flex-row w-[134px] h-[21px]  items-center mb-[14px]">
                        <Checkbox {...label} defaultChecked className=" !h-[21px] " />
                        <p className="text-sm ">Remember me</p>
                    </div>
                    <input
                        type="submit"
                        value="login"
                        className="text-sm bg-[#7367F0] w-full h-[38px] mb-[14px] cursor-pointer"
                    />
                    <div className="flex flex-row justify-center text-sm">
                        <p className="text-[#6E6B7B]">New on our platform?</p>
                        <p className="text-[#7367F0] cursor-pointer">Create an account</p>
                    </div>
                    <div className="flex flex-row items-center w-full mx-auto mb-[14px]">
                        <hr className=" w-full border border-solid border-[#E9EAEC]" />
                        <p className="mx-[10px]">or</p>
                        <hr className="w-full border border-[#E9EAEC]         " />
                    </div>
                    <div className="w-[153px] h-[30px] flex flex-row justify-between mx-auto">
                        <img src="/images/login/Facebook.png" alt="" />
                        <img src="/images/login/Twitter.png" alt="" />
                        <img src="/images/login/Mail.png" alt="" />
                        <img src="/images/login/Git.png" alt="" />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};
export default Login;
