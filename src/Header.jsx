import { Link, useNavigate } from "react-router";

export function Header(){
    return (
        <>
            <header>
                <div className="logo">
                    <Link to='/'><img src="https://www.amediateka.ru/static/images/logos/amediateka.svg" alt="" /></Link>
                </div>
                <div className="navigation">
                    <a href="#popular" className="popular">Popular</a>
                    <a href="#recent" className="recent">Recent</a>
                    <a href="#random" className="random">Random</a>
                </div>
            </header>
        </>
    )
}