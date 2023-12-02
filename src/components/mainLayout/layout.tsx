"use client"

import SideBar from '@/utils/sideBar/sideBar';
import TopBar from '@/utils/topBar/topBar';
import { useState } from 'react';
import ProtectedRouteWrapper from '../../app/admin/page';


export default function Layout({ children, show, setShow }: any) {
    return (
        <div>
            <main className={show ? 'space-toggle' : ''}>
            <TopBar show={show} setShow={setShow} />
            <SideBar show={show} />
            

            
           
            <ProtectedRouteWrapper>{children}</ProtectedRouteWrapper>

            </main> 
        </div>
    );
};




