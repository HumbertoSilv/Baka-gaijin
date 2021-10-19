import Product from '../Product';


const MenuContainer = ({products, filteredProducts, handleClick}) => {
    return(
        <>
            <Product products={products} filteredProducts={filteredProducts} handleClick={handleClick}/>
        </>
    );
}
export default MenuContainer;