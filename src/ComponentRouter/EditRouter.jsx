import React, { useState, useEffect } from 'react';
import { fetchData } from '../Services/UserService';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Toastify from '../ComponentPage/Toasttify';
import Layout from '../ComponentPage/Layout';

const GetEditRouter = ({}) => {
    const params = useParams();
    // console.log("params:", params);
    const [dataEdit, setDataEdit] = useState({ title: '', sku: '', price: '', weight: '' });
    const navigate = useNavigate();
    const Close = () => {
        navigate('/');
    };
    useEffect(() => {
        getDataUpdate();
    }, [params.id]);
    const getDataUpdate = async () => {
        if (params.id !== undefined) {
            let res = await fetchData.get(`/products/${params.id}`);
            // console.log("res:", res);
            if (res && res.data) {
                setDataEdit({
                    title: res.data.title,
                    sku: res.data.sku,
                    weight: res.data.weight,
                    price: res.data.price,
                });
            }
        }
    };

    const handleClose2 = () => {
        /* updating title of product with id 1 */
        let res = fetchData({
            url: `/products/${params.id}`,
            method: 'PUT' /* or PATCH */,
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify({
                title: dataEdit.title,
                sku: dataEdit.sku,
                weight: dataEdit.weight,
                price: dataEdit.price,
            }),
        })
            .then((res) => console.log(res))
            .then(() => Toastify('Edit is successfull'))
            .catch(() => Toastify('edit error , please'));

        navigate('/');
    };

    const getInput2 = () => {
        const { name, value } = event.target;
        setDataEdit((prevData) => ({ ...prevData, [name]: value }));
        // console.log("event", event);
        // console.log("title:", dataEdit.title);
    };

    return (
        <Layout>
            <div className="flex flex-col items-center">
                <Box className="bg-white w-[600px] justify-center h-[450px] p-5 ">
                    <div className="w-full h-[26px] flex mb-[22px] justify-center items-center">
                        <p className="text-lg  font-bold text-[#2d30ba] h-[26px]">Edit Station</p>
                    </div>
                    <form className="w-[500px] h-[200px] flex flex-col mb-[22px] mt-7 justify-between items-center ">
                        <label htmlFor="title" className="flex w-[500px] flex-row justify-between items-center">
                            title
                            <input
                                type="text"
                                id="title"
                                value={dataEdit.title}
                                name="title"
                                onChange={getInput2}
                                placeholder="Organization Name"
                                className="bg-[#F1F1F1] w-[450px] h-[30px] text-xs pl-[10px] "
                            />
                        </label>
                        <label htmlFor="" className="flex w-[500px] flex-row justify-between items-center">
                            sku
                            <input
                                type="text"
                                id="sku"
                                value={dataEdit.sku}
                                name="sku"
                                onChange={getInput2}
                                placeholder="Organization Name"
                                className="bg-[#F1F1F1] w-[450px] h-[30px] text-xs pl-[10px]  "
                            />
                        </label>
                        <label htmlFor="" className="flex w-[500px] flex-row justify-between items-center">
                            weight
                            <input
                                type="text"
                                id="weight"
                                value={dataEdit.weight}
                                name="weight"
                                onChange={getInput2}
                                placeholder="Organization Name"
                                className="bg-[#F1F1F1] w-[450px] h-[30px] text-xs pl-[10px] "
                            />
                        </label>
                        <label htmlFor="" className="flex w-[500px] flex-row justify-between items-center">
                            price
                            <input
                                type="text"
                                id="price"
                                value={dataEdit.price}
                                name="price"
                                onChange={getInput2}
                                placeholder="Organization Name"
                                className="bg-[#F1F1F1] w-[450px] h-[30px] text-xs pl-[10px] "
                            />
                        </label>
                        <div>
                            <div className="w-[500px] h-[26px] flex flex-row justify-between text-sm mt-[10px]">
                                <button
                                    onClick={Close}
                                    className=" w-[85px] h-[26px]  bg-[#04474433] text-[#004744] flex flex-row items-center justify-center"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleClose2}
                                    type="submit"
                                    className="w-[85px] h-[26px]  bg-[#004744] text-white flex flex-row items-center justify-center"
                                >
                                    Edit
                                </button>
                            </div>
                        </div>
                    </form>
                </Box>
                <ToastContainer />
            </div>
        </Layout>
    );
};

export default GetEditRouter;
