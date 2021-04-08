import Navbar from './Navbar'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import Bag from './Bag'

const Home = () => {
    return ( 
        <div>
            <Navbar/>
              <div className="p-3">
                <div className="row align-items-start">
                  <div class="col-md-3">
                  <CategoryList/>
                  </div>
                  <div class="col-md-5">
                  <ProductList/>
                  </div>
                  <div class="col-md-4">
                  <Bag/>
                  </div>
                </div>
              </div>
            
        </div>
     );
}
 
export default Home;