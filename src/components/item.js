import React from 'react'

const Item = props => (

    <div className="item">
      <div className="wrapper picture">
        <a href={props.image} target="_blank">
          <img src={props.image} />
        </a>
      </div>
      <div className="wrapper data">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <span className="condition badge">{props.condition}</span>
      </div>
      <div className="wrapper meta">
        <p className="price">{props.price}</p>
      </div>
      <div className="wrapper cta">
      {props.sold ? (
        <a className="button sold" href="/">Sold</a>
      ) : (
        <a className="button" href={"mailto:rafahari@gmail.com?subject=Hey%20Rafa%2C%20eu%20quero%20esse%20" + encodeURIComponent(props.title) + "%20por%20" + encodeURIComponent(props.price)}>Get it!</a>
      )}
      </div>
    </div>
)

export default Item
