// components/ProtectedRouteWrapper.tsx
import React, { ReactNode, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';

interface ProtectedRouteWrapperProps {
  children: ReactNode;
}

const ProtectedRouteWrapper: React.FC<ProtectedRouteWrapperProps> = ({ children }) => {
  const { user } = useAuthContext();
  const router = useRouter();
   
  useEffect(() => {
    
    if (!user) {
     
      router.push('/login');
      console.log(user);
    }
    console.log(user);
  }, [user, router]);

  return <>{children}</>;
};

export default ProtectedRouteWrapper;
