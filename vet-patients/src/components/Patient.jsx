function Patient( {patient, setPatient, deletePatient}) {

  /*
    To avoid having to use "patient.name, patient.email, etc" we make a destruuring of
    the patient object.
  */

  const { petName, owner, email, entryDate, id} = patient

  const handleDelete = () => {
      
      const response = confirm('Delete patient ' + petName + "?")
      if (response){
        deletePatient(id)
      }
      
  }

  return (

    <div className="ml-3 bg-white shadow-md rounded-sm pt-7 pb-5 px-5 mb-3">

        <p className="font-bold mb-3 text-gray-700 uppercase">Name: {''}
        <span className="font-normal normal-case">{petName}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Owner: {''}
        <span className="font-normal normal-case">{owner}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {''}
        <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold mb-3 text-gray-700 uppercase">Entry Date: {''}
        <span className="font-normal normal-case">{entryDate}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 border-2 border-blue-500 hover:border-blue-700 hover:shadow-md text-gray-700 font-bold uppercase rounded-sm"
            onClick={ () => setPatient(patient)}
          >Edit</button>
          
          <button
            type="button"
            className="py-2 px-10 border-2 border-red-500 hover:border-red-700 hover:shadow-md text-gray-700 font-bold uppercase rounded-sm"
            onClick={handleDelete}
          >Delete</button>

        </div>

    </div>
  )
}

export default Patient