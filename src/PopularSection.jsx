import { PopularCard } from "./PopularCard"

export function PopularSection(){
    return(
        <>
            <section className="popular">
                <h2>Popular</h2>
                <div className="popular-container">
                    <PopularCard/>
                    <PopularCard/>
                    <PopularCard/>
                    <PopularCard/>
                </div>
            </section>
        </>
    )
}