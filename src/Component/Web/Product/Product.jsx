import React, { useContext } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { useQuery } from "react-query";
import { CartContext } from "../Context/Cart";

export default function Product() {
  const navigat = useNavigate();
  const { ProductID } = useParams();
  const {addToCartContext} = useContext(CartContext);

  const getProduct = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/products/${ProductID}`
    );
    return data.product;
  };
  const { data, isLoding } = useQuery("product", getProduct);

  const addToCart = async (ProductID)=>{
    const result = await addToCartContext(ProductID);
    console.log(result);
    navigat('/cart');
    
  }
  if (isLoding) {
    return <p>loading....</p>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            {data?.subImages?.map((image, index) => (
              <React.Fragment key={index}>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Wristwatch by Ted Baker London",
                      isFluidWidth: true,
                      src: image.secure_url,
                    },
                    largeImage: {
                      src: image.secure_url,
                      width: 1200,
                      height: 1800,
                    },
                    isHintEnabled:true
                  }}
                />
              </React.Fragment>
            ))}
          </div>
          <div className="col-lg-8">
            <h2>{data?.name}</h2>
            <p>{data?.price}</p>
            <button className="btn btn-outline-info" onClick={()=>addToCart(data._id)}>Add To Cart</button>
            
          </div>
        </div>
      </div>
    </>
  );
}


