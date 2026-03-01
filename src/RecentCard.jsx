import { Link } from "react-router";

export function RecentCard({imageLink, title, episode}){
    return(
        <>
            <Link to='/detailes' className="card" style={{ '--bg-image': `url(${imageLink})` }}>
                <div className="card-content">
                    <h4 className="title">{title}</h4>
                    <p className="synopsis">{episode}</p>
                </div>
          </Link>
        </>
    )
}