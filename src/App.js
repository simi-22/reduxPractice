import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const number = useSelector(state => state.number);
  const dispatch = useDispatch();
  let id = useSelector(state => state.id);
  let password = useSelector(state => state.password)
  const increase = () => {
    dispatch({type:'INCREMENT', payload:{count:5}});
  }
  const login = () => {
    dispatch({type:"LOGIN", payload:{id:"noona", password:"123"}})
  }
  const decrease = () => {
    dispatch({type:'DECREMENT'});
  }

  
  return (
    <div>
      <h4>{id},{password}</h4>
      <h4>{number}</h4>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={login}>Login</button>
      <Box />
    </div>
  );
}

export default App;
