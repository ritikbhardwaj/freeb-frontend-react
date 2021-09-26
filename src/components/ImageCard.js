import React from 'react'

class ImageCard extends React.Component {
  render () {
    return (
      <div className='img-card'>
        <img src={this.props.imgUrl} className='img-card__img'></img>
        <a href={this.props.nameUrl} className='img-card__name'>{this.props.name}</a>
        <a className='img-card__likes'>{this.props.likes}</a>
      </div>
    )
  }
}

export default ImageCard