import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const Toastify = (props) => {
    // toast("This is a toast notification !");
    toast(`${props}`);
    return <ToastContainer />;
};
export default Toastify;
