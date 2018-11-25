import React from 'react'
import Item from '../components/item'
import dataSource from '../../itemsToSellData.json'

const IndexPage = () => (
  <div className="group-items">
    {dataSource.items.map(item => (
      <Item
        title={item.title}
        description={item.description}
        condition={item.condition}
        price={item.price}
        image={item.picture} />
    ))}
  </div>
)

export default IndexPage
