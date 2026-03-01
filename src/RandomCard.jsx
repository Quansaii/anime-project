import { Link } from "react-router";

export function RandomCard({imageLink, title, synopsis}){
    return(
        <>
            <Link to='/detailes' className="card" style={{ '--bg-image': `url(${imageLink})` }}>
                <div className="card-content">
                    <h4 className="title">{title}</h4>
                    <p className="synopsis">{synopsis}</p>
                </div>
          </Link>
        </>
    )
}