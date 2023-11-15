import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from './Redux/counterSlice';

function Counter() {
  //state to hold the value
  const[ range, setRange] = useState("")
  //hook to dispatch a function in action
  const dispatch = useDispatch()
  //component can access the state by using useSelector Hook
  const count = useSelector((state)=>state.counter.value)

  //range
  console.log(range);

  return (
 <>
      <div className=' d-flex align-items-center justify-content-center mt-5 flex-column'>
          <h1 style={{fontSize:"100px"}}>{count}</h1>
          <div className=' container flex-coloumn d-flex mt-5 p-4'>
                  <Button onClick={()=>dispatch(decrement(Number(range)))} color='secondary' variant="contained" className=''>Decrement</Button>
                  <Button onClick={()=>dispatch(reset())} color='error' variant="outlined" className='me-2 ms-2 '>Reset</Button>
                  <Button onClick={()=>dispatch(increment(Number(range)))} color='success' variant="contained" className=' '>Increment</Button>
     
          </div>
          
  
      </div>

      {/* input box */}

      <div>
          <input onChange={(e)=>setRange(e.target.value)} type="text" className='form-control  mt-3' placeholder='Enter a range'  style={{width:"320px" ,borderColor:"blue"}}/>
        </div>

 </>
  )
}

export default Counter