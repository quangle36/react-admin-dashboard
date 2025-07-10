import React from 'react'

import { PATH } from "../configs";
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

interface RoleRouteProps extends React.PropsWithChildren {
  requireRoles: string[]
}

function RoleRoute({ children, requireRoles }: RoleRouteProps) {
  const role = useSelector((state: RootState) => state.app.user?.role) || '';

  if (requireRoles.length > 0) {
    const isAccessPage = requireRoles.includes(role);
    if (isAccessPage) {
      return children;
    } else {
      window.location.href = PATH.ERROR_403
    }
  }

  return children
}

export default RoleRoute