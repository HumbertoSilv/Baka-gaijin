import './style.css'

const SearchBar = ({showProducts, setSearch, search}) => {
    return(
        <div className="search">
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={showProducts} >Search</button>
        </div>
    )
}

export default SearchBar;