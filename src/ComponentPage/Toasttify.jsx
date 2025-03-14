import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const ToastifyError = (props) => {
    // toast("This is a toast notification !");
    toast.error(`${props}`);
    return <ToastContainer />;
};
const ToastifySuccess = (props) => {
    // toast("This is a toast notification !");
    toast.success(`${props}`);
    return <ToastContainer />;
};
export { ToastifySuccess, ToastifyError };
