import { useState } from 'react';
import './App.css';
import MenuContainer from './components/MenuContainer';
import Total from './components/Total';
import SearchBar from './components/SearchBar';
import Drinks from './components/Drinks';


function App (){

	const [products, setProducts] = useState([
		{ id: 1, name: 'Temaki', category: "food", description: 'Salmão, atum, filadelphia, shimeji, califórnia, skin, kani, camarão, polvo', img: "https://www.matsuya.com.br/images/img3.png", price: 37.99 },
		{ id: 2, name: 'Poke', category: "food", description: 'O prato havaiano que conquistou o Brasil', img: "https://www.matsuya.com.br/images/img6.png", price: 28.99 },
		{ id: 3, name: 'Djo', category: "food", description: 'Salmão e Shimeji', img: "https://www.matsuya.com.br/images/img8.png", price: 10.99 },
		{ id: 4, name: 'Niguiri', category: "food", description: 'Salmão, atum, skin, kani, camarão, polvo', img: "https://www.matsuya.com.br/images/img4.png", price: 16.99 },
		{ id: 5, name: 'Sashimi', category: "food", description: 'Salmão, atum, peixe branco, polvo', img: "https://www.matsuya.com.br/images/img5.png", price: 24.99 },
		{ id: 6, name: 'Shimeji', category: "food", description: 'Com manteiga e cebolinha', img: "https://www.matsuya.com.br/images/img7.png", price: 14.99 },
		{ id: 7, name: 'Sake e Gin', category: "drink", description: 'Sake e Gin 350ml', img: "https://s2.glbimg.com/rFBQxZHkc062K2rD2spgE0tadDI=/smart/e.glbimg.com/og/ed/f/original/2020/09/30/garden_colling_por_fabio_la_pietra_-_foto_leo_feltran.jpeg", price: 8.99 },
		{ id: 8, name: 'Awamori', category: "drink", description: 'Copo 370ml', img: "https://savvytokyo.scdn3.secure.raxcdn.com/app/uploads/2018/02/%E7%94%BB%E5%83%8F%EF%BC%91-1024x683.jpg", price: 18.99 },
		{ id: 9, name: 'Shochu', category: "drink", description: 'Copo 370ml', img: "https://www.japanesefoodguide.com/wp-content/uploads/2021/05/japanese-shochu-1024x683.jpg.webp", price: 12.49 },
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
							<MenuContainer category="food" products={products} handleClick={handleClick}/>
							<h2>Bebidas</h2>
							<MenuContainer category="drink" products={products} handleClick={handleClick}/>
						</div>
				}
         	</main>
			<footer>
				<div className="contact">
					<p>@BakaGaijin</p>
					<p>(11) 3227-3451</p>
				</div>
				<hr/>
				<div className="copry">Copyright © 2021 Baka Gaijin </div>
			</footer>
		</div>
  	);
}
export default App;
