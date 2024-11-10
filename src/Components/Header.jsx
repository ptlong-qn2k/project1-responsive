import '../Styles/App.css';
import { Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AiOutlineCloseSquare } from 'react-icons/ai';
import { SidebarData } from '../Components/SlidebarData';
import { NavLink, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { Logout } from '@mui/icons-material';

const Header = ({ statusSidebar, sidebar }) => {
    const navigate = useNavigate();

    const showSidebar = (value) => {
        statusSidebar(value);
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {
        localStorage.removeItem('token_user');
        navigate('/');
    };

    return (
        <>
            <div className="w-full h-[50px] flex flex-row justify-between items-center m-auto">
                <div className="w-[full] h-8 flex flex-row items-center">
                    <Button
                        startIcon={<MenuIcon fontSize="large" />}
                        onClick={showSidebar}
                        className={`!min-w-0 !bg-[#07080833] !pl-[21px] !w-8 !px-auto !h-8 rounded-[5px] !mx-auto ${sidebar ? '!hidden' : ''}`}
                    ></Button>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className="nav-menu-items" onClick={showSidebar}>
                            <li className="navbar-toggle">
                                <Link to="#" className="menu-bars">
                                    <AiOutlineCloseSquare cursor="pointer" />
                                </Link>
                            </li>

                            {SidebarData.map((item, index) => {
                                return (
                                    <div key={index} className={item.cName}>
                                        <NavLink
                                            to={item.path}
                                            className={`flex flex-row items-center ${({ isActive }) => (isActive ? 'active' : '')} `}
                                        >
                                            {item.icon}
                                            <span className="ml-5">{item.title}</span>
                                        </NavLink>
                                    </div>
                                );
                            })}
                        </ul>
                    </nav>
                    <p className={`font-bold text-base ml-3 cursor-pointer`}>Programs</p>
                </div>
                <div className="w-[full] h-[29px] flex flex-row justify-between">
                    <div className="w-[113px] h-[29px] flex flex-col items-end justify-center leading-3 text-[12px]">
                        <p className="text-[#004744]">Sam Rabera </p>
                        <p className="text-[#5C5C5C]">Oraganisation Name</p>
                    </div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        className="md:!mr-[-15px]"
                    >
                        <img
                            src="/project1-responsive/images/session1/Group659.png"
                            alt=""
                            className="w-[29px] h-[29px]"
                        />
                    </Button>
                </div>
            </div>
            <hr className="w-full mb-[19px] m-auto" />
            <div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <div
                        onClick={handleLogout}
                        className="w-[150px] flex flex-row items-center justify-center cursor-pointer"
                    >
                        <Logout />
                        <MenuItem>Logout</MenuItem>
                    </div>
                </Menu>
            </div>
        </>
    );
};
export default Header;
