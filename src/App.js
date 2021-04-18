import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Feed from './Components/Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './Components/Login';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) :
        <div className='app__body'>
          {/* Sidebar */ }
          <Sidebar />

          {/* Feed */ }
          <Feed />
          {/* Widgets */ }
        </div> }
    </div>
  );
}


export default App;
