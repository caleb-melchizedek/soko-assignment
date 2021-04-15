import Navbar from './Navbar'
import Bag from './Bag'
import {Link} from 'react-router-dom'

const BagDesktop = (props) => {
  const{bag}=props
  return ( 
    <div>
      <Navbar bagSize={bag.length}/>
      <div className="row align-items-md-middle justify-content-center ">
        <div className="col-md-6  " >
          <center>
            <Bag bag={bag}/>
            { bag.length===0?
              <Link to="/" >
                <button className="btn btn-warning  btn-md" style={{maxWidth:'250px'}} >
                  <strong className="text-primary p-4">Back to homepage</strong>
                </button>
              </Link>
              :""
            }
          </center>
        </div>
      </div>
    </div>
   );
}
 
export default BagDesktop;