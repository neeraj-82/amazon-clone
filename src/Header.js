import React, { useState, useEffect } from 'react'
import './Header.css';
import { Link } from 'react-router-dom';
import Productlistfirst, { productlistsecond } from './Data.js';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
function Header() {

    const [{ basket, user, search }, dispatch] = useStateValue();
    // const[search,set_search]=useState('');

    const Signout = () => {
        if (user) {
            auth.signOut();
        }
    }

    const [search_pro, set_search_pro] = useState([]);
    const [search_pro_two, set_search_pro_two] = useState([]);
    const [list, setlist] = useState('');

    // find the item in products list
    useEffect(() => {

        const Search_item = Productlistfirst.filter((product) => {
            return ((product.title.toUpperCase())).includes(search.toUpperCase());
        })
        set_search_pro(Search_item);

        const Search_item_two = productlistsecond.filter((product) => {
            return ((product.title.toUpperCase())).includes(search.toUpperCase());
        })
        set_search_pro_two(Search_item_two);

    }, [search]);

    const Addinsearchlist = () => {
        dispatch({
            type: 'SEARCH_ITEM',
            item: '',
            searchlist: list,
        })
        setlist('');
    }

    const findProduct = (e) => {
        setlist(e.target.innerText);
        dispatch({
            type: 'SEARCH_ITEM',
            item: '',
            searchlist: e.target.innerText
        })
    }

    return (
        <nav className="header">
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://clipartcraft.com/images/amazon-smile-logo-transparent-background-7.png"
                    alt="err"
                />
            </Link>
            <div className="header__search">
                <div className="header__input">
                    <input
                        type="text"
                        value={list}
                        className="header__searchInput"
                        placeholder='Search....'
                        onChange={(e) => {
                            setlist(e.target.value);
                            dispatch({
                                type: 'SEARCH_ITEM',
                                item: e.target.value,
                                searchlist: '',
                            })
                        }}
                    />
                                    {/* when user click on search icon it add in searchlist */}
                    <SearchIcon className='header__searchIcon' onClick={Addinsearchlist} />
                </div>

                            {/* searching list is created when user type in search box*/}
                {search ? <div className='header__searchList'>
                    <ul>
                           
                        {
                            search_pro.length ?

                                search_pro.map((item) => {
                                    return <li onClick={findProduct}>{item.title}</li>
                                }) : <li>not found</li>}
                        {
                            search_pro_two ?
                                search_pro_two.map((item) => {
                                    return <li onClick={findProduct}>{item.title}</li>
                                }) : <li>not found</li>}
                    </ul>

                </div> : null}

            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={Signout} className="header__option">
                        <span className="header__optionLineOne">Hello {user ? user.displayName : 'Guest'}</span>
                        <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span >
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne">Returns</span>
                        <span className="header__optionLineTwo">& Orders</span>
                    </div>
                </Link>
                <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optionLineOne" >Your</span>
                        <span className="header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">

                        <  ShoppingBasketIcon onClick={() => {
                            dispatch({
                                type: 'SEARCH_ITEM',
                                item: '',
                                searchlist: ''

                            })
                        }} />
                        <span className="header__optionLineTwo  header__basketCount">{basket.length}</span>
                    </div>
                </Link>
            </div>









            {/* {basket icon} */}
        </nav>
    )
}

export default Header
