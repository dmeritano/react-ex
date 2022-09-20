import Patient from "./Patient"

function PatientList( {patients, setPatient, deletePatient} ) {


  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll pr-2">

      { patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Directory</h2>
          <p className="text-lg mt-2 text-center mb-2">
          Administration - {''}
            <span className="text-blue-500 font-bold">Browse / Modify / Delete</span>
          </p>        
          { patients.map( patient => {
            return (
              <Patient
                key={patient.id} 
                patient={patient}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            )
            /* 'key={patient.id}' 
              The "key" variable/property does not need to be declared or received, or used in the "Patient" component.
            */
          })}
        </>
      ) : (
          <>
            <h2 className="font-black text-3xl text-center">There are no registered patients</h2>
            <p className="text-lg mt-2 text-center mb-2">
            Start adding new patients {''}
              <span className="text-blue-500 font-bold">and they will appear in this place</span>
            </p>             
          </>
        )
      }
    </div>
  )
}

export default PatientList