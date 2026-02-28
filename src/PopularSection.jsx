import { useEffect, useState } from "react";
import { PopularCard } from "./PopularCard"
import { useHorizontalScroll } from "./assets/Scroll"
import { truncateText } from "./assets/TruncateText";

export function PopularSection() {
    const { scrollRef, scrollLeft, scrollRight } = useHorizontalScroll(300);

    const [popularAnime, setPopularAnime] = useState(null);
    const [isError, setIsError] = useState(false);

    const url = 'https://api.jikan.moe/v4/top/anime';

    useEffect(()=>{
        const getPopularAnime = async ()=>{
            try {
                const response = await fetch(url);

                if(!response.ok) throw new Error;

                const data = await response.json();

                setPopularAnime(data.data);


            } catch (error) {
                setIsError(true);
            }
        }

        getPopularAnime();
    },[])

    console.log(popularAnime)

    return (
        <section className="popular">
            <h2>Popular</h2>
            <div className="slider-wrapper">
                <button className="nav-btn prev" onClick={scrollLeft}>&#10094;</button>
                
                <div className="popular-container" ref={scrollRef}>
                    {popularAnime?.map(anime => 
                        <PopularCard
                            key={anime?.mal_id}
                            imageLink={anime?.images?.jpg?.image_url}
                            title={anime?.title_english}
                            synopsis={truncateText(anime?.synopsis, 40)}
                        />
                    )}
                </div>

                <button className="nav-btn next" onClick={scrollRight}>&#10095;</button>
            </div>
        </section>
    );
}