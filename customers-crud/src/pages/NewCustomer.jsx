import FormCustomer from "../components/FormCustomer"
const NewCustomer = () => {
  return (
    <>
      <h1 className='font-black text-4xl text-gray-500'>New Customer</h1>
      <p className='mt-3 text-gray-400'>Creating new entry</p>
      <FormCustomer />
    </>
  )
}

export default NewCustomer
