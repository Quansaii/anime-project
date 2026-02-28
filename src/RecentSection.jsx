import { RecentCard } from "./RecentCard";
import { useHorizontalScroll } from "./assets/Scroll"

export function RecentSection(){

    const { scrollRef, scrollLeft, scrollRight } = useHorizontalScroll(300);

    return(
        <>
            <section className="recent">
                <h2>Recent</h2>
                <div className="slider-wrapper">
                <button className="nav-btn prev" onClick={scrollLeft}>&#10094;</button>
                <div className="recent-container" ref={scrollRef}>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>
                    <RecentCard/>

                </div>
                    <button className="nav-btn next" onClick={scrollRight}>&#10095;</button>
                </div>
            </section>
        </>
    )
}