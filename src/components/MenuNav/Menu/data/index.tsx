import React, { ReactNode } from 'react';
import { AiOutlineFileSearch, AiOutlineQuestionCircle } from 'react-icons/ai';
import { IoSettingsOutline } from 'react-icons/io5';
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
        title: 'Perguntas',
        path: '/questions/register',
        icon: <AiOutlineQuestionCircle/>,
    },
    {
        title: 'Usuários',
        path: '/users/register',
        icon: <FaRegUser/>,
    },
    {
        title: 'Configurações',
        path: '/settings',
        icon: <IoSettingsOutline/>,
    }
];




