import {useState} from 'react'
import styled from '@emotion/styled'


const Label = styled.label`
    color:#FFF;
    display:block;
    font-family: 'Roboto Slab', serif;
    font-size:24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size:18px;
    font-weight: 700;
    padding:12px;
    border-radius: 10px;    
`

const useSelectCurrencies = (label, options) => {
    
    const [state, setState] = useState('')

    const SelectCurrency = () => (
        <>
            <Label>
                {label}
            </Label>

            <Select
                value={state}
                onChange={ evt => setState(evt.target.value)}
            >
                <option value="">Select</option>
                {options.map( o => (
                    <option 
                        key={o.id}
                        value={o.id}                        
                    >{o.name}</option>
                ) )}
            </Select>

        </>
    )

    return [ state, SelectCurrency ]
}

export default useSelectCurrencies