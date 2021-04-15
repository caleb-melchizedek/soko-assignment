
import Navbar from './Navbar'

const ProductDetails = (props) => {
  const {product} = props
  return ( 
    <div >
      <Navbar bagSize/>
      <div className="d-inline">
        <h5>Category <small><span className="badge bg-primary" >10</span></small></h5>
      </div>
      <div className=" productCard card ">
        <div className="d-inline-flex justify-content-between">
          <img className="thumbnailBig rounded " src="https://th.bing.com/th/id/OIP.FOVuL6WiopjFfzLMzQtBHwHaHa?pid=ImgDet&rs=1" alt="sock image"/>
          <div className="p-3">
            <h6>{product.name}</h6>
            <p className="text-muted">{product.description}</p>
            <p className="text-muted lead">USD {product.price}</p>
          </div>
          <div className="d-flex align-items-end ">
            <div className="p-3 ">
              <button type="button" className="btn btn-outline-primary " style={{width:'120px', height:'40px',padding:'0px'}}>
                <i className="bi bi-plus"></i>
                <small>Add</small>
              </button>
              <button className="btn btn-warning" style={{width:'120px', height:'40px',padding:'0px'}}><a href="#" className="nav-link">Buy Now</a></button>
              </div>
          </div>
        </div>  
    </div>


    </div>
   );
}
 
export default ProductDetails;