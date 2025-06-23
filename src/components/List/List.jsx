import React from 'react'
import Card from '../Card/Card'
import './List.scss'

const List = () => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Premium Wireless Headphones",
            isNew:true,
            oldPrice: 299,
            price:199,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/12753393/pexels-photo-12753393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/10040967/pexels-photo-10040967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Designer Casual T-Shirt",
            isNew:true,
            oldPrice: 89,
            price:59,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Smart Home Assistant",
            oldPrice: 199,
            price:149,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Modern Coffee Maker",
            oldPrice: 159,
            price:119,
        },
        {
            id: 5,
            img: "https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/1571462/pexels-photo-1571462.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Gaming Console Pro",
            isNew:true,
            oldPrice: 499,
            price:399,
        },
        {
            id: 6,
            img: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            img2: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
            title: "Fitness Smartwatch",
            oldPrice: 249,
            price:189,
        },
    ]

  return (
    <div className='list'>
        {data.map(item=>(
            <Card item={item} key={item.id} />
        ))}
    </div>
  )
}

export default List// atomic commit 78
// atomic commit 79
// atomic commit 80
