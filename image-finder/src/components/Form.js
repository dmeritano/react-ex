import { useState } from 'react'
import Error from './Error'

const Form = ( {setSearch} ) => {

    const [term, setTerm] = useState('')
    const [error, setError] = useState(false)

    const handleSearch = (evt) => {
        setError(false)
        if (term.trim().length < 2){
            setError(true)
            setTerm('')
            setTimeout(() => {
                setError(false)
            },2000)
        }else{
            evt.target.blur()
            setSearch(term.trim())
        }        
    }
    return (
        <div>
            <div className='row'>
                <div className='form-group col-md-9 mb-2'>
                    <input
                        type='text'
                        placeholder='e.g. cars  [Enter]'
                        className='form-control rounded-0 shadow-none border-top-0 border-start-0 border-end-0 border-bottom-1 search-box'
                        onChange={ (evt) => setTerm(evt.target.value)}
                        value={term} 
                        onKeyPress={(evt) => {
                            if (evt.key === "Enter") {
                                handleSearch(evt)
                            }
                        }}
                    />
                </div>
                <div className='form-group col-md-2'>
                    <button
                        className='btn btn-primary'
                        onClick={ (evt) => handleSearch(evt)}
                    >Search</button>                
                </div>

                {error && <Error>Enter at least 2 letters term</Error>}
            </div>
        </div>
    )
}

export default Form
