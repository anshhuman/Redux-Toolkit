import {increment,decrement,reset} from './redux/slice/counterSlice.js'
import {useSelector , useDispatch} from 'react-redux'
import {product,resetValue} from './redux/slice/multiply.js'
import { fetchProduct } from './redux/slice/productAPI.js'
import { useEffect } from 'react'

function App() {
  const {count} = useSelector((state) => state.countt)
  const {value} = useSelector((state) => state.multiply)

  const {products,loading} = useSelector((state) => state.productAPI);

  const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(fetchProduct())
    },[])

  return (
    <>

     <p>Count: {count} </p>
     <p>Value: {value}</p>
     <button onClick = {() => {dispatch(product())}}> Multiply</button>
     <button onClick = {() => {dispatch(resetValue())}}> ResetValue</button>
     <button onClick = {() => {dispatch(increment())}}> Increment</button>
     <button onClick = {() => {dispatch(decrement())}}> Decrement</button>
     <button onClick = {() => {dispatch(reset())}}> Reset</button>

      {
        loading ? <h2>Loading...</h2> : products.map((item) => (
          <div key={item.id} className='mt-10'>
            <h3>{item.title}</h3>
            <p>{item.price}</p>
            <img src={item.image} alt={item.title} width="100" height="100"/>
          </div>
        ))
      }

    </>
  )
}
export default App

// Redux is very easy
