import React from 'react'
import Like from './Like'

const ImageCard = (props) => {
  return (
    <div className="img-card">
      <div className="img-card__overlay"></div>
      <Like isLiked={props.isLiked} />
      <div className="img-card__collection"><i className="fa-solid fa-plus"></i></div>
      <img src={props.imgUrl} className="img-card__img"></img>
      <img src={props.profilePicUrl} className="img-card__profile-pic"></img>
      <a href={props.profileUrl} className="img-card__name">{props.name}</a>
      <a className="img-card__likes">{props.likes}</a>
    </div>
  )
}

export default ImageCard