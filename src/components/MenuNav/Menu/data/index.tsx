import React, { ReactNode } from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
export interface SubItem {
    title: string,
    path: string,
    permission: string
};

export interface MenuItem {
    title: string,
    path: string,
    icon: ReactNode,
    permission?: string,
    subItems?: SubItem[]
};

export const menuData: MenuItem[] = [
    
    {
        title: 'Tópicos',
        path: '/subjects',
        icon: <AiOutlineFileSearch/>,
    },
    {
        title: 'Usuários',
        path: '/users/register',
        icon: <FaRegUser/>,
    }
];




