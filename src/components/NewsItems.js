import React, { Component } from 'react'

export default class NewsItems extends Component {
  render() {
   let {title,description,imageUrl,newsUrl,time,author}=this.props;
    return (
      <div className= "container my-3 " style={{color:"black"}}>
       <div className="card ">
       
  <img className="card-img-top" src={imageUrl} alt=".." />
  <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
  {this.props.source}
    
  </span>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <p className="card-text"><small className='text-danger'>By {author} on {new Date(time).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark bigho">Read More</a>
  </div>
</div>
      </div>
    )
  }
}
