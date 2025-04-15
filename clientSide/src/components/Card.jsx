import React from 'react'

const Card = (props) => {
    let title=props.title
    let description=props.description
    let author=props.author
    let image=props.image
    let url=props.url
    let publishedAt=props.publishedAt
  return (    
    <div>
        <div className="card" style={{width : "18rem;"}}>
        <img src={image} className="card-img-top" alt="..." style={{width:"18rem"}}/>
            <div className="card-body">
            <h3 className="card-author">{author}</h3>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p>{publishedAt.slice(0,10)}</p>
        <a href={url} className="btn btn-primary" target='_blank'>Read More</a>
            </div>
        </div>
  </div>
  )
}

export default Card