import React, { useEffect } from 'react';
import type { ReactElement } from 'react';

interface UnAuthGuardProps {
  component: ReactElement;
}

const UnAuthGuard: React.FC<UnAuthGuardProps> = ({ component }) => {
  useEffect(() => {
    console.log('UnAuth Guard');
  }, [component]);

  return <>{component}</>;
};

export default UnAuthGuard;
