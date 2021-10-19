import './style.css'


const Product = ({products, filteredProducts, handleClick}) => {
    console.log(filteredProducts)
    return(
        <>
        {filteredProducts.length === 0?
            products.map((cur) => (
            <div className="box" >
            <h1>{cur.name}</h1>
            <p>Category: {cur.category}</p>
            <p>Price: {cur.price}$</p>
            <button onClick={() => handleClick(cur)} >add</button>
            </div>
                )
            )
            :  
            filteredProducts.map((cur) => (
            <div className="box" >
            <h1>{cur.name}</h1>
            <p>Category: {cur.category}</p>
            <p>Price: {cur.price}$</p>
            <button onClick={() => handleClick(cur)} >add</button>
            </div>
                )
            )
        }
        </>
    );
}
export default Product;