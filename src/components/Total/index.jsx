import { Component } from "react";

class Total extends Component {
    render() {
        const {propsTotal} = this.props;
        return(
            <>
            <h1>{`Subtotal - ${propsTotal} R$`}</h1>
            </>
        );
    }
}

export default Total;