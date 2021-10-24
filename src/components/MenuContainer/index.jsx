import Drinks from '../Drinks';
import Food from '../Food';
import "./styles.css"


const MenuContainer = ({products, handleClick, category}) => {
    return(
        <div className="menu">
            {category === "drink" ?
                <Drinks products={products} handleClick={handleClick}/>
                :
                <Food products={products} handleClick={handleClick}/>

            }
        </div>
    );
}
export default MenuContainer;