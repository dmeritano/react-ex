import { useState, useEffect } from "react"
import Customer from "../components/Customer"
const Home = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    const getCustomers = async () => {
      try {
        const url = import.meta.env.VITE_CUSTOMERS_API_URL
        const response = await fetch(url)
        const result = await response.json()
        setCustomers(result)
      } catch (error) {
        console.log(error)
      }
    }
    getCustomers()
  }, [])

  const handleDelete = async (id) => {
    const ask = confirm("Do you really want to remove this customer?")
    if (ask) {
      try {
        const url = `${import.meta.env.VITE_CUSTOMERS_API_URL}/${id}`
        const response = await fetch(url, {
          method: "DELETE",
        })
        await response.json()

        const arrayCustomers = customers.filter((c) => c.id !== id)
        setCustomers(arrayCustomers)
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <>
      <h1 className='font-black text-4xl text-gray-500'>Customers List</h1>
      <p className='mt-3 text-gray-400'>Manage your clients</p>

      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='bg-gray-500 text-white'>
          <tr>
            <th className='p-2'>Name</th>
            <th className='p-2'>Contact</th>
            <th className='p-2'>Company</th>
            <th className='p-2'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <Customer
              key={customer.id}
              customer={customer}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Home
