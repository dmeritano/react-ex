import React from "react"
import { useState, useEffect } from "react"
import Form from "./components/Form"
import ImageList from "./components/ImageList"
import Error from "./components/Error"

function App() {
  const [search, setSearch] = useState("")
  const [images, setImages] = useState([])
  const [actualPage, setActualPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [error, setError] = useState(false)

  useEffect(() => {
    const queryApi = async () => {
      if (search === "") return

      const { REACT_APP_PIXABAY_BASE_URL, REACT_APP_PIXABAY_API_KEY } = process.env

      setImages([])
      const imagesPerPage = 30
      
      const url = `${REACT_APP_PIXABAY_BASE_URL}?key=${REACT_APP_PIXABAY_API_KEY}&q=${search}&per_page=${imagesPerPage}&page=${actualPage}`

      try {
        const response = await fetch(url)
        if (response.ok) {
          const result = await response.json()
          //Total pages
          setTotalPages(Math.ceil(result.totalHits / imagesPerPage))
          setImages(result.hits)
          console.log(result.hits)
        } else {
          setError(true)
        }
      } catch (error) {
        setError(true)
        console.log(error)
      }

      setError(false)
    }
    queryApi()
  }, [search, actualPage])

  const prevPage = () => {
    const newActualPage = actualPage - 1 === 0 ? 1 : actualPage - 1
    console.log(newActualPage)
    setActualPage(newActualPage)
  }

  const nextPage = () => {
    const newNextPage =
      actualPage + 1 > totalPages ? totalPages : actualPage + 1
    console.log(newNextPage)
    setActualPage(newNextPage)
  }

  return (
    <>
      <div className='container'>
        <h1 className='display-5'>Image Finder</h1>
        <small className='lead text-muted fs-6'>Powered by Pixabay API</small>

        <hr className='mb-5' />

        <Form setSearch={setSearch} />

        {error && (
          <div className='text-danger mt-3'>
            <Error>An error occurred while performing the search</Error>
          </div>
        )}

        <div className='row justify-content-center'>
          <ImageList images={images} />
        </div>

        <div className='row justify-content-center mb-5 pb-5'>
          <button
            type='button'
            className='btn btn-info me-2 py-1 w-25'
            onClick={prevPage}
            disabled={actualPage === 1}
          >
            &laquo; Previous
          </button>

          <button
            type='button'
            className='btn btn-info py-1 w-25'
            onClick={nextPage}
            disabled={actualPage === totalPages}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </>
  )
}

export default App
