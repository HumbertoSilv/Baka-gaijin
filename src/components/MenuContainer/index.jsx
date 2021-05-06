import { Component } from "react";
import Product from '../Product';

class MenuContainer extends Component {
    render() {
        return(
            <>
                <Product state={this.props.state} propsHandleClick={this.props.propsHandleClick}/>
            </>
        );
    }
}

export default MenuContainer;