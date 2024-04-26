import React from 'react'

const NewsItem =(props)=> {


    let {title,description, imgurl,newsUrl,date,author}=props;
    return (
      <div>
       <div className="card "  style={{width:"18rem" }}>
   <img src={!imgurl?"https://www.northampton.ac.uk/wp-content/uploads/2018/11/default-svp_news.jpg":imgurl} className="card-img-top " alt="..." style={{height:'10rem'}}/>
  <div className="card-body ">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text text-dangrer"><small className="text-body-secondary">By : {author} updated on {new Date(date).toUTCString()} </small></p>
    <a href={newsUrl} target='_blank' rel='noreferrer'className="btn btn-sm btn-dark">Read More...</a>
  </div>
</div>
      </div>
    )
  
}

export default NewsItem
