import '../Styles/App.css';
import { useState } from 'react';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import ModalDelete from '../ComponentRouter/DeleteRouter';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const TableStation = ({ listUsers }) => {
    let navigate = useNavigate();
    const [open1, setOpen1] = useState(false);
    const [idDelete, setIdDelete] = useState();

    const displayDelete = (e, idDelete) => {
        setOpen1(true);
        setIdDelete(idDelete);
    };

    // const displayDelete = (e, idDelete) => {
    //     navigate(`/deleteuser/${idDelete}`)
    // }
    // const displayEdit = (e, idUpdate) => {
    //     navigate(`/getedituser/${idUpdate}`)
    // }
    // const displayView = (e, id) => {
    //     navigate(`/getsingle/${id}`)
    // }

    return (
        <TableContainer component={Paper} className="mb-[30px]">
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">ID</StyledTableCell>
                        <StyledTableCell align="left" className="cursor-pointer">
                            Tittle
                        </StyledTableCell>
                        <StyledTableCell align="left" className="cursor-pointer">
                            Sku
                        </StyledTableCell>
                        <StyledTableCell align="left" className="cursor-pointer">
                            Weight
                        </StyledTableCell>
                        <StyledTableCell align="left" className="cursor-pointer">
                            Price
                        </StyledTableCell>
                        <StyledTableCell align="left">Enable</StyledTableCell>
                        <StyledTableCell align="left">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {listUsers &&
                        listUsers.map((data) => (
                            <StyledTableRow key={data.id}>
                                <StyledTableCell component="th" scope="row">
                                    {data.id}
                                </StyledTableCell>
                                <StyledTableCell align="left">{data.title}</StyledTableCell>
                                <StyledTableCell align="left">{data.sku}</StyledTableCell>
                                <StyledTableCell align="left">{data.weight}</StyledTableCell>
                                <StyledTableCell align="left">{data.price}</StyledTableCell>
                                <StyledTableCell align="left">
                                    <Switch {...label} defaultChecked size="small" />
                                </StyledTableCell>
                                <StyledTableCell align="left">
                                    <span
                                        onClick={() => navigate(`/getsingle/${data.id}`)}
                                        className="text-[#004744] mr-2 cursor-pointer"
                                    >
                                        VIEW
                                    </span>
                                    <span
                                        onClick={() => navigate(`/getedituser/${data.id}`)}
                                        className="text-[#004744] mr-4 cursor-pointer"
                                    >
                                        EDIT
                                    </span>
                                    <span
                                        onClick={(e) => displayDelete(e, data.id)}
                                        className="text-[#7C7B7B] cursor-pointer"
                                    >
                                        DELETE
                                    </span>
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                </TableBody>
            </Table>
            <ModalDelete setOpen1={setOpen1} open1={open1} idDelete={idDelete} />
            <ToastContainer />
        </TableContainer>
    );
};

export default TableStation;
