
const ProductList = () => {
  return ( 
    <div>
      <div className="d-inline">
        <h5>Category <small><span class="badge bg-primary">10</span></small></h5>
        
      </div>
      <div className="listItem card ">
        <div className="d-inline-flex justify-content-between">
          <img className="thumbnail rounded " src="sad.png" alt="sock image"/>
          <div className="p-3">
            <h6>Socks for the winter</h6>
            <p>USD 100</p>
          </div>
          <div className="d-flex align-items-end ">
            <div className="p-3 ">
              <button type="button" className="btn btn-outline-primary " style={{width:'70px', height:'30px',padding:'0px'}}>
                <i className="bi bi-plus"></i>
                <small>Add</small>
              </button>
              </div>
          </div>
        </div>  
    </div>
    </div>
   );
}
 
export default ProductList;