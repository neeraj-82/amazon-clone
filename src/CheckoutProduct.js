import React  from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    // onty of product
    const len = basket.filter((item) => {
        return item.id === id;
    })

    // remove product 
    const removeProduct = () => {

        const currentBasket = basket.filter((item) => {
            return item.id !== id;
        })

        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: currentBasket,
        })
    }

    // add qnty of product
    const addQnty = () => {
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
    //reduce the qnty of product
    const removeOneProduct = () => {

        for (let i = 0; i < basket.length; i++) {
            if (basket[i].id === id) {
                basket.splice(i, 1);
                break;
            }
        }
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item: basket,
        })


    }
    return (
        <div className="checkoutProduct">
            <img
                className="checkoutProduct__image"
                src={image}
                alt=""
            />
            <div className="chekcoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_,index) => {
                                return <p key={index}>⭐</p>
                            })
                    }
                </div>
                {/* // increment decrement the qnty of product */}
                <div className="checkoutProduct__quantity">
                    <h4 className="checkoutProduct__len"><small>Qnty:</small><strong>{len.length} </strong></h4>
                    <AddIcon
                        className="checkoutProduct__inc"
                        onClick={addQnty}
                    />
                    <RemoveIcon
                        className="checkoutProduct__dec"
                        onClick={removeOneProduct}
                    />
                </div>



                <button
                    className="checkoutProduct__button"
                    onClick={removeProduct}>
                    Remove from  basket
                </button>
            </div>

        </div>
    )
}

export default CheckoutProduct
