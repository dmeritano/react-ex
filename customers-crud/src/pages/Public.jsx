import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Public = () => {

  const navigate = useNavigate()

  useEffect( () => {
    navigate('/customers')
  }, [])

  return (
   <></>
  )
}

export default Public
