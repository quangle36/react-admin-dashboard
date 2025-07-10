import TextButton from '../../components/ui/button/text-button'
import AccessControl from '../../components/access-control'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../configs';

function List() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='text-right'>
        <AccessControl resource='employee.action.create'>
          <TextButton size="sm" onClick={() => navigate(PATH.EMPLOYEE_CREATE)}>
            Create
          </TextButton>
        </AccessControl>
      </div>
      <br />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Tony
              </th>
              <td className="px-6 py-4">male</td>
              <td className="px-6 py-4">
                <AccessControl resource='employee.action.update'>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </a>
                </AccessControl>
                <AccessControl resource='employee.action.delete'>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                  >
                    Delete
                  </a>
                </AccessControl>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Dat
              </th>
              <td className="px-6 py-4">male</td>
              <td className="px-6 py-4">
                <AccessControl resource='employee.action.update'>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </a>
                </AccessControl>
                <AccessControl resource='employee.action.delete'>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                  >
                    Delete
                  </a>
                </AccessControl>
              </td>
            </tr>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Quang
              </th>
              <td className="px-6 py-4">male</td>
              <td className="px-6 py-4">
                <AccessControl resource='employee.action.update'>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </a>
                </AccessControl>
                <AccessControl resource='employee.action.delete'>
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-2"
                  >
                    Delete
                  </a>
                </AccessControl>
              </td>
            </tr>
            
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default List