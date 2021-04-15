import {useHistory} from 'react-router-dom'


const ProductList = (props) => {
  const {categoryName,categoryLength,categoryProducts, viewProduct,addToBag} = props
  let history=useHistory();
  return ( 
    <div>
      
      <div className="d-inline">
        <h5>{categoryName== null?"":categoryName[0].toUpperCase()+categoryName.substring(1)} 
          <small className="p-2">
            <span className="badge bg-primary" >{categoryName==null?null :categoryLength }</span>
          </small>
        </h5>
        
      </div>
      { categoryProducts.map((product)=>{
        return(
          <div className="list-Item card p-2"  >
          
            <div className="d-flex ">
              <div className="d-inline-flex  flex-grow-1" onClick={()=>{viewProduct(product.name); history.push("/viewProduct")}}>
                <img className="thumbnail rounded " src={product.images[0]} alt="sock"/>
                <div className="p-3">
                  <h6>{product.name}</h6>
                  <p className="text-muted ">${product.price}</p>
                </div>
              </div>
              <div className="d-flex align-self-end ">
                <button type="button" className="btn btn-outline-primary " style={{width:'70px', height:'30px',padding:'0px'}} onClick={()=>{addToBag(product.name)}}>
                  <i className="bi bi-plus"></i>
                  <small  >Add</small>
                </button>
              </div>
            </div>
          </div>
             
        )
        })
      }
    </div>
   );
}
 
export default ProductList;