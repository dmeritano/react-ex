import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import useNews from '../hooks/useNews'
import News from './News'
import { generateUniqueId } from "../data"

const NewsList = () => {

    const { newsList, totalNews, handleChangePage, actualPage } = useNews()

    const totalPages = Math.ceil(totalNews / Number(import.meta.env.VITE_NEWS_PER_PAGE))

    return (
        <>
            <Typography
                textAlign="center"
                marginY={5}
                component="h3"
                variant="h4"
            >
                Last news
            </Typography>

            <Grid container spacing={2}>
                {newsList.map( news => (
                    <News key={generateUniqueId()} news={news}/>
                ))}

            </Grid>    

            <Stack
                sx={{marginY:5}}
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Pagination 
                    count={totalPages} 
                    color="grey" 
                    onChange={handleChangePage}
                    page={actualPage}
                />
                    
            </Stack>    
        </>
    )
}

export default NewsList