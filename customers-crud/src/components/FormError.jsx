const FormError = ({ message }) => {
  return (
    <div className='text-center mt-1 bg-red-600 text-white font-bold p3 uppercase'>
      {message}
    </div>
  )
}

export default FormError
