import { useState, useEffect } from 'react';
import '../Styles/App.css';
import Pagination from '../Components/Pagination';
import Header from '../Components/Header';
import SearchStation from '../Components/SearchStation';
import TableStation from '../Components/TableStationRouter';
import { fetchData } from '../Services/UserService';
import { Routes, Route } from 'react-router-dom';
import Login from '../Components/Login';
import { Children } from 'react';
function Layout({ children }) {
    const [sidebar, setSidebar] = useState(false);
    const [page, setPage] = useState(1);
    const [perpage, setPerpage] = useState('5');
    const [listUsers, setListUsers] = useState();
    const [limit, setLimit] = useState(5);
    const [uid, setUid] = useState(0);
    const [count, setCount] = useState();
    const [title, setTitle] = useState('title');
    const [sku, setSku] = useState('sku');
    const [weight, setWeight] = useState('weight');
    const [price, setPrice] = useState('price');
    const [search, setSearch] = useState('');
    const [dataTotal, setDatatotal] = useState();

    useEffect(() => {
        getUsers();
    }, [uid, limit, title, sku, weight, price, search]);

    let getUsers = async () => {
        let res = await fetchData.get(
            `products/search?q=${search}&limit=${limit}&skip=${uid}&select=${title},${sku},${weight},${price}`,
        );
        if (res && res.data) {
            setListUsers(res.data.products);
            setDatatotal(res.data.total);
            res.data.total % limit == 0
                ? setCount(Math.floor(res.data.total / limit))
                : setCount(Math.floor(res.data.total / limit) + 1);
        }
    };

    const onChangeUid = (value_page) => {
        // id la data from child
        setUid((value_page - 1) * limit);
        // console.log("valuepage", value_page);
        setPage(value_page);
    };

    const onChangePerPage = (value_count) => {
        setPerpage(value_count); //trùng với limit
        setLimit(value_count);
        setUid(0);
        setPage(1);
    };

    const dataSearch = (value_search) => {
        setSearch(value_search);
        setLimit(5);
        setUid(0);
        setPage(1);
    };

    const deleteData = (value) => {
        console.log(value);
    };

    const statusSidebar = (value) => {
        setSidebar(!sidebar);
    };
    // console.log("check", sidebar);

    return (
        <div
            className={`${sidebar ? 'pr-[15px] ml-[250px] w-[calc(100%_-_250px)] md:w-[calc(100%_-_85px)] md:ml-[150px]' : 'w-full px-[15px] mx-auto'}`}
        >
            <Header sidebar={sidebar} statusSidebar={statusSidebar} />

            <div>{children}</div>
        </div>
    );
}

export default Layout;
