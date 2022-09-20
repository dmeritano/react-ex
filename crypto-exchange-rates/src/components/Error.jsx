import styled from '@emotion/styled'

const ErrorText = styled.div`
    background-color: #ee5c5c;
    color: #FFF;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Roboto Slab', serif;
    font-weight: 700;
    text-align: center;
`

const Error = ( {children} ) => {
  return (
    <ErrorText>
        {children}
    </ErrorText>
  )
}

export default Error