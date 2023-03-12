



function Card (props){
    return(
        <div className="card">
        <div className="flex">
            <img className="img" src={props.item.imageURL} alt={props.item.title} />
            <div className="card-info">
            <h3><strong>{props.item.location.toUpperCase()}</strong> <a href={props.item.googleMapsUrl} target="_blank" rel="noreferrer">View on google Maps</a></h3>
            <h1>{props.item.title}</h1>
            <h4>{props.item.startDate} - {props.item.endDate}</h4>
            <p>{props.item.description}</p>
            </div>
        </div>
        <hr />
        </div>
       
    ) 

}

export default Card;