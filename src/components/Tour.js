import React from "react"
import { useState } from "react"

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  //creates the read more effect
  const readMoreEffect = () => {
    return (
      <>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "show less" : " read more"}
        </button>
      </>
    )
  }

  return (
    <div className="single-tour">
      <img src={image} alt="image" />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMoreEffect()}</p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </div>
  )
}

export default Tour
