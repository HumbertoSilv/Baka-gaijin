import { useState } from 'react';
import './App.css';
import MenuContainer from './components/MenuContainer';
import Total from './components/Total';
import SearchBar from './components/SearchBar';


function App (){

	const [products, setProducts] = useState([
		{ id: 1, name: 'Temaki', description: 'salmão, atum, filadelphia, shimeji, califórnia, skin, kani, camarão, polvo', img: "https://www.matsuya.com.br/images/img3.png", price: 7.99 },
		{ id: 2, name: 'Poke', description: 'O prato havaiano que conquistou o Brasil', img: "https://www.matsuya.com.br/images/img6.png", price: 8.99 },
		{ id: 3, name: 'Djo', description: 'Salmão e Shimeji', img: "https://www.matsuya.com.br/images/img8.png", price: 10.99 },
		{ id: 4, name: 'Niguiri', description: 'salmão, atum, skin, kani, camarão, polvo', img: "https://www.matsuya.com.br/images/img4.png", price: 16.99 },
		{ id: 5, name: 'Sashimi', description: 'salmão, atum, peixe branco, polvo', img: "https://www.matsuya.com.br/images/img5.png", price: 4.99 },
		{ id: 6, name: 'Shimeji', description: 'com manteiga e cebolinha', img: "https://www.matsuya.com.br/images/img7.png", price: 4.99 },
		{ id: 7, name: 'coquinha', description: 'bebidas', img: "https://www.matsuya.com.br/images/img7.png", price: 8.99 },
	]);
	const [filteredProducts, setFilteredProducts] = useState();
	const [currentSale, setCurrentSale] = useState({total: 0, saleDetails: []});
	const [search, setSearch] = useState("");

	const showProducts = () => {
		const match = products.filter((cur) => cur.name.toLocaleLowerCase() === search);
		setFilteredProducts(...match);
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
			<header className="App-header">
				<h1 className="baka-gaijin">Baka Gaijin</h1>
         	</header>
			<main>
				<Total currentSale={currentSale}/>
				<SearchBar setSearch={setSearch} showProducts={showProducts} search={search}/>
				{
					filteredProducts ? 
						<div className="box text" >
						<div className="product-img">
							<img src={filteredProducts["img"]} alt={filteredProducts["name"]} />
						</div>
							<h1>{filteredProducts["name"]}</h1>
							<p>{filteredProducts["description"]}</p>
							<button onClick={() => handleClick(filteredProducts)} >Adicionar R$ {filteredProducts["price"]}</button>
						</div>
						:
						<div>
							<h2>Pratos</h2>
							<MenuContainer products={products} filteredProducts={filteredProducts} handleClick={handleClick}/>
							<h2>Bebidas</h2>
							<MenuContainer products={products} filteredProducts={filteredProducts} handleClick={handleClick}/>
						</div>
				}
         	</main>
			{/* <section>
				{currentSale.saleDetails.map((cur) => (
					<div className="box" >
					<h1>{cur.name}</h1>
					<p>Category: {cur.category}</p>
					<p>Price: {cur.price}$</p>
					</div>
						)
					)}
			</section> */}
		</div>
  	);
}
export default App;
