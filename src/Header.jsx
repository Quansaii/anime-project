import { Link, useNavigate } from "react-router";

export function Header(){
    return (
        <>
            <header>
                <div className="logo">
                    <Link to='/'><img src="https://www.amediateka.ru/static/images/logos/amediateka.svg" alt="" /></Link>
                </div>
                <div className="navigation">
                    <Link to='/new' className="new">New</Link>
                    <Link to='/top' className="top">Top</Link>
                    <Link to='/random' className="random">Random</Link>
                </div>
            </header>
        </>
    )
}