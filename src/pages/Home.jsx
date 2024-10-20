import React, { useEffect, useState } from 'react'
import { http } from '../../axios';
import { useNavigate } from 'react-router-dom';
function Home() {
  const [products , setProducts]= useState([])
  useEffect(() => {
    http.get(`products?featured=true`)
      .then(data => {
        if (data.status === 200) {
          setProducts(data.data.data);
          
          // Tokenni saqlash
          const token = data.data.token;  // Token API javobidan kelsa
          if (token) {
            localStorage.setItem('authToken', token); // Tokenni localStorage ga saqlaymiz
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  

const navigate=useNavigate()
  function handleRedirect (id){
    navigate(`/products/${id}`)
  } 
  return (
    <div>

<div>
  <h1>We are changing the way people shop</h1>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.

</p>
<button className='btn btn-active btn-primary text-white'>Our Products</button>

</div>

<div className="carousel carousel-center rounded-box w-1/4 p-2 bg-slate-600">
  <div className="carousel-item w-96 h-96 rounded-md px-4">
    <img className='rounded-md' src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp" alt="Pizza" />
  </div>
  <div className="carousel-item w-96 h-96 rounded-md px-4">
    <img className='rounded-md'
      src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
      alt="Pizza"
     
      />
  </div>
  <div className="carousel-item w-96 h-96 rounded-md px-4 ">
    <img className='rounded-md'
      src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp"
      alt="Pizza" />
  </div>
  <div className="carousel-item w-72 h-96 rounded-md px-4 ">
    <img className='rounded-md'
      src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp"
      alt="Pizza" />
  </div>

</div>


{
  products.length > 0 && products.map(function (product) {
    return (
      <div key={product.id}> 
        <div className="card bg-white w-96 shadow-xl cursor-pointer" onClick={() => { handleRedirect(product.id) }}>
          <figure className="px-10 pt-10">
            <img
              src={product.attributes.image}
              alt="Shoes"
              className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl">{product.attributes.title}</h2>
          </div>
        </div>
      </div>
    );
  })
}

    </div>
  )
}

export default Home