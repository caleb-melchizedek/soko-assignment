//  import {useState} from 'react'
 const Bag = (props) => { 
   const{bag}=props
   var total=0

  return ( 
    
      <div className="">
        <div >

          { bag.length===0?
            <div className="d-flex flex-column  justify-items-center align-items-center">
              <img src="/sad.png" alt="sad emoji" style={{width:'100px',height:'100px'}} className="p-1"/>
              <br/>
              <h6  >It's empty here</h6>
              <p className="disabled justify-self-md-center text-muted text-center">Start shopping to add Items to your bag </p>
            </div>
            :
              <div className="d-flex flex-column   align-items-between">
                {bag.map(item=>{
                  total+=item.price
                  return(
                    <div  >
                      <p style={{marginBottom:'2px'}}>{item.name} </p>
                      <small className="text-muted">Per Piece</small>
                      <p>USD{item.price}</p>
                  </div>
                  )
                  
                })}
                <hr/> 
                <div>
                  <div className="d-flex justify-content-between">
                    <small>Subtotal</small> <small>USD {total}</small>
                  </div>
                  <div className="d-flex justify-content-between">
                    <small>Delivery</small> <small><strong className="text-success">Free</strong></small>
                  </div>
                  <br/>
                  <div style={{border:'dashed 1px grey', borderWidth:'1px 0px'}}>
                    <br/>
                    <div className="d-flex justify-content-between " >
                      <div className="d-flex flex-column align-items-start">
                        <small >Total </small> 
                        <small><small className="text-muted"><i>inclusive of all taxes</i></small></small>
                      </div>
                      <small><strong className="">USD {total}</strong></small>
                    </div>
                    <br/>
                  </div>
                </div>
              </div>
          }
          
        </div>
      </div>
    );
 }
  
 export default Bag;


 