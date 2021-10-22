import "./styles.css";

const Total = ({currentSale}) => {
    return(
        <h1 className="total">{`Subtotal - ${currentSale.total} R$`}</h1>
    );
}
export default Total;