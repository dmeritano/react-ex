import React from 'react'
import ImageItem from './ImageItem'

const ImageList = ( { images }) => {
  return (
    <div className="col-12 p-5 row">
        {images.map( image => (
            <ImageItem key={image.id} image={image}/>
        ))}
    </div>
  )
}

export default ImageList