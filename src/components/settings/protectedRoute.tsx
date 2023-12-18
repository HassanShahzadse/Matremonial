// components/ProtectedRouteWrapper.tsx
"use client"
import React, { ReactNode, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

interface ProtectedRouteWrapperProps {
  children: ReactNode;
}

export const ProtectedRouteWrapper: React.FC<ProtectedRouteWrapperProps> = ({ children }) => {
  const { user } = useAuthContext();
  const router = useRouter();
   
  useEffect(() => {
const localUser = localStorage.getItem('user');
    if (!user && !localUser) {
     
      router.push('/login');
      console.log(user);
    }
    console.log(user);
  }, [user, router]);

  return <>{children}</>;
};