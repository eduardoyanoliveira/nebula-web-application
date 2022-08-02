import React, { ReactNode } from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { HiOutlineDocumentAdd } from 'react-icons/hi';

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

export const baseData: MenuItem[] = [

    {
        title: 'Cadastros',
        path:  '/register',
        icon:   <HiOutlineDocumentAdd/>,
        subItems : [
            {
                title: 'Tópico',
                path:  '/register/subjects',
                permission: 'ADMIN',
            },
            {
                title: 'Conteúdo',
                path:  '/register/contents',
                permission: 'ADMIN',
            },
            {
                title: 'Nível de Experiência',
                path:  '/register/levels',
                permission: 'ADMIN',
            },
            {
                title: 'Dúvida',
                path:  '/register/questions',
                permission: 'USER',
            },
        ]
    },
    {
        title: 'Tópicos',
        path: '/subjects',
        icon: <AiOutlineFileSearch/>,
        subItems : []
    }
];




