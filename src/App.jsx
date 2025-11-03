import {increment,decrement,reset} from './redux/slice/counterSlice.js'
import {useSelector , useDispatch} from 'react-redux'
import {product,resetValue} from './redux/slice/multiply.js'

function App() {
  const {count} = useSelector((state) => state.countt)
  const {value} = useSelector((state) => state.multiply)
  // console.log(useSelector((state) => state.countt.value))
  const dispatch = useDispatch();
  return (
    <>
     <p>Count: {count} </p>
     <p>Value: {value}</p>
     <button onClick = {() => {dispatch(product())}}> Multiply</button>
     <button onClick = {() => {dispatch(resetValue())}}> ResetValue</button>
     <button onClick = {() => {dispatch(increment())}}> Increment</button>
     <button onClick = {() => {dispatch(decrement())}}> Decrement</button>
     <button onClick = {() => {dispatch(reset())}}> Reset</button>
    </>
  )
}
export default App

// Redux is very easy
