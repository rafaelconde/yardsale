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
        <a className="button" href="mailto:rafahari@gmail.com?cc=debora.marisa.ribeiro@gmail.com&amp;subject=Hey%20Rafa%2C%20I%20want%20that%20ITEM&amp;body=I%20would%20love%20to%20buy%20that%20ITEM%20off%20your%20hands!">Get it!</a>
      </div>
    </div>
)

export default Item
