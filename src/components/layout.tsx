"use client"

import SideBar from '@/utils/sideBar';
import TopBar from '@/utils/topBar';
import { useState } from 'react';

export default function Layout({ children, show, setShow }: any) {
    return (
        <div>
            <main className={show ? 'space-toggle' : ''}>
            <TopBar show={show} setShow={setShow} />
            <SideBar show={show} />
            
            {children}
            </main>
        </div>
    );
};




