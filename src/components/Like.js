import React from 'react'

const Like = (props) => {
  let classes = 'fa-heart '
  if(props.isLiked) {
    classes += 'fa-solid'
  }else {
    classes += 'fa-regular'
  }
  return (
    <div className="img-card__like"><i className={classes}></i></div>
  )
}

export default Like