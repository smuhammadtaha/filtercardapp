import './App.css';

const card = (prop) =>{
    let {title,subtitle,img,description} = prop

    return(
        <div className="Card1">
        <div className="photo"> 
        <img src={img} /> 
        </div>
        <div className="description">
          <div className="line">
            <h1 className="product_name">{title}</h1>
          </div>
          <h2>{subtitle}</h2>
          <p className="hello">{description}</p>
        </div>
      </div>
    )
}



export default card