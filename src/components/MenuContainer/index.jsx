import Product from '../Product';
import "./styles.css"


const MenuContainer = ({products, filteredProducts, handleClick}) => {
    return(
        <div className="menu">
            <Product products={products} filteredProducts={filteredProducts} handleClick={handleClick}/>
        </div>
    );
}
export default MenuContainer;