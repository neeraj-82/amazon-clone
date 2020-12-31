import React, { useEffect, useState } from 'react'
import './HOme.css';
import Product from './Product';
import Data, { pro } from './Data.js';
import { useStateValue } from './StateProvider';

function Home() {
    const [{ searchlist }, dispatch] = useStateValue();
    const [search_pro, set_search_pro] = useState([]);
    // const [search_pro_two, set_search_pro_two] = useState([]);
    console.log(searchlist);

    useEffect(() => {

        const Search_item = Data.filter((product) => {
            return ((product.title.toUpperCase())).includes(searchlist.toUpperCase());
        })
        set_search_pro(Search_item);

        // const Search_item_two = pro.filter((product) => {
        //     return ((product.title.toUpperCase())).includes(searchlist.toUpperCase());
        // })
        // set_search_pro_two(Search_item_two);

    }, [searchlist]);


    // console.log(search_pro);
    return (
        <>
            
            
         
                <div className="home">

                    {!searchlist? <img
                        className="home__image"
                        src='https://m.media-amazon.com/images/G/31/AmazonVideo/2019/1102620_MLP_1440x675_apv189_V3._SY1200_FMJPG_.jpg'
                        alt="err"
                    />:null}
                    <div className="home__rowOne">
                        {
                           searchlist? 
                            search_pro.map((data)=>{
                            return <Product key={data.id} id={data.id} title={data.title} image={data.image} price={data.price} rating={data.rating} />
                              
                           }):
                                Data.map((data) => {
                                    return <Product key={data.id} id={data.id} title={data.title} image={data.image} price={data.price} rating={data.rating} />
                                })
                        }
                    </div>
                 { <img
                        className="home__add"
                        src="https://rukminim1.flixcart.com/flap/1800/1800/image/8dc8ec2644e9a2ca.jpg?q=50"
                        alt="err"
                    />}
                    <div className="home__rowOne">
                        {
                            
                                pro.map((data) => {
                                    return <Product key={data.id} id={data.id} title={data.title} count={data.count} image={data.image} price={data.price} rating={data.rating} />
                                })
                        }
                    </div>

                </div>

                {search_pro.length?null:
                 <div className='home__notFound'>
                   
                     <h1>:not found</h1>
                 </div> 
                }
            


        </>
    )
}

export default Home
