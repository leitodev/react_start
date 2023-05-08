import logo from '../logo.svg';
import './Header.css'
import { useState } from 'react';

const imgStyle = {
    height: '50px',
};

const Header = () => {
    return (
    <header>
        <img src={logo} alt='logo' style={imgStyle} />
        <nav className="menu">
            <ul>
                <li>Main</li>
                <li>Form</li>
                <li>Components</li>
                <li>Contact</li>
            </ul>
        </nav>
    </header>
    )
}

const Button1 = () => {

    const productsList = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
        { title: 'Apple2', id: 4 },
      ];

      const listItems = prepareList(productsList);


    function prepareList(arr) {
        return arr.map(product =>
            <li key={product.id}>
                {product.title}
            </li>
            );
    }

    const [products, setProducts] = useState(listItems);

    function handleClick(event) {

        console.log('event', event)
        
        setProducts(prepareList([...productsList, { title: 'new item' , id: 5 }]));
    }
    
    return (
        <div>
            <button type="button" onClick={handleClick} data="12334">add new item to array</button>

            <ul>{products}</ul>
        </div>
    )
}


export default Header;
export {Button1};
