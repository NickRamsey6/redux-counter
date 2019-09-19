import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, login} from './actions';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(login())}>Log in</button>
      <h1>Counter {counter}</h1>
      <p>{isLogged}</p>
      <button onClick={()=> dispatch(increment(5))}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>

      {isLogged ? <h3>Valuable info</h3> : ''}

    </div>
  );
}

export default App;
