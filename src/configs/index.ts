export const API_ENDPOINT = 'https://tony-auth-express-vdee.vercel.app';
// export const API_ENDPOINT = 'http://localhost:3000'; // run localhost

export const PATH = {
  DASHBOARD: '/',
  ROOT: '/',
  USER: '/user',
  USER_SHOW: '/user/show/:userId',
  LOGIN: '/login',
  REGISTER: '/register',
  EMPLOYEE_LIST: '/employee/list',
  EMPLOYEE_CREATE: '/employee/create',
  EMPLOYEE_SHOW: '/employee/show/:id',
  EMPLOYEE_EDIT: '/employee/edit/:id',
  INVOICE_CREATE: '/invoice/create',
  INVOICE_LIST: '/invoice/list',
  HOME: '/home',
  ERROR_403: '/403'
}

export const ROLE = {
  ADMIN: 'admin',
  OPERATOR: 'operator',
  MEMBER: 'member'
}

export const MEMBER_STATUS = {
  PENDING_APPROVED: 'Pending Approved',
  APPROVED: 'Approved',
  REJECTED: 'Rejected'
}

export const THEME_STORAGE = 'theme';
export const THEME_MODE = {
  LIGHT: 'light',
  DARK: 'dark'
}