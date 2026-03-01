import { RandomCard } from "./RandomCard";
import { useHorizontalScroll } from "./assets/Scroll";
import { useEffect, useState } from "react";
import { truncateText } from "./assets/TruncateText";


function RandomCardSkeleton() {
    return (
        <div className="card is-loading">
            <div className="card-content">
                <div className="skeleton skeleton-title"></div>
                <div className="skeleton skeleton-text"></div>
                <div className="skeleton skeleton-text short"></div>
            </div>
        </div>
    );
}

export function RandomSection() {
    const { scrollRef } = useHorizontalScroll(300);
    const [randomAnime, setRandomAnime] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [count, setCount] = useState(0);

    const url = 'https://api.jikan.moe/v4/random/anime';

    useEffect(() => {
        const getRandomAnime = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                await new Promise(resolve => setTimeout(resolve, 1100));
                const response = await fetch(url);
                if (!response.ok) throw new Error();
                const data = await response.json();
                setRandomAnime(data.data);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };
        getRandomAnime();
    }, [count]);

    const updateRandomAnime = () => {
        setCount(prev => prev + 1);
    };

    return (
        <section className="random-section" id="random">
            <h2>Random</h2>
            <div className="random-container" ref={scrollRef}>
                {isLoading ? (
                    <RandomCardSkeleton />
                ) : isError ? (
                    <div className="error-message">Error loading data</div>
                ) : (
                    randomAnime && (
                        <RandomCard
                            key={randomAnime.mal_id}
                            title={randomAnime.title_english || randomAnime.title}
                            imageLink={randomAnime.images?.jpg?.image_url}
                            synopsis={truncateText(randomAnime.synopsis || '', 40)}
                        />
                    )
                )}
                <button 
                    className={`reset-btn ${isLoading ? 'loading' : ''}`} 
                    onClick={updateRandomAnime} 
                    disabled={isLoading}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="orange" d="M7.207 2.543a1 1 0 0 1 0 1.414L5.414 5.75h7.836a8 8 0 1 1-8 8a1 1 0 1 1 2 0a6 6 0 1 0 6-6H5.414l1.793 1.793a1 1 0 0 1-1.414 1.414l-3.5-3.5a1 1 0 0 1 0-1.414l3.5-3.5a1 1 0 0 1 1.414 0" />
                    </svg>
                </button>
            </div>
        </section>
    );
}