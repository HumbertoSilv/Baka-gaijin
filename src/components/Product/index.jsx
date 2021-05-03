import { Component } from "react";

class Product extends Component {
    render() {
        const {products, filteredProducts, currentSale} = this.props.state;
        return(
            <>
                {console.log(products, filteredProducts, currentSale)}
            </>
        );
    }
}

export default Product;