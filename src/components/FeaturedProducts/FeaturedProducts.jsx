import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/12753393/pexels-photo-12753393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/10040967/pexels-photo-10040967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice: 19,
            price:12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/12753393/pexels-photo-12753393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/10040967/pexels-photo-10040967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Long Sleeve Graphic T-shirt",
            isNew:true,
            oldPrice: 19,
            price:12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/12753393/pexels-photo-12753393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/10040967/pexels-photo-10040967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Long Sleeve Graphic T-shirt",
            oldPrice: 19,
            price:12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/12753393/pexels-photo-12753393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/10040967/pexels-photo-10040967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Long Sleeve Graphic T-shirt",
            oldPrice: 19,
            price:12,
        },
    ]
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, dolores deserunt a vitae provident totam quos aperiam magni eaque aut? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias numquam reiciendis harum quis officia consequuntur pariatur repudiandae doloremque eligendi nulla.</p>
        </div>
        <div className="bottom">
            {data.map(item=>(
                <Card item={item} key={item.id} />
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts