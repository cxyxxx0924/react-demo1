import logo from './logo.svg';
import './App.css';
import LifeCyclepage from './page/LifeCyclepage';

function App() {
  const name = 'react study'
  const jsx = <div>hello,{name} </div>
  const user = {
    firstName: 'Bmw',
    lastName: 'Mock'
  }
  function formatName(name) {
    return name.firstName + ' ' + name.lastName
  }
  const show = true

  return (
    <div className="App">
      {name}
      {jsx}
      {formatName(user)}
      <p>{show ? name : "login"}</p>
      <p>{show && name}</p>
      <LifeCyclepage />
    </div>
  );
}

export default App;
