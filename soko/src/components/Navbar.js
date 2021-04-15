import {Link} from 'react-router-dom';

const Navbar = (props) => {
  const {bagSize}=props
    return ( 
        
            
        <nav className="">
        <div className="container align-items-center">
          <div className="d-inline-flex align-items-center">
            <div className="avatar">
              <i className="bi bi-shop text-muted"></i>
            </div>
            <div>
              <h4>Shopname</h4>
              <p>location</p>
            </div>
          </div>
          <div className="float-end">
            <div className="d-inline-flex align-items-center">
              
              <Link className="nav-link text-dark d-flex" to="/BagDesktop">
                <i className="bi bi-bag p-1 "></i>
                { bagSize==0? null: <span className="badge rounded-pill bg-danger align-self-start " style={{fontSize:'0.6em'}}>{bagSize}</span>}
                <div className="p-1">Bag</div>
              </Link>
              
            </div> 
            <div className="d-inline-flex align-items-center">
              
              <Link className="nav-link text-dark" to="/Account"><i className="bi bi-person p-2"></i>Account</Link>
            </div> 
          </div>
        </div>
      </nav>
















                //  <div className="avatar ">
                //     <i className="bi bi-shop"></i>   
                // </div>

                    // {/* <div className="shopName">Shop name</div>
                    // <p>Location</p> */}
      
                    // {/* <i className="bi bi-shop"></i>   
                    // <a href="#">Bag</a> */}
            

     );
}
 
export default Navbar;