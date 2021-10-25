import "./styles.css";

const Total = ({currentSale}) => {
    return(
        <h1 className="total">{`Subtotal : ${currentSale.total.toFixed(2)} R$`}</h1>
    );
}
export default Total;