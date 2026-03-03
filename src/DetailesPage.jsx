import { Link } from "react-router"

export function DetailesPage(){
    return(
        <>
            <header className="detailes-page-header">
                <Link to="/" className="back-to-home-page-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
                        <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M244 400L100 256l144-144M120 256h292" />
                    </svg>
                    <p>Back to home page</p>
                </Link>
            </header>

            <main>
                <div className="image">
                    <img src="https://myanimelist.net/images/anime/1752/150192l.jpg" alt="anime" />
                </div>
                <div className="info">
                    <div className="title">Fate/strange Fake</div>
                    <div className="rating">R - 17+ (violence & profanity)</div>
                    <div className="synopsis">A new Holy Grail War is emerging in Snowfield, Nevada, where mages from around the world summon Servants, heroic spirits drawn from myth and history, to fight on their behalf. However, this war seems to differ from previous ones. The organization behind it appears to have used data from the Fuyuki Grail War for their ritual, resulting in strange happenings. \n\nUnbeknownst to most participants, this budding conflict is actually a fake Grail War. There exists another set of seven true Servants who are summoned to fight in the genuine Holy Grail War. One of these Servants is a powerful Saber-class who saves the life of Ayaka Sajou, his apparent master, after being summoned. \n\nWith hidden agendas and unpredictable forces at play, the line between the fake and true Grail War becomes unclear, turning Snowfield into a dangerous battlefield.</div>
                    <div className="status">Currently Airing</div>
                    <div className="genres">
                        <span>Action</span>
                        <span>Fantasy</span>
                    </div>
                    <div className="links">
                        <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/MyAnimeList_favicon.svg/250px-MyAnimeList_favicon.svg.png" alt="" /></a>
                        <a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/960px-YouTube_full-color_icon_%282017%29.svg.png" alt="" /></a>
                    </div>
                </div>
            </main>
        </>
    )
}