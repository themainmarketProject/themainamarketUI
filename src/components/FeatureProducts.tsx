import React from "react";

https: interface Products {
  id: string;
  avatarUrl: string;
  name: string;
  price: number;
}

interface Prod {
  products: Products[];
}

const Featured = (props: Prod) => {
  const { products } = props;
  console.log(products);
  const content = products?.map((product) => {
    return (
      <div className="slick-slide2" key={product.id}>
        <h4>Sale</h4>
        <img className="slick-slide-image2" src={product.avatarUrl} alt="" />
        <p className="slick-slide-title">{product.name}</p>
        <p className="slick-slide-title">${product.price}</p>
      </div>
    );
  });
  return <div className="slider-wrapper2">{content}</div>;
};

export default Featured;
