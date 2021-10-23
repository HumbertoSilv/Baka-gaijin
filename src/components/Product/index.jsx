import './style.css'


const Product = ({products, filteredProducts, handleClick}) => {
    return(
        <>
        {
            products.map((cur) => (
            <div className="box text" >
            <div className="product-img">
                <img src={cur.img} alt={cur.name} />
            </div>
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