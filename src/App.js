import './App.css';
import { Counter } from './Counter/Counter';

function App () {
  return (
    <div className='App'>
      <Counter initialNumber={0} />
    </div>
  );
}

export default App;
