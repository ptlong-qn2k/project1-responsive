import React from 'react';
import { fetchData } from '../Services/UserService';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { ToastifyError, ToastifySuccess } from '../ComponentPage/Toasttify';
import { ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Layout from '../ComponentPage/Layout';

const CreateRouter = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ criteriaMode: 'all' });

    // Điều hướng về trang chủ
    const handleClose = () => navigate('/');

    // Xử lý gửi dữ liệu
    const onSubmit = async (data) => {
        try {
            await fetchData({
                url: 'products/add',
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                data: JSON.stringify({
                    title: data.title,
                    sku: data.sku,
                    weight: Number(data.weight),
                    price: Number(data.price),
                }),
            });

            ToastifySuccess('✅ Product created successfully!');
            reset(); // Xóa dữ liệu form sau khi gửi thành công
            setTimeout(() => {
                navigate('/');
            }, 1500);
        } catch (error) {
            ToastifyError('❌ Failed to add product!');
        }
    };

    return (
        <Layout>
            <div className="flex flex-col items-center ">
                <Box className="flex flex-col bg-white w-full max-w-3xl items-center h-[450px] p-5 shadow-lg rounded-lg">
                    <h2 className="text-lg font-bold text-[#2d30ba] mb-5">Add Product</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
                        {/* Title */}
                        <label className="flex flex-col">
                            <span>Title:</span>
                            <input
                                placeholder="Enter title"
                                className="bg-[#F1F1F1] w-full h-[30px] text-xs pl-2 rounded-md outline-none"
                                {...register('title', {
                                    required: 'Title is required',
                                    maxLength: {
                                        value: 50,
                                        message: 'Max 50 characters',
                                    },
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/i,
                                        message: 'Only letters and spaces allowed',
                                    },
                                })}
                            />
                            {errors.title && <p className="text-red-500 text-xs">{errors.title.message}</p>}
                        </label>

                        {/* SKU */}
                        <label className="flex flex-col">
                            <span>SKU:</span>
                            <input
                                placeholder="Enter SKU"
                                className="bg-[#F1F1F1] w-full h-[30px] text-xs pl-2 rounded-md outline-none"
                                {...register('sku', {
                                    required: 'SKU is required',
                                    pattern: {
                                        value: /^[A-Za-z0-9-]+$/i,
                                        message: 'Only alphanumeric & hyphens allowed',
                                    },
                                })}
                            />
                            {errors.sku && <p className="text-red-500 text-xs">{errors.sku.message}</p>}
                        </label>

                        {/* Weight */}
                        <label className="flex flex-col">
                            <span>Weight (kg):</span>
                            <input
                                type="number"
                                placeholder="Enter weight"
                                className="bg-[#F1F1F1] w-full h-[30px] text-xs pl-2 rounded-md outline-none"
                                {...register('weight', {
                                    required: 'Weight is required',
                                    min: { value: 0.1, message: 'Min weight is 0.1kg' },
                                    max: { value: 99, message: 'Max weight is 99kg' },
                                    valueAsNumber: true,
                                })}
                            />
                            {errors.weight && <p className="text-red-500 text-xs">{errors.weight.message}</p>}
                        </label>

                        {/* Price */}
                        <label className="flex flex-col">
                            <span>Price ($):</span>
                            <input
                                type="number"
                                placeholder="Enter price"
                                className="bg-[#F1F1F1] w-full h-[30px] text-xs pl-2 rounded-md outline-none"
                                {...register('price', {
                                    required: 'Price is required',
                                    min: { value: 1, message: 'Min price is $1' },
                                    max: { value: 9999, message: 'Max price is $9999' },
                                    valueAsNumber: true,
                                })}
                            />
                            {errors.price && <p className="text-red-500 text-xs">{errors.price.message}</p>}
                        </label>

                        {/* Buttons */}
                        <div className="flex justify-between mt-4">
                            <Button
                                onClick={handleClose}
                                variant="contained"
                                className="!bg-gray-300 !text-black px-4 py-1 rounded-md"
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                variant="contained"
                                className="!bg-[#004744] text-white px-4 py-1 rounded-md"
                            >
                                Create
                            </Button>
                        </div>
                    </form>
                </Box>
                <ToastContainer />
            </div>
        </Layout>
    );
};

export default CreateRouter;
