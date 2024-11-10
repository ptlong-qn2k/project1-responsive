import React from 'react';
import { fetchData } from '../Services/UserService';
import 'reactjs-popup/dist/index.css';
import '../Styles/App.css';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Toastify from '../ComponentPage/Toasttify';

const ModalDelete = ({ setOpen1, open1, idDelete }) => {
    const style = {
        // position: 'absolute',
        // top: '55px',
        // right: '55px',
        // transform: 'translate(-50%, -50%)',
        width: 420,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        // boxShadow: 0,
    };
    const handleClose1 = async () => {
        setOpen1(false);
        await fetchData
            .delete(`/products/${idDelete}`)
            // .then(console.log)
            .then(() => Toastify('Delete is successfull'))
            .catch(() => Toastify('error delete, please operate again'));
    };

    return (
        <Modal
            open={open1}
            onClose={() => {
                setOpen1(false);
            }}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            slotProps={{
                backdrop: {
                    sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                    },
                },
            }}
        >
            <Box
                sx={style}
                className="w-[378px] h-[234px] border border-solid flex flex-col m-auto relative top-[100px]"
            >
                <h2 className="text-lg absolute font-bold text-[#2d30ba]  left-[34px] top-[41px]">Delete Station?</h2>
                <p className="text-xs absolute w-[314px] left-[34px] top-[69px]">
                    This action is not reversible, all child-organisation data will be deleted.
                </p>
                <div className="w-[203px] h-[26px] flex flex-row justify-between absolute left-[145px] top-[132px]">
                    <button
                        onClick={() => setOpen1(false)}
                        className="w-[99px] h-full text-sm bg-[#04474433] text-[#004744] flex items-center justify-center"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleClose1}
                        className="w-[94px] h-full text-sm bg-[#004744] text-white flex items-center justify-center"
                    >
                        Confirm
                    </button>
                </div>
            </Box>
        </Modal>
    );
};
export default ModalDelete;
