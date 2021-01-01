import React, { useEffect, useState } from 'react'
import './HOme.css';
import Product from './Product';
import Productlistfirst, { productlistsecond } from './Data.js';
import { useStateValue } from './StateProvider';

function Home() {
    const [{ searchlist }, dispatch] = useStateValue();
    const [search_productfirst, set_search_productfirst] = useState([]);
    const [search_producttwo, set_search_producttwo] = useState([]);
    // console.log(searchlist);



    // whenever the searchlist is change it found the product in product lists
    useEffect(() => {

        const Search_item = Productlistfirst.filter((product) => {
            return ((product.title.toUpperCase())).includes(searchlist.toUpperCase());
        })
        set_search_productfirst(Search_item);

        const Search_item_two = productlistsecond.filter((product) => {
            return ((product.title.toUpperCase())).includes(searchlist.toUpperCase());
        })
        set_search_producttwo(Search_item_two);

    }, [searchlist]);



    return (
        <>



            <div className="home">

                {!searchlist ? <img
                    className="home__image"
                    src='https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg'
                    alt="err"
                /> : null}
                <div className="home__rowOne">
                    {
                        searchlist ?
                            search_productfirst.map((data) => {
                                return <Product key={data.id} id={data.id} title={data.title} image={data.image} price={data.price} rating={data.rating} />

                            }) :
                            Productlistfirst.map((data) => {
                                return <Product key={data.id} id={data.id} title={data.title} image={data.image} price={data.price} rating={data.rating} />
                            })
                    }
                </div>
                {searchlist ? null : <img
                    className="home__add"
                    src="https://rukminim1.flixcart.com/flap/1800/1800/image/8dc8ec2644e9a2ca.jpg?q=50"
                    alt="err"
                />}
                <div className="home__rowOne">
                    {
                        searchlist ?
                            search_producttwo.map((data) => {
                                return <Product key={data.id} id={data.id} title={data.title} image={data.image} price={data.price} rating={data.rating} />

                            }) :
                            productlistsecond.map((data) => {
                                return <Product key={data.id} id={data.id} title={data.title} count={data.count} image={data.image} price={data.price} rating={data.rating} />
                            })
                    }
                </div>

            </div>

            {/* if product not found */}
            {search_productfirst.length || search_producttwo.length ? null :
                <div className='home__notFound'>

                    <h1>:not found</h1>
                </div>
            }



        </>
    )
}

export default Home
