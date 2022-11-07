import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DecrementAction, IncrementAction } from '../redux/actions/action';

export default function Counter() {
    const count = useSelector(state => state.Counter.count);
    const dispatch = useDispatch();

    const [countValue,setCountValue] = useState("")

    const HandleCounter = (e) =>
    {
      setCountValue(e.target.value);
    }
    const HandleIncrement = () =>
    {
        dispatch(IncrementAction(parseInt(countValue)));
    }
    const HandleDecrement = () =>
    {
        if(count < parseInt(countValue))
        {
          return;
        }
        else
        {
          dispatch(DecrementAction(parseInt(countValue)))
        }
    }
  return (
    <div>
        <div>
          <input type="number" onChange={(e)=>HandleCounter(e)} value={countValue}/>
          <p>{count}</p>
        </div>
        <button onClick={HandleIncrement}>Increment</button>
        <button onClick={HandleDecrement}>Decrement</button>
        <hr />
        
    </div>
  )
}
