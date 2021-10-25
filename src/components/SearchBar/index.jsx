import './style.css'

const SearchBar = ({showProducts, setSearch, search}) => {
    return(
        <div className="search">
            <button onClick={showProducts} >?</button>
            <input
                placeholder="Pesquise aqui..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;