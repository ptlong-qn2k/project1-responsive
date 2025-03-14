import { useState } from 'react';
import React from 'react';
import '../Styles/App.css';
import { Button } from '@mui/material';
import SearchIcon from '../assets/Icon/search';
// import CreateStation from "../ComponentsModal/CreateStation";
// import CreateStation from "../ComponentsModal/TaoProduct";
import CreateStation from '../ComponentRouter/CreateRouter';
import { useNavigate } from 'react-router-dom';

const SearchStation = ({ dataSearch, sidebar }) => {
    const navigate = useNavigate();
    const searchButton = () => {
        dataSearch(document.getElementById('search').value);
    };
    const searchButton2 = (e) => {
        if (e.key === 'Enter') {
            searchButton();
        }
    };
    // const [open, setOpen] = useState(false);
    const handleOpen = () => {
        // setOpen(true);
        navigate('/create-user');
    };

    return (
        <>
            <div
                className={`w-full flex flex-row justify-between items-center m-auto mb-[19px] ${sidebar ? 'hidden' : ''}`}
            >
                <div className="w-[294px] md:w-full h-8 flex flex-row justify-start">
                    <div className="w-[202px] md:w-[120px] h-8 mr-2  border border-solid border-[#D7D7D7] rounded-[5px] flex flex-row items-center">
                        <div className="w-[139px] md:w-[full] h-4 px-2  flex flex-row justify-between">
                            <img src="/images/session2/search.png" alt="" className="w-4 h-4 mr-[7px]" />
                            <input
                                id="search"
                                onKeyDown={searchButton2}
                                name="search"
                                type="text"
                                placeholder="search programs"
                                className="text-xs text-[#747474] w-full pl-1"
                            />
                        </div>
                    </div>
                    <Button
                        onClick={searchButton}
                        variant="container"
                        startIcon={<SearchIcon />}
                        className="md:w-[110px] !bg-[#04474433] flex flex-row items-center"
                    >
                        Stations
                    </Button>
                </div>
                <div className="w-[103px] cursor-pointer h-8 rounded-[5px] bg-[#004744] flex flex-row justify-center items-center">
                    <div
                        onClick={handleOpen}
                        className="w-[87px] md:w-[71px] h-4 flex flex-row justify-between items-center"
                    >
                        <img src="/images/session2/plus.png" alt="" className="w-4 h-4" />
                        <p className="text-xs text-white">Add Station</p>
                    </div>
                    {/* <CreateStation
                        open={open}
                        setOpen={setOpen}
                    /> */}
                </div>
            </div>
        </>
    );
};
export default SearchStation;
