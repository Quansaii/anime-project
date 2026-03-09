import { useEffect, useState } from "react";

import { useHorizontalScroll } from "./assets/Scroll"
import { CustomCard } from "./Components/Card";

export function RecentSection(){

    const { scrollRef, scrollLeft, scrollRight } = useHorizontalScroll(300);
     const [recentAnime, setRecentAnime] = useState(null);
        const [isError, setIsError] = useState(false);
    
        const url = 'https://api.jikan.moe/v4/watch/episodes';
    
        useEffect(()=>{
            const getRecentAnime = async ()=>{
                try {
                    const response = await fetch(url);
    
                    if(!response.ok) throw new Error;
    
                    const data = await response.json();
    
                    setRecentAnime(data.data);
    
    
                } catch (error) {
                    setIsError(true);
                }
            }
    
            getRecentAnime();
        },[])
    return(
        <>
            <section className="recent-section" id="recent">
                <h2>Recent</h2>
                <div className="slider-wrapper">
                <button className="nav-btn prev" onClick={scrollLeft}>&#10094;</button>
                <div className="recent-container" ref={scrollRef}>
                    {recentAnime?.map(anime => (
                        anime?.region_locked === false && (
                            <CustomCard
                            key={anime?.entry?.mal_id}
                            id={anime?.entry?.mal_id}
                            imageLink={anime?.entry?.images?.jpg?.image_url}
                            title={anime?.entry?.title}
                            episode={anime?.episodes[0]?.title}
                            />
                        )
                        ))}
                </div>
                    <button className="nav-btn next" onClick={scrollRight}>&#10095;</button>
                </div>
            </section>
        </>
    )
}