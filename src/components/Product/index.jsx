import { Component } from "react";
import './style.css'

class Product extends Component {
    render() {
        const {products, filteredProducts} = this.props.state;

        return(
            <>
                {filteredProducts.length === 0?
                    products.map((cur) => (
                    <div className="box" >
                    <h1>{cur.name}</h1>
                    <p>Category: {cur.category}</p>
                    <p>Price: {cur.price}$</p>
                    <button onClick={() => this.props.propsHandleClick(cur)} >add</button>
                    </div>
                        )
                    )
                    :  
                    filteredProducts.map((cur) => (
                    <div className="box" >
                    <h1>{cur.name}</h1>
                    <p>Category: {cur.category}</p>
                    <p>Price: {cur.price}$</p>
                    <button onClick={() => this.props.propsHandleClick(cur)} >add</button>
                    </div>
                        )
                    )
                }
            </>
        );
    }
}

export default Product;