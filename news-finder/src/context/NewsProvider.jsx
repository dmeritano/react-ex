import axios from 'axios'
import { useState, useEffect, createContext } from 'react'

const NewsContext = createContext()

const NewsProvider = ( {children} ) => {

    const [category, setCategory] = useState('general')
    const [newsList, setNewsList] = useState([])
    const [actualPage, setActualPage] =  useState(1)
    const [totalNews, setTotalNews] = useState(0)

    const handleChangeCategory = e => {
        setCategory(e.target.value)        
    }

    const handleChangePage = (evt, value) => {
         //Pagination component pass value clicked as second parameter
         setActualPage(value)
    }

    useEffect( () => {
        const queryApi = async () => {
            let url = import.meta.env.VITE_API_URL
            url += `/top-headlines?country=us&category=${category}`
            url += `&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios.get(url)            
            if (data?.articles?.length > 0){
                setNewsList(data.articles)
                setTotalNews(data.totalResults)
                setActualPage(1)
            }else{
                console.log("no hay noticias")
            }            
        }
        queryApi()
    },[category])


    useEffect( () => {
        const queryApi = async () => {
            let url = import.meta.env.VITE_API_URL
            url += `/top-headlines?country=us&page=${actualPage}&category=${category}`
            url += `&apiKey=${import.meta.env.VITE_API_KEY}`

            const {data} = await axios.get(url)            
            if (data?.articles?.length > 0){
                setNewsList(data.articles)
                setTotalNews(data.totalResults)
            }else{
                console.log("no hay noticias")
            }            
        }
        queryApi()
    },[actualPage])

    return (
        <NewsContext.Provider
            value={{
                category,
                handleChangeCategory,
                newsList,
                totalNews,
                handleChangePage,
                actualPage
            }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider    
}

export default NewsContext