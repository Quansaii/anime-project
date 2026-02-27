export function SearchContainer(){
    return(
        <>
        <form className="search-section">
          <input 
            type="text" 
            placeholder="Enter an anime title" 
          />
          <button type="submit" className="btn-search">Find</button>
        </form>
        </>
    )
}