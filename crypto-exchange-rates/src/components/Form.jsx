import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectCurrencies from '../hooks/useSelectCurrencies'
import { currenciesList } from '../data/currencies'
import { dynamicSort } from '../helpers'


const SubmitInput = styled.input`
  background-color: #079459;
  border: none;
  width: 100%;
  padding: 10px;
  color: #FFF;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 30px;
  transition: background-color .1s ease-in;
  &:hover {
    background-color: #057a53;
    cursor: pointer;
  }
`

const Form = ( {setSelectedCurriencies} ) => {
 
  const [cryptos, setCryptos] = useState([])
  const [error, setError] = useState(false)

  //Customs hooks
  const [ currency, SelectCurrency ] = useSelectCurrencies('Currency', currenciesList)
  const [ cryptoCurrency, SelectCryptoCurrency ] = useSelectCurrencies('Crypto', cryptos)

  useEffect(() => {
    console.log("Formulario montado")
    const queryAPi = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
        const response = await fetch(url)
        const result = await response.json()
        console.log("lst cryptos:",result)
        const arrayCryptos = result.Data.map( crypto => {
            const objeto = {
                id: crypto.CoinInfo.Name,
                name: crypto.CoinInfo.FullName
            }
            return objeto
        })

        setCryptos(arrayCryptos)
    }
    queryAPi();
  }, [])

  const handleSubmit = evt => {
    evt.preventDefault()

    if([currency, cryptoCurrency].includes('')) {
        setError(true)
        return
    }

    setError(false)

    setSelectedCurriencies({
        currency,
        cryptoCurrency
    })
  }

  return (
    <>
      {error && <Error>All options are required</Error>}

      <form 
        onSubmit={handleSubmit}
      >
          <SelectCurrency />
          <SelectCryptoCurrency />
          <SubmitInput
              type="submit"
              value="Convert!"
          />
      </form>
    </>
  )
}

export default Form