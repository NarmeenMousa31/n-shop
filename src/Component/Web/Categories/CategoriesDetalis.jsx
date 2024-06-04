import React from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';

export default function CategoriesDetalis() { 
    
    const {CategoriesID} = useParams();
    const getCategoriesDetalis = async ()=>{
        const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/products/category/${CategoriesID}`);          
        return data.products; 

        }
    const {data,isLoding} = useQuery('Categories_details',getCategoriesDetalis);
    if(isLoding){
        return <p>loading....</p>
    } 

  return (
    <div className='products d-flex'>
        {data?data.map((product) =>
            <div className='product' key={product._id}>
                <img src={product.mainImage.secure_url} />
                <Link to={`/product/${product._id}`}> Details</Link>
            </div>
        ):<h2>No product</h2>}
    </div>
  )
}
