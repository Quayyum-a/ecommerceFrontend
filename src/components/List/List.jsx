import React from 'react'
import Card from '../Card/Card'
import './List.scss'

const List = () => {

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
        {
            id: 5,
            img: "https://images.pexels.com/photos/12753393/pexels-photo-12753393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/10040967/pexels-photo-10040967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Long Sleeve Graphic T-shirt",
            oldPrice: 19,
            price:12,
        },
        {
            id: 6,
            img: "https://images.pexels.com/photos/12753393/pexels-photo-12753393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/10040967/pexels-photo-10040967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Long Sleeve Graphic T-shirt",
            oldPrice: 19,
            price:12,
        },
        {
            id: 7,
            img: "https://images.pexels.com/photos/12753393/pexels-photo-12753393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/10040967/pexels-photo-10040967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Long Sleeve Graphic T-shirt",
            oldPrice: 19,
            price:12,
        },
        {
            id: 8,
            img: "https://images.pexels.com/photos/12753393/pexels-photo-12753393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/10040967/pexels-photo-10040967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Long Sleeve Graphic T-shirt",
            oldPrice: 19,
            price:12,
        },
        {
            id: 9,
            img: "https://images.pexels.com/photos/12753393/pexels-photo-12753393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/10040967/pexels-photo-10040967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Long Sleeve Graphic T-shirt",
            oldPrice: 19,
            price:12,
        },
    ]
 
  return (
    <div className='list'>
        {data?.map(item=>(
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List