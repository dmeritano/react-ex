import {useState, useEffect} from 'react';
import Error from './Error';

function Form( {patients, setPatients, patient, setPatient} ) {

  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('')
  const [email, setEmail] = useState('')
  const [entryDate, setEntryDate] = useState('')
  const [symptoms, setSymtoms] = useState('')
  const [error, setError] = useState(false)


  useEffect( () => {
    if ( Object.keys(patient).length > 0){
      setPetName(patient.petName)
      setOwnerName(patient.ownerName)
      setEmail(patient.email)
      setEntryDate(patient.entryDate)
      setSymtoms(patient.symptoms)
    }
  }, [patient])
  

  const generateUniqueId = () => {
    const random = Math.random().toString(30).substring(2)
    const date = Date.now().toString(30) 
    return random + date
  }


  const handleSubmit = (evt) => {
    evt.preventDefault()
    
    //Dealing wiht simple form validations, using vanilla JS
    if ( [petName, ownerName, email, entryDate, symptoms].includes('') ) {
      //Conditions generated as array to gain access to arrays's 'includes' function
      setError(true)
      return;
    }
    
    setError(false)

    //Patient object
    const objPatient = {
      petName,
      ownerName,
      email,
      entryDate,
      symptoms
    }

    if (patient.id){
      /*We are editing*/
      objPatient.id=patient.id

      //Identify wich record we are editing
      const updatedPatients = patients.map ( patientState => 
          patientState.id === patient.id ? objPatient : patientState)

      setPatients(updatedPatients)

      setPatient({})

    }else{
      /* New Patient:
        Add new patient by getting a copy of the original and using an immutable method. 
        The idea is not to directly modify the original object, but to let react do it.
      */
      objPatient.id=generateUniqueId()
      setPatients([...patients, objPatient])
    }


    //Reset form fields (its states) through its setters.
    setPetName('')
    setOwnerName('')
    setEmail('')
    setEntryDate('')
    setSymtoms('')

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
    
        <h2 className="font-black text-3xl text-center">Patients</h2>
    
        <p className="text-lg mt-2 text-center mb-2">
          Administration - {''}
          <span className="text-blue-500 font-bold">Add / Edit</span>
        </p>

        <form className="bg-white shadow-md rounded-sm py-10 px-5 mb-10"
          onSubmit={handleSubmit}
        >
          { error && 
            <Error errorMessage="All fields are required"/> 
            /*
              Other alternative/pattern to pass data to a children component:

              <Error>
                <h1>Warning!</h1>
                <p>All fields are required</p>
              </Error>
              //We do not need specify property names.
              
              Then, in child component we could write something like this:

                const Error = ( {children} ) => {
                  return (
                    <div className="...">
                        {children}
                    </div>
                  )
                }
              "children" contains all data sent by father component
              
            */
          } 
          <div className="mb-5">
            <label htmlFor="pet" className="block text-gray-700 uppercase font-bold">
              Pet's Name
            </label>
            <input
              id="pet"
              type="text"
              placeholder="His/Her name"
              className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-sm"
              value={petName}
              onChange={ (evt) => setPetName(evt.target.value)} 
            />
          </div>

          <div className="mb-5">
            <label htmlFor="owner" className="block text-gray-700 uppercase font-bold">
              Owner's Name
            </label>
            <input
              id="owner"
              type="text"
              placeholder="Name and surname"
              className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-sm"
              value={ownerName}
              onChange={ (evt) => setOwnerName(evt.target.value)}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="e.g. johndoe@domain.com"
              className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-sm"
              value={email}
              onChange={ (evt) => setEmail(evt.target.value)}
            />
          </div>          

          <div className="mb-5">
            <label htmlFor="date" className="block text-gray-700 uppercase font-bold">
              Entry Date
            </label>
            <input
              id="date"
              type="date"
              className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-sm"
              value={entryDate}
              onChange={ (evt) => setEntryDate(evt.target.value)}
            />
          </div>   

          <div className="mb-5">
            <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
              Symptoms
            </label>
            <textarea 
              id="symptoms"
              className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-sm"
              placeholder="His / Her symptoms?"
              value={symptoms}
              onChange={ (evt) => setSymtoms(evt.target.value)}
            />
          </div>

          <input
            type="submit"
            className="bg-blue-500 w-full p-3 text-white uppercase font-bold hover:bg-blue-600 cursor-pointer transition-all"
            value={ patient.id ? 'update' : 'add patient'}
          />

        </form>
    
    </div>
  )
}

export default Form