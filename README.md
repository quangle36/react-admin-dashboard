# React Admin Dashboard
  - react typescript
  - tailwind

# Pages
- login
- register
- dashboard
- employee
  - list
  - create
  - show detail
  - edit
- resume
  - list
  - show
  - click Edit button -> show dialog

# Authorize + permission
RBAC (Role-Based Access Control)
page: A, B, C, D, E
method: create, read, update, delete (CRUD)
FE
- role with page -> access page -> user A can access page A, B
- role with action -> user A can view

resource: 
employee: employee.create, employee.delete, employee.read, employee.update
invoice: invoice.delete

role: admin, member, operator, lead
- admin: create, read, update, delete (CRUD)
- member: read
- operator: read, update, create

BE
- FE call api with access token -> get role from access token -> FE  call api delete (role = member) -> BE return access denied
*/
