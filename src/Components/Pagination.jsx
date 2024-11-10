import { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationItem from '@mui/material/PaginationItem';
import '../Styles/App.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function PaginationControlled({ onChangeUid, page, perpage, limit, count, dataTotal, onChangePerPage }) {
    // const params = useParams();
    // console.log(params);

    const navigate = useNavigate();
    const handlePerPage = (event) => {
        // setPerpage(event.target.value);
        onChangePerPage(event.target.value);
        // console.log(onChangePerPage);
    };

    const handleChangeUid = (e, value_page) => {
        // console.log("checkvalue1", value_page);
        onChangeUid(value_page);
        // navigate(`page/${value_page}`)
    };

    return (
        <div className="flex flex-row justify-between items-center w-full h-full m-auto md:flex-col ">
            <p className="ww-[full] h-[full] text-sm py-[6px] whitespace-nowrap md:order-2">
                `Showing {page} to {count} of {dataTotal} entries`
            </p>
            <Box sx={{ minWidth: 50 }}>
                <FormControl className="w-full">
                    <Select
                        sx={{
                            // width: 60,
                            height: 30,
                        }}
                        value={limit}
                        onChange={handlePerPage}
                    >
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={20}>20</MenuItem>
                        <MenuItem value={30}>30</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Stack spacing={2}>
                {/* <Typography>Page: {page}</Typography> */}
                <Pagination
                    count={count}
                    page={page}
                    onChange={handleChangeUid}
                    renderItem={(items) => (
                        <PaginationItem
                            className="md:hidden"
                            components={{
                                next: (props) => (
                                    <div {...props} className="w-full h-full flex flex-row justify-center items-center">
                                        Next
                                    </div>
                                ),
                                previous: (props) => (
                                    <div {...props} className="w-full flex flex-row justify-center items-center">
                                        Previous
                                    </div>
                                ),
                            }}
                            {...items}
                        />
                    )}
                />
            </Stack>
        </div>
    );
}
