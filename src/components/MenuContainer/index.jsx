import { Component } from "react";
import Product from '../Product';

class MenuContainer extends Component {
    render() {
        //const {products, filteredProducts, currentSale} = this.props.state;
        return(
            <>
                <Product state={this.props.state}/>
            </>
        );
    }
}

export default MenuContainer;