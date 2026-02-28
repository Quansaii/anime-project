import { RandomCard } from "./RandomCard"
import { useHorizontalScroll } from "./assets/Scroll"
import { useEffect, useState } from "react";

export function RandomSection(){
    const { scrollRef, scrollLeft, scrollRight } = useHorizontalScroll(300);
    const [popularAnime, setPopularAnime] = useState(null);
        const [isError, setIsError] = useState(false);
    
        const url = 'https://api.jikan.moe/v4/top/anime';
    
        useEffect(()=>{
            const getRandomAnime = async ()=>{
                try {
                    const response = await fetch(url);
    
                    if(!response.ok) throw new Error;
    
                    const data = await response.json();
    
                    setPopularAnime(data.data);
    
    
                } catch (error) {
                    setIsError(true);
                }
            }
    
            getRandomAnime();
        },[])
    return(
        <>
            <section className="random-section">
                <h2>Random</h2>
                <div className="slider-wrapper">
                <button className="nav-btn prev" onClick={scrollLeft}>&#10094;</button>
                <div className="random-container" ref={scrollRef}>
                    
                </div>
                    <button className="nav-btn next" onClick={scrollRight}>&#10095;</button>
                </div>
            </section>
        </>
    )
}