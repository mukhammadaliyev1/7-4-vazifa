import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { http } from "../../axios";

function Details() {
  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    http
      .get(`products/${id}`)
      .then((data) => {
        if (data.status === 200) {
          setProduct(data.data.data);
          setColor(data.data.data.attributes.colors[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params]);

  return (
    <div>
      {product.id && (
        <>
          <div className="wrapper">
            <img src={product.attributes.image} width={400} alt="" />
            <h3>{product.attributes.title}</h3>
            <h3>{product.attributes.price}</h3>
          </div>
        </>
      )}
      
      <div>
        {product.attributes?.colors?.length > 0 &&
          product.attributes.colors.map((color) => {
            return (
              <span className="block w-3 h-3 rounded-full bg-blue-400"></span>
            );
          })}
      </div>


    </div>
  );
}

export default Details;
