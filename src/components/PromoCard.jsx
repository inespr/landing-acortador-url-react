export function PromoCard({img, title, text}){
    return(
        <div className="card">
            <div className="card__img__container"><img className="card__img" src={img}></img></div>
            <p className="card__title">{title}</p>
            <p className="card__text">{text}</p>
        </div>
    )
}