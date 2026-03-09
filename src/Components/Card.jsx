import { Link } from "react-router";

export function CustomCard({ id, imageLink, title, synopsis}) {
  return (
    <Link 
      to='/details' 
      className="card" 
      style={{ '--bg-image': `url(${imageLink})` }} 
      state={id}
    >
      <div className="card-content">
        <h4 className="title">{title}</h4>
        {synopsis && <p className="synopsis">{synopsis}</p>}
      </div>
    </Link>
  );
}