import React from 'react'

const ImageCard = (props) => {
  return (
    <div className='img-card'>
      <div className="img-card__overlay"></div>
      <div className="img-card__like"><i class="fa-solid fa-heart"></i></div>
      <div className="img-card__collection"><i class="fa-solid fa-plus"></i></div>
      <img src={props.imgUrl} className='img-card__img'></img>
      <a href={props.nameUrl} className='img-card__name'>{props.name}</a>
      <a className='img-card__likes'>{props.likes}</a>
    </div>
  )
}

export default ImageCard