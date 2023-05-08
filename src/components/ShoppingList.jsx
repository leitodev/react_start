

const ShoppingList = () => {

    const products = [
        { title: 'Cabbage', id: 1 },
        { title: 'Garlic', id: 2 },
        { title: 'Apple', id: 3 },
    ];

    const productsList = products.map(product =>
        <li key={product.id}>{product.title}</li>
    );

    console.log('productsList', productsList);

    return (
      <ul>
          {productsList}
      </ul>
    );
}

export default ShoppingList
