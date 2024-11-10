import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

const Logout = ({ open, setOpen }) => {
    const style = {
        position: 'absolute',
        top: '0',
        right: '0',
        // transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const navigate = useNavigate();
    const handleClose = () => {
        setOpen(false);
    };
    const hangleLogout = () => {
        setOpen(false);
        localStorage.removeItem('token_user');
        navigate('/');
    };

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={style}
                    className="w-[378px] h-full border border-solid flex flex-col m-auto relative top-[100px]"
                >
                    <h2 className="text-xl absolute  left-[34px] top-[41px]">Bạn có muốn đăng xuất không?</h2>
                    <p className="text-xs absolute w-[314px] left-[34px] top-[69px]">
                        đăng xuất tài khoản không thể truy cập, vui lòng đăng nhập lại{' '}
                    </p>
                    <div className="w-[203px] h-[26px] flex flex-row justify-between absolute left-[145px] top-[132px]">
                        <button
                            onClick={handleClose}
                            className="w-[99px] h-full text-sm bg-[#04474433] text-[#004744] flex items-center justify-center"
                        >
                            Huỷ bỏ
                        </button>
                        <button
                            onClick={hangleLogout}
                            className="w-[full] h-full text-sm bg-[#004744] text-white flex items-center justify-center"
                        >
                            Đăng xuất
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};
export default Logout;
