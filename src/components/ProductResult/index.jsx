import './style.css'


const ProductResult = ({filteredProducts, handleClick}) => {
    console.log(filteredProducts)
    return(
        <>
        <div className="box-result text" >
        <div className={`${filteredProducts.category}-img`}>
            <img src={filteredProducts.img} alt={filteredProducts.name} />
        </div>
            <h1>{filteredProducts.name}</h1>
            <p>{filteredProducts.description}</p>
            <button onClick={() => handleClick(filteredProducts)} >Adicionar R$ {filteredProducts.price}</button>
        </div>
        </>
    );
}
export default ProductResult;
