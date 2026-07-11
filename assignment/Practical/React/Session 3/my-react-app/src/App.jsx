import './App.css'
import Product from './Componets/Product'
import Userprofile from './Componets/Userprofile'
import Defaultprops from './Componets/defaultprops'
import ProductCard from './Componets/ProductCard'


function App() {
  
  return (
    <>  
    <Product productName={"Wireless Mouse"} price={599} />
     <Product productName="Keyboard" price="999" />
     <Userprofile username={"Vishal"} followers={1000} profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1rcbJOICNHVkKXhbkT4Xh5VDM7LWX_t0fgmWYz4wVA&s=10"/>
      {/* <Userprofile username={"john_doe"} /> */}
      <ProductCard productName={"123"} price={5000} />

    </>
  )
}

export default App
