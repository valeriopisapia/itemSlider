import React from 'react'

const Slide = ({item}) => {
  const styles = {
    backgroundImage: `url(${
      item.image ? item.image : `https://firebasestorage.googleapis.com/v0/b/snowit-37a6a.appspot.com/o/${encodeURIComponent(item.cover)}?alt=media`
    })`
  }
  return (
    <div className="slider">
      <div className="slider__content">
        <div className="slider__img" style={styles} />
        <div className="item-slider__slide-info">
          {item.price && <div className="item-slider__slide-price">€ {item.price}</div>}
          {item.description && <div className="item-slider__slide-descr">{item.description}</div>}
        </div>
      </div>
      <div className="item-slider__slide-title">{item.name}</div>
    </div>
  )
}

export default Slide
