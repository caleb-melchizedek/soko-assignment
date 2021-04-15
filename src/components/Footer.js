const Footer = () => {
  return ( 
    <footer>
      <div className="ribbon d-flex flex-row align-items-center justify-content-around">
            <div className=" d-flex flex-column" >
              <center>
                <i className="bi bi-truck p-4"></i>
                <p>Fast Delivery</p>
              </center>
            </div>
            <div>
              <center>
              <i className="bi bi-award-fill p-4"></i>
                <p>Buyer Protection</p>
              </center>
            </div>
            <div>
              <center>              
                <i className="bi bi-arrow-counterclockwise "></i>
                <p>Customer Support</p>
              </center>
            </div>
      </div>
      <div className="d-flex flex-column align-items-center p-4">
        <p  className="text-muted" style={{fontSize:'0.8em'}} >STORE DETAILS</p>
        <h5><strong>Shopname</strong></h5>
        <p  className="text-muted" style={{fontSize:'0.9em', fontWeight:'500'}} >Store Location</p>
        <button className="btn  btn-sm" style={{backgroundColor:'rgb(50,205,50)', color:'white'}} >
        <i className="bi bi-whatsapp p-1"></i> Chat with us
        </button>
      </div>
    </footer>
   );
}
 
export default Footer;