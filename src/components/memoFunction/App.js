import React, {useMemo, useState} from 'react'


// без хука useMemo, ф-ция expensiveCalculate зависит от count и от useState'а, так и получается повторное вычисление.
// export default function App() {
//   const [count, setCount] = useState(0)
//   const [renderCount, setRenderCount] = useState(1)

//   function handleClick() {
//     console.log('increment count');
//     setCount(c => c + 2)
//   }

//   function handleClickRender() {
//     console.log('render increment count');
//     setRenderCount(c => c + 1)
//   }

//   return(
//     <>
//     <div>
//       Count: {count}
//       <button onClick={handleClick}>+2</button>
//     </div>
//     <div>
//       Render count: {renderCount}
//       <button onClick={handleClickRender}>+</button>
//     </div>
//     <h2>Expensive Calculation</h2>
//       {expensiveCount(count)}
//     </>
//   )
// };


// function expensiveCount(num) {
//   for(let i = 0; i < 111666; i++){
//     console.log('expensive count');
//     num+=1
//   }
//   return num
// }


// С useMemo:
export default function App() {
  const [count, setCount] = useState(0)
  const [renderCount, setRenderCount] = useState(1)

  function handleClick() {
    console.log('increment count');
    setCount(c => c + 2)
  }

  function handleClickRender() {
    console.log('render increment count');
    setRenderCount(c => c + 1)
  }

  // useMemo hook
  const reRenderCount = useMemo(() => {
    console.log('usememo activate');
    return expensiveCount(count)
  }, [count])
  return(
    <>
    <div>
      Count: {count}
      <button onClick={handleClick}>+2</button>
    </div>
    <div>
      Render count: {renderCount}
      <button onClick={handleClickRender}>+</button>
    </div>
    <h2>Expensive Calculation</h2>
      {reRenderCount}
    </>
  )
};


function expensiveCount(num) {
  for(let i = 0; i < 111666; i++){
    console.log('expensive count');
    num+=1
  }
  return num
}