import React, { ReactNode } from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';

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
    }
];




