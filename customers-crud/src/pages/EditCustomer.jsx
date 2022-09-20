import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FormCustomer from "../components/FormCustomer"

const EditCustomer = () => {
  const { id } = useParams()

  const [customer, setCustomer] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const url = `${import.meta.env.VITE_CUSTOMERS_API_URL}/${id}`
        const response = await fetch(url)
        const result = await response.json()

        setCustomer(result)
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCustomer()
  }, [])

  return (
    <>
      <h1 className='font-black text-4xl text-gray-500'>Customer Edition</h1>
      <p className='mt-3 text-gray-400'>Change data as you want</p>

      {customer?.name ? (
        <FormCustomer customer={customer} loading={loading} />
      ) : (
        !loading && (
          <p className='mt-10 font-bold text-red-800 text-2xl'>
          Invalid customer reference
        </p>
        )
      )}
    </>
  )
}

export default EditCustomer
