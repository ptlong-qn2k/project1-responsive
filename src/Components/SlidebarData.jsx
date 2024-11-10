import React from 'react';

import HomeIcon from '@mui/icons-material/Home';
import ReceiptIcon from '@mui/icons-material/Receipt';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Assignment, SupportAgent } from '@mui/icons-material';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeIcon />,
        cName: 'nav-text',
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <ReceiptIcon />,
        cName: 'nav-text',
    },
    {
        title: 'Products',
        path: '/products',
        icon: <AddShoppingCartIcon />,
        cName: 'nav-text',
    },
    {
        title: 'Team',
        path: '/team',
        icon: <PeopleAltIcon />,
        cName: 'nav-text',
    },
    {
        title: 'Messages',
        path: '/message',
        icon: <Assignment />,
        cName: 'nav-text',
    },
    {
        title: 'Support',
        path: '/support',
        icon: <ContactSupportIcon />,
        cName: 'nav-text',
    },
];
