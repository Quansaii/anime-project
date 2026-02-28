export function PopularCard({imageLink, title, synopsis}){
    console.log(imageLink)
    return(
        <>
            <div className="card" style={{ '--bg-image': `url(${imageLink})` }}>                <div className="card-content">
                    <h4 className="title">{title}</h4>
                    <p className="synopsis">{synopsis}</p>
                </div>
          </div>
        </>
    )
}