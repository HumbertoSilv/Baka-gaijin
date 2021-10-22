import './style.css'


const Product = ({products, filteredProducts, handleClick}) => {
    return(
        <>
        {filteredProducts.length === 0?
            products.map((cur) => (
            <div className="box" >
            <img src={cur.img} alt={cur.name} />
            <div className="text">
                <h1>{cur.name}</h1>
                <p>{cur.description}</p>
                <button onClick={() => handleClick(cur)} >Adicionar R$ {cur.price}</button>
            </div>
            </div>
                )
            )
            :  
            filteredProducts.map((cur) => (
            <div className="box" >
            <img src={cur.img} alt={cur.name} />
            <h1>{cur.name}</h1>
            <p>{cur.description}</p>
            <button onClick={() => handleClick(cur)} >Adicionar R$ {cur.price}</button>
            </div>
                )
            )
        }
        </>
    );
}
export default Product;