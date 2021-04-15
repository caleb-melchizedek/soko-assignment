import {BrowserRouter, Route} from 'react-router-dom'
import {useState} from 'react'
import './App.css';


import Home from './components/Home'
import BagDesktop from './components/BagDesktop'
import Account from './components/Account'
import ProductDetails from './components/ProductDetails'


function App() {
  const [products,setProduct] =useState([
    {
      name:'Winter socks',
      price:10.00,
      category:'clothing',
      description:'beautiful socks for the winter',
      images:[
        'https://th.bing.com/th/id/OIP.FOVuL6WiopjFfzLMzQtBHwHaHa?pid=ImgDet&rs=1',
      ],
      storeName:'Wow store',
      storeLocation:'store location',
    },
    {
      name:'Winter fashion',
      price:10.00,
      category:'fashion',
      description:'beautiful socks for the winter',
      images:[
        'https://th.bing.com/th/id/OIP.FOVuL6WiopjFfzLMzQtBHwHaHa?pid=ImgDet&rs=1',
      ],
      storeName:'Wow store',
      storeLocation:'store location',
    }
  ])

  const [user, setUser] = useState([
    {
      name:null,
      Telephone:null,
      addresses:null
    }
  ])

  const[bag, setBag] = useState(
     []
  )




  const [categories, setCategories] = useState(
    [
      'clothing',
      'food',
      'stationery',
      'vehicles',
      'fashion'
    ]
  )
const [product,setViewProduct]=useState(
  {}
)

//functions
  const viewProduct=(e)=>{
    const a=products.filter( (product)=> product.name===e );
    setViewProduct(a[0])
  }

  const addToBag=(e)=>{
    console.log("adding to bag")
    const a=products.filter( (product)=> product.name===e );
    console.log(a[0])
    setBag([...bag,a[0]])
    console.log(bag)
  }


  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          {
            < Home categories={categories} bag={bag} products={products} viewProduct={viewProduct} addToBag={addToBag} />
          }
        </Route> 
        <Route path="/BagDesktop"> 
          {
            <BagDesktop bag={bag}/>
          } 
        </Route>
        <Route path="/Account" component={Account} />
        <Route path={"/viewProduct"} >
          {
            <ProductDetails product={product}/> 
          }
        </Route>      
        </BrowserRouter>
    </div>
  );
}

export default App;
