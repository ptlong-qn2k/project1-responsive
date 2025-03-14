import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { fetchData } from '../Services/UserService';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../ComponentPage/Layout';

const GetSingleRouter = ({}) => {
    const [dataSingle, setDataSingle] = useState({});
    const params = useParams();
    // console.log("poarams", params.id);

    useEffect(() => {
        getSingleUser();
    }, [params.id]);

    const navigate = useNavigate();
    const handleClose3 = () => {
        setDataSingle({});
        navigate('/');
    };
    const Close = () => {
        navigate('/');
    };

    const getSingleUser = async () => {
        if (params.id !== undefined) {
            let res = await fetchData.get(`products/${params.id}`);
            if (res && res.data) {
                setDataSingle(res.data);
            }
        }
    };
    const decreate = async () => {
        setDataSingle({});
        navigate(`/getsingle/${Number(params.id) - 1}`);
    };
    const increate = () => {
        setDataSingle({});
        navigate(`/getsingle/${Number(params.id) + 1}`);
    };

    return (
        <Layout>
            <div>
                {JSON.stringify(dataSingle) === '{}' ? (
                    <p className="bg-white text-center">khong co du lieu data</p>
                ) : (
                    <div className="flex justify-center items-center  ">
                        <button
                            onClick={decreate}
                            className=" h-[50px] md:hidden bg-slate-500 text-center flex items-center text-[#1fb6ff] font-bold text-2xl"
                        >
                            Last
                        </button>
                        <Box className="w-full max-w-xl flex flex-col items-center relative ">
                            <h2 className="text-lg font-bold text-[#2d30ba] ">get single product</h2>
                            <p className="text-center mt-5">
                                {dataSingle.title}-{dataSingle.price}$
                            </p>
                            <img src={`${dataSingle.images}`} alt="" className="min-w-[300px] h-[300px] mx-auto" />
                            <div className="w-[203px] h-[26px] flex flex-row justify-between mx-auto mt-5">
                                <button
                                    onClick={() => navigate('/')}
                                    className="w-[99px] h-full text-sm bg-[#04474433] text-[#004744] flex items-center justify-center"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={(e) => handleClose3()}
                                    className="w-[94px] h-full text-sm bg-[#004744] text-white flex items-center justify-center"
                                >
                                    Confirm
                                </button>
                            </div>
                        </Box>
                        <button
                            onClick={increate}
                            className="h-[50px] md:hidden  bg-slate-500 text-center flex items-center text-[#1fb6ff] font-bold text-2xl"
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </Layout>
    );
};
export default GetSingleRouter;
