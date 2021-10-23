import './style.css'

const SearchBar = ({showProducts, setSearch, search}) => {
    return(
        <div className="search">
            <button onClick={showProducts} >0</button>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar;