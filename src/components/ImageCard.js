import React from 'react'

const ImageCard = (props) => {
  return (
    <div className='img-card'>
      <img src={props.imgUrl} className='img-card__img'></img>
      <a href={props.nameUrl} className='img-card__name'>{props.name}</a>
      <a className='img-card__likes'>{props.likes}</a>
    </div>
  )
}

export default ImageCard