import { Route, Switch, Redirect } from 'react-router-dom';

import MainHeader from './components/MainHeader';
import Welcome from './page/Welcome';
import Products from './page/Products';
import ProductDetails from './page/ProductDetails';

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/welcome'></Redirect>
          </Route>
          <Route path='/welcome'>
            <Welcome />
          </Route>
          <Route path='/products' exact>
            <Products />
          </Route>
          <Route path='/products/:id'>
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
