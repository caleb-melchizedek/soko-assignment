import {useState} from 'react'

import Navbar from './Navbar'
import CategoryList from './CategoryList'
import ProductList from './ProductList'
import Bag from './Bag'
import Footer from './Footer'


const Home = (props) => {
  const {bag, categories, products, viewProduct,addToBag} = props
  const [selectedCategory,setSelectedCategory]=useState(null)
  
  const selectedCategoryProductList= products.filter( (product) => product.category===selectedCategory )
  const selectedCategorySize = selectedCategoryProductList.length
  
  const showCategory=(category)=>{
    setSelectedCategory(category.category)
    console.log(category.category)
    console.log(selectedCategorySize)
  }
    return ( 
      <div>
        <Navbar bagSize={bag.length} />
        <div className="row justify-content-center p-2">
          <form action="/" className="d-flex align-items-center justify-content-center col-sm-4">
            <input class="form-control " type="search" placeholder="Search for products" aria-label="Search"/>
            <button class="btn btn-warning" ><strong><i className="bi bi-search text-primary"></i></strong></button>
          </form>
        </div>
        <div className="p-2">
          <div className="row align-items-md-stretch justify-content-md-center">
            <div class="col-sm-3  " style={{borderRight:'1px solid grey'}}>
            <CategoryList categories={categories} handleClick={showCategory}/>
            </div>
            <div class="col-sm-5" style={{borderRight:'1px solid grey'}} >
            <ProductList 
              categoryLength={selectedCategorySize}
              categoryProducts={selectedCategoryProductList}
              categoryName={selectedCategory}
              viewProduct={viewProduct}
              addToBag={addToBag}
            />
            </div>
            <div class="col-sm-3">
            <h5>Bag <small><span class="badge bg-primary">
              {
                bag? bag.length : '0'
              }
            </span></small></h5>
            <Bag bag={bag} />
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
}
 
export default Home;