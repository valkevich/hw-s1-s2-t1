import { useState } from 'react';
import './App.css';
import Button from './Button';

const App = () => {
  const [number, setNumber] = useState(0)

  const plus = () => {
    setNumber(number + 1)
  }

  const minus = () => {
    setNumber(number - 1)
  }

  return (
    <>
      <Button label='-' onClick={minus} />
        {number}
      <Button label='+' onClick={plus} />
    </>
  )
}

export default App;