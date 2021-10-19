import { useState } from 'react';
import './App.css';
import MenuContainer from './components/MenuContainer';
import Total from './components/Total';
import SearchBar from './components/SearchBar';


function App (){

	const [products, setProducts] = useState([
		{ id: 1, name: 'Hamburguer', category: 'Sanduíches', price: 7.99 },
		{ id: 2, name: 'X-Burguer', category: 'Sanduíches', price: 8.99 },
		{ id: 3, name: 'X-Salada', category: 'Sanduíches', price: 10.99 },
		{ id: 4, name: 'Big Kenzie', category: 'Sanduíches', price: 16.99 },
		{ id: 5, name: 'Guaraná', category: 'Bebidas', price: 4.99 },
		{ id: 6, name: 'Coca-cola', category: 'Bebidas', price: 4.99 },
		{ id: 7, name: 'Fanta', category: 'Bebidas', price: 4.99 },
	]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [currentSale, setCurrentSale] = useState({total: 0, saleDetails: []});
	const [search, setSearch] = useState("");

	const showProducts = () => {
		const match = products.filter((cur) => cur.name.toLocaleLowerCase() === search);
		setFilteredProducts([...filteredProducts, ...match]);
	}

	const handleClick = (productId) => {
	    const check = currentSale.saleDetails.some((cur) => {
	      return cur.id === productId.id});
	      check? alert("Esse produto já está em sua lista!")
	        :  
		  setCurrentSale({total : currentSale.total + productId.price, saleDetails:[...currentSale.saleDetails, productId]} );
	}

	return(
		<div className="App">

			<SearchBar setSearch={setSearch} showProducts={showProducts} search={search}/>
			<header className="App-header">
           		<MenuContainer products={products} filteredProducts={filteredProducts} handleClick={handleClick}/>
         	</header>
			<Total currentSale={currentSale}/>

			<main>
				{currentSale.saleDetails.map((cur) => (
				<div className="box" >
				<h1>{cur.name}</h1>
				<p>Category: {cur.category}</p>
				<p>Price: {cur.price}$</p>
				</div>
					)
				)}
         	</main>

		</div>
  	);
}
export default App;
