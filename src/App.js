import logo from './logo.svg';
import './App.css';
import { Student } from './Student';
import { Login } from './Login';
import { Home } from './Home';
import PureComp from './PureComp';
import Test2 from './Test2';
function App() {
  return (
    <div className="App">
      <Home/>
      <Login/>
     <Student/>
     {/* <Test2/> */}
     </div>
  );
}

export default App;
