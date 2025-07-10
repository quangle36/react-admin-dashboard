import React from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../store';

interface AccessControlProps extends React.PropsWithChildren {
  resource: string
}

interface RoleUser {
  [key: string]: string[]
}

interface Permission {
  [key: string]: string
}

export const roleUser: RoleUser = {
  admin: ['CAN_CREATE', 'CAN_READ', 'CAN_UPDATE', 'CAN_DELETE', 'CAN_UPLOAD'],
  operator: ['CAN_READ', 'CAN_UPDATE', 'CAN_UPLOAD', 'CAN_CREATE'],
  member: ['CAN_READ']
}

const permission: Permission = {
  "employee.action.delete": 'CAN_DELETE',
  "employee.action.update": 'CAN_UPDATE',
  "employee.action.create": 'CAN_CREATE',
  "employee.action.read": 'CAN_READ',
  "invoice.action.delete": 'CAN_DELETE'
}

function AccessControl({ children, resource }: AccessControlProps) {
  const role = useSelector((state: RootState) => state.app.user?.role);
  const ROLES: string[] = role ? roleUser[role] : [];

  if (!role) return null;

  if (!ROLES.includes(permission[resource])) return null;

  return (
    <>{children}</>
  )
}

export default AccessControl