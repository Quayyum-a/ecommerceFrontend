import React from "react";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      img2: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Premium Wireless Headphones",
      isNew: true,
      oldPrice: 299,
      price: 199,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/12753393/pexels-photo-12753393.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      img2: "https://images.pexels.com/photos/10040967/pexels-photo-10040967.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Designer Casual T-Shirt",
      isNew: true,
      oldPrice: 89,
      price: 59,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      img2: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Smart Home Assistant",
      oldPrice: 199,
      price: 149,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      img2: "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "Modern Coffee Maker",
      oldPrice: 159,
      price: 119,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Discover amazing products across all categories. From cutting-edge
          electronics to stylish fashion and everything in between. Quality
          guaranteed with exceptional customer service.
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
// atomic commit 22
// atomic commit 23
// atomic commit 24
// atomic commit 25
// atomic commit 26
// atomic commit 27
