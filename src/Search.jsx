import { useEffect, useState } from "react"
import { Link } from "react-router";

export function SearchContainer(){

  const [recommendedAnime, setRecommendedAnime] = useState(null);
  const [query, setQuery] = useState(null);
  const [isError, setIsError] = useState(null);

  const update = (value)=>{
    if(!value.lenght < 2) setQuery(value);
  }

  useEffect(()=>{

    const fetchData = async ()=>{
      try{
        const url = `https://api.jikan.moe/v4/anime?q=${query}&limit=5&order_by_popularity`;
        const response = await fetch(url);

        if(!response.ok) throw new Error;

        const data = await response.json();

        setRecommendedAnime(data?.data);
      }

      catch(error){
        setIsError(true);
        return(
          <>
            <p>Произошла ошибка</p>
          </>
        )
      }
    }

    const timer = setTimeout(() => {
      if (query) {
        fetchData();
      }
    }, 800);

    return () => clearTimeout(timer);
    
  }
  ,[query])


    return(
        <>
        <form className="search-section">
          <div className="search">
            <input 
            type="text" 
            placeholder="Enter an anime title" 
            onChange={(e) => update(e.target.value)}
            />
            <ul className="recommended">
              {recommendedAnime?.map(anime => (
                <li key={anime?.mal_id}>
                <Link to='/details' state={anime?.mal_id}>
                  <img src={anime?.images?.jpg?.image_url} alt="" /> 
                  <span>{anime?.titles[0]?.title}</span>
                </Link>
              </li>
              ))}
            </ul>
          </div>
          <button type="submit" className="btn-search">Find</button>
        </form>
        </>
    )
}