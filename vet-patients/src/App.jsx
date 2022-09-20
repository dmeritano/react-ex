import {useState, useEffect} from 'react';
import Form from "./components/Form"
import Header from "./components/Header"
import PatientList from "./components/PatientList"


function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})


  useEffect( () => {    
    const getLocalStorage = () => {      
      const localStoragePatients = 
          JSON.parse(localStorage.getItem('patients')) ?? [];
      setPatients(localStoragePatients)
    }
    getLocalStorage()
  }, []) //Empty array => means useEffect runs only one time


  //Handle any change in "patients" array
  //  This hook also is fired when this component is ready
  //  In this case we update localstorage
  useEffect( () => {    
    localStorage.setItem('patients', JSON.stringify(patients))
  }, [patients])  //Monitoring changes in "patients" array

  const deletePatient = id => {
    //Using filter (not mute original object)
    const updatedPatients = patients.filter( p => p.id !== id )

    setPatients(updatedPatients)

  }

  return (
    <div className="container mx-auto mt-5">
      <Header />

      <div className="mt-12 md:flex">
        <Form
          patients={patients} 
          setPatients={setPatients}
          patient={patient}
          setPatient={setPatient}
        />
        <PatientList 
          patients={patients} 
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
      
    </div>
  )
}

export default App
