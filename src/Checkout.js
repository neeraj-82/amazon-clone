import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import {uniqWith,isEqual} from 'lodash';

function Checkout() {
   
    const[{basket}]=useStateValue();
   

   

    const uniqueProduct=  uniqWith(basket,isEqual);
   
    return (
      
        <div className="checkout">
            <div className="checkout__top">

           
                <img className="checkout__ad"src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_LPHero_PDNonPrime_v2_en_US.jpg" alt=""/>
                {basket?.length===0 ?(
                    <div >
                        <h2>your basket is empty</h2>
                    </div>
                ):
                <div className="checkout__list">
                   
                    {
                        uniqueProduct.map((item)=>{
                            return <CheckoutProduct
                               key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                rating={item.rating}
                                price={item.price}
                                count={item.count}
                            />
                        })
                    }
                 
                </div>
                }
            </div>
            {
                basket.length>0 && 
                <div className="checkout__down">
                    <Subtotal/>
                </div>
            }
        </div>
    )
}

export default Checkout
