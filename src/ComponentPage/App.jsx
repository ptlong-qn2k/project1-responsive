import './Styles/App.css';
import { Routes, Route, useParams } from 'react-router-dom';
import MyComponent from './ComponentAll';
import Products from './ComponentPage/Products';
import Reports from './ComponentPage/Reports';
import Teams from './ComponentPage/teams';
import Message from './ComponentPage/Messsage';
import UserParams from './ComponentPage/useParams';
import GetSingleRouter from './ComponentRouter/GetSingleRouter';
import GetEditRouter from './ComponentRouter/EditRouter';
import DeleteRouter from './ComponentRouter/DeleteRouter';
import Supports from './ComponentPage/Support';
import CreateRouter from './ComponentRouter/CreateRouter';
import Login from './Components/Login';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import NotFound from './ComponentPage/Notfound';

function App() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token_user');
    // console.log("dang khong co token:", !token);

    useEffect(() => {
        if (!token) {
            navigate('/login');
        }
    }, [token]);

    return (
        <Routes>
            <Route path="/" element={<MyComponent />}></Route>
            <Route path="/params/:id" element={<UserParams />} />
            <Route path="/products" element={<Products />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/team" element={<Teams />} />
            <Route path="/message" element={<Message />} />
            <Route path="/support" element={<Supports />} />
            <Route path="/getsingle/:id" element={<GetSingleRouter />} />
            <Route path="/getedituser/:id" element={<GetEditRouter />} />
            {/* <Route path='/deleteuser/:id' element={<DeleteRouter />} /> */}
            <Route path="/create-user" element={<CreateRouter />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} /> //tao trang loi khi nhap sai duong link
        </Routes>
    );
}

export default App;
