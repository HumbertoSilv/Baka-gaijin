import './style.css'


const Drinks = ({products, handleClick}) => {
    const drinkList = products.filter((cur) => cur.category === "drink" )
    return(
        <>
        {
            drinkList.map((cur) => (
            <div className="box text" >
            <div className="drink-img">
                <img src={cur.img} alt={cur.name} />
            </div>
                <h1>{cur.name}</h1>
                <p>{cur.description}</p>
                <button onClick={() => handleClick(cur)} >Adicionar R$ {cur.price}</button>
            </div>
                )
            )
        }
        </>
    );
}
export default Drinks;