import React, { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hook'
import { decrement, increment, incrementByAmount, selectCount } from '../features/counter/counterSlice'

const IndexPage:FC = () => {
   const dispatch = useAppDispatch()
   const count = useAppSelector(selectCount)
   const [incrementAmount, setIncrementAmount] = useState<number>(0);

   return (
      <>
         <h1>Welcome to the greatest app in the world</h1>
         <h2>The current number is {count}</h2>
         <div>
            <input 
               type="number" 
               onChange={e=> setIncrementAmount(Number(e.target.value))}
               value={incrementAmount}
            />
            <button
               onClick={()=> dispatch(incrementByAmount(Number(incrementAmount)))}
            >

            </button>
         </div>
         <div>
            <button onClick={() => dispatch(decrement())}>Decrement by 1</button>
            <button onClick={() => dispatch(increment())}>Increment by 1</button>
         </div>
      </>
   )
}

export default IndexPage