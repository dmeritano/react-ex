
const Error = ( {errorMessage} ) => {
  return (
    <div className="bg-red-700 text-white text-center px-3 py-1 uppercase font-bold mb-3 rounded-sm">
        <p>{errorMessage}</p>
    </div>
  )
}

export default Error