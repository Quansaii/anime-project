import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router"

export function DetailsPage(){
    const location = useLocation();
    const id = location.state;
    const [anime, setAnime] = useState(null);
    const [isError, setIsError] = useState(null);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
            const url = `https://api.jikan.moe/v4/anime/${id}`;
            const response = await fetch(url);

            if(!response.ok) throw new Error;

            const data = await response.json();

            setAnime(data?.data);
            }
            catch{
                setIsError(true);
            }
        }

        fetchData();
    },[])

    return(
        <>
            <header className="details-page-header">
                <Link to="/" className="back-to-home-page-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                        <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292" />
                    </svg>
                    <p>Back to home page</p>
                </Link>
            </header>

            <main>
                <div className="image">
                    <img src={anime?.images?.jpg?.large_image_url} alt="anime" />
                </div>
                <div className="info">
                    <div className="detailed-title">{anime?.titles[0].title}</div>
                    <div className="rating">{anime?.rating}</div>
                    <div className="detailed-synopsis">{anime?.synopsis}</div>
                    <div className="status">{anime?.status}</div>
                    <div className="genres">
                        {anime?.genres.map(genre => {
                            <span>{genre.name}</span>
                        })}
                    </div>
                    <div className="links">
                        <a href={anime?.url}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/MyAnimeList_favicon.svg/250px-MyAnimeList_favicon.svg.png" alt="" /></a>
                        <a href={anime?.trailer?.embed_url || ''}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/960px-YouTube_full-color_icon_%282017%29.svg.png" alt="" /></a>
                    </div>
                </div>
            </main>
        </>
    )
}