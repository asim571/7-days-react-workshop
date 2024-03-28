
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import About from './About'
import Contact from './Contact'
import SingleProduct from './pages/singleProduct/SingleProduct'
import AddProduct from './pages/addProduct/AddProduct'
import EditProduct from './pages/editProduct/EditProduct'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:id' element={<SingleProduct />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/edit/:id' element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
