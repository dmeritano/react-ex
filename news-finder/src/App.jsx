import { Container, Grid, Typography } from "@mui/material"
import SearchForm from "./components/SearchForm"
import NewsList from "./components/NewsList"
import { NewsProvider } from "./context/NewsProvider"

function App() {
  
  return (
    <NewsProvider>
      <Container>
        <header>
          <Typography align='center' marginTop={5} component='h1' variant='h3'>
            News Finder
          </Typography>
          <Typography align='center' paddingLeft={14} color='#8793B4'>
            Powered by NewsAPI
          </Typography>
        </header>

        <Grid
          container
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item md={6} sm={12} marginTop={4}>
            <SearchForm />
          </Grid>
        </Grid>

        <NewsList />
        
      </Container>
    </NewsProvider>
  )
}

export default App
