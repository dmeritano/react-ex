import { useNavigate } from "react-router-dom"

const Customer = ({ customer, handleDelete }) => {
  const navigate = useNavigate()

  const { name, company, email, telephone, notes, id } = customer

  return (
    <tr className='border-b hover:bg-blue-50'>
      <td className='p-3'>{name}</td>
      <td className='p-3'>
        <p>
          <span className='text-gray-800 uppercase font-bold mr-1'>Email:</span>
          {email}
        </p>
        <p>
          <span className='text-gray-800 uppercase font-bold mr-1'>Tel:</span>
          {telephone}
        </p>
      </td>
      <td className='p-3'>{company}</td>

      <td className='p-3'>
        <button
          className='bg-green-500 hover:bg-green-700 block w-full text-white p-1 uppercase font-bold text-xs'
          type='button'
          onClick={() => navigate(`/customers/${id}`)}
        >
          View
        </button>

        <button
          className='bg-blue-500 hover:bg-blue-700 block w-full text-white p-1 uppercase font-bold text-xs mt-1'
          type='button'
          onClick={() => navigate(`/customers/edit/${id}`)}
        >
          Edit
        </button>

        <button
          className='bg-red-500 hover:bg-red-700 block w-full text-white p-1 uppercase font-bold text-xs mt-1'
          type='button'
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  )
}

export default Customer
