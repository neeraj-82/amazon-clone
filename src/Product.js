import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';


function Product({ id, title, price, image, rating }) {

    // const [{basket,user}, dispatch] = useStateValue();

    const Add_Basket = () => {

        if(user)
        {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    
                    id: id,
                    title: title,
                    price: price,
                    image: image,
                    rating: rating,
                }
            })
        }
        else{
            alert('please! Sign In or Create account')
        }
       

    }
  

    return (
        
        <div className='product'>
           
            <div className="product__info">
                <p>{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_,index) => {
                                return <p key={index}>⭐</p>
                            })
                    }
                </div>
            </div>

            <img className="product__image" src={image} alt="" />
            <button onClick={Add_Basket}>Add to basket</button>
             {
                 id?null:<h1>not found</h1>
             }
        </div>
      
    )
}

export default Product
