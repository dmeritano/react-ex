import styled from '@emotion/styled'


const ResultContainer = styled.div`
  color: #FFF;
  font-family: 'Roboto Slab', serif;
  display: flex;
  align-items: start;
  gap:1rem;
  margin-top: 20px;

`
const Text = styled.p`
  font-size: 18px;
  span{
    font-weight: 700;
  }  
`
const Price = styled.p`
  font-size: 24px;
  span{
    font-weight: 700;
  }
`
const CurrenciesTitle = styled.h3`
  margin-top: 30px;
  font-family: 'Roboto Slab', serif;
  color: #bab6f3;
`

const Image = styled.img`
  display: block;
  width: 100px;
`

const ConversionResult = ( {conversionResult, selectedCurrencies} ) => {

  const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL, LASTUPDATE} = conversionResult
  const {currency, cryptoCurrency} = selectedCurrencies


  return (
    <>
      <CurrenciesTitle>{`Conversion from ${currency} to ${cryptoCurrency}`}</CurrenciesTitle>
      <ResultContainer>      
        <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="crytpo image"/>
        <div>
          <Price>Price: <span>{PRICE}</span></Price>
          <Text>Highest day price: <span>{HIGHDAY}</span></Text>
          <Text>Lowest day price: <span>{LOWDAY}</span></Text>
          <Text>Last 24hs. variation: <span>{CHANGEPCT24HOUR}</span></Text>
          <Text>Last update: <span>{LASTUPDATE}</span></Text>
        </div>        
      </ResultContainer>
    </>
  )
}

export default ConversionResult