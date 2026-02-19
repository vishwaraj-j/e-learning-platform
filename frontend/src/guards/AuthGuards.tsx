import React, { useEffect } from 'react';
import type { ReactElement } from 'react';

interface AuthGuardProps {
  component: ReactElement;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ component }) => {
  useEffect(() => {
    console.log('Auth Guard');
  }, []);

  return <>{component}</>;
};

export default AuthGuard;
