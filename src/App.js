import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import Profile from './components/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <Profile />}
      <Counter />
    </>
  );
}

export default App;
