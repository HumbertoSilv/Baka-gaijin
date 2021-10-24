import Drinks from '../Drinks';
import Product from '../Product';
import "./styles.css"


const MenuContainer = ({products, handleClick, category}) => {
    return(
        <div className="menu">
            {category === "drink" ?
                <Drinks products={products} handleClick={handleClick}/>
                :
                <Product products={products} handleClick={handleClick}/>

            }
        </div>
    );
}
export default MenuContainer;