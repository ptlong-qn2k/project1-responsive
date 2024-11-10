import React from 'react';
import { fetchData } from '../Services/UserService';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import Toastify from '../ComponentPage/Toasttify';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Layout from '../ComponentPage/Layout';

const CreateRouter = ({}) => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const Close = () => {
        navigate('/');
    };
    const handleClose = (data) => {
        fetchData({
            url: 'products/add',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({
                title: `${data.title}`,
                sku: `${data.sku}`,
                weight: `${data.weight}`,
                price: `${data.price}`,
            }),
        })
            // .then((res) => console.log(res))
            .then(() => Toastify('Create is successfully'))
            .catch((error) => Toastify('add product is error'));
        navigate('/');
    };

    return (
        <Layout>
            <div className="flex flex-col items-center ">
                <Box className="flex flex-col bg-white w-[600px] items-center h-[450px] p-5 ">
                    <div className="w-[full] h-[26px] flex mb-[22px] justify-center items-center">
                        <h2 className="text-lg font-bold text-[#2d30ba] h-[26px] ">Add Station</h2>
                    </div>
                    <form
                        onSubmit={handleSubmit(handleClose)}
                        className="w-[500px] h-[200px] flex flex-col ml-10 mb-[22px] mt-7 justify-between items-center"
                    >
                        <label className="flex w-[500px]  flex-row justify-between items-center">
                            title:
                            <input
                                placeholder="  title"
                                className="bg-[#F1F1F1] w-[450px] h-[30px] text-xs pl-[10px]"
                                {...register('title', {
                                    // required: true,
                                    maxLength: 20,
                                    pattern: /^[A-Za-z]+$/i,
                                })}
                            />
                        </label>
                        {/* {errors?.title?.type === "required" && <p>This field is required</p>} */}
                        {errors?.title?.type === 'maxLength' && <p>First name cannot exceed 20 characters</p>}
                        {errors?.title?.type === 'pattern' && <p>Alphabetical characters only</p>}
                        <label className="flex w-[500px] flex-row justify-between items-center">
                            sku :
                            <input
                                placeholder="  sku"
                                {...register('sku', { pattern: /^[A-Za-z]+$/i })}
                                className="bg-[#F1F1F1] w-[450px] h-[30px] text-xs pl-[10px]"
                            />
                        </label>
                        {errors?.sku?.type === 'pattern' && <p>Alphabetical characters only</p>}
                        <label className="flex w-[500px] flex-row justify-between items-center">
                            weight:
                            <input
                                placeholder="  weight"
                                {...register('weight', { min: 0, max: 99 })}
                                className="bg-[#F1F1F1] w-[450px] h-[30px] text-xs pl-[10px]"
                            />
                        </label>
                        {errors.weight && <p>You Must be older then 0 and weight then 99 kg</p>}
                        <label className="flex w-[500px] flex-row justify-between items-center">
                            price:
                            <input
                                placeholder="  price"
                                {...register('price', { min: 0, max: 99 })}
                                className="bg-[#F1F1F1] w-[450px] h-[30px] text-xs pl-[10px]"
                            />
                        </label>
                        {errors.price && <p>you must be older then o and price 99 $</p>}
                        <div className="flex flex-row justify-between w-[500px] mt-[10px]">
                            <Button
                                onClick={Close}
                                variant="container"
                                className={`w-[85px] h-[26px] !bg-[#04474433] !lowercase `}
                            >
                                cancel
                            </Button>
                            <input
                                type="submit"
                                value="create"
                                className=" cursor-pointer rounded-[10px] w-[85px] h-[26px] bg-[#004744] text-white flex flex-row items-center justify-center"
                            />
                        </div>
                    </form>
                </Box>
                <ToastContainer />
            </div>
        </Layout>
    );
};
export default CreateRouter;
