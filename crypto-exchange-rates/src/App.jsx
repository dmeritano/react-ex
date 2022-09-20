import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import IconMain from './img/img-cryptos.png'
import Form from './components/Form'
import Spinner from './components/Spinner'
import ConversionResult from './components/ConversionResult'

//backticks =>linux => AltGr + ç  (c cedilla)  (dos veces, mete los dos backtigs)

function App() {

  const [selectedCurrencies, setSelectedCurriencies] = useState({})
  const [conversionResult, setConversionResult] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect( ()=>{
    if (Object.keys(selectedCurrencies).length >0){

      const getCryptoPrice = async () => {
        setLoading(true)
        setConversionResult({})
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${selectedCurrencies.cryptoCurrency}&tsyms=${selectedCurrencies.currency}`
        const response = await fetch(url)
        const result = await response.json()
        setConversionResult(result.DISPLAY[selectedCurrencies.cryptoCurrency][selectedCurrencies.currency])
        setLoading(false)
      }
      getCryptoPrice()      
    }
  }, [selectedCurrencies])

  const MainContainer = styled.div`
    max-width: 900px;
    margin: 0 auto;
    width: 90%;
    @media (min-width: 992px){
      display: grid;
      grid-template-columns: repeat(2, 1fr) ;
      column-gap: 2rem;
    }
  `
  
  const Image = styled.img`
    max-width: 400px;
    width: 80%;
    margin: 100px auto 0 auto;
    display: block;
  `
  const Heading = styled.h1`
    font-family: 'Roboto Slab', serif;
    color:#FFF;
    text-align: center;
    font-weight: 700;
    margin-top: 95px;
    margin-bottom: 50px;
    font-size: 40px;
    &&::after{
      content: '';
      width: 200px;
      height: 6px;
      background-color: #079459;
      display: block;
      margin: 10px auto 0 auto;
    }
  `
  return (
    <MainContainer>
      <Image 
        src={IconMain} alt="Crytocurrencies image"
      />
      
      <div>
        <Heading>Instantly check cryptocurrency value </Heading>

        <Form 
          setSelectedCurriencies={setSelectedCurriencies}
        />

        {loading && <Spinner />}
        {conversionResult.PRICE && 
          <ConversionResult 
            conversionResult={conversionResult} 
            selectedCurrencies={selectedCurrencies}
          />
        }

      </div>
      
    
    </MainContainer>
  )
}

export default App
