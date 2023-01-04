import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const TeoriaRedux = lazy(() => import('./views/TeoriaRedux'));
const Counter = lazy(() => import('./views/Counter'));
const ShoppingCart = lazy(() => import('./views/ShoppingCart'));
const CrudAPI = lazy(() => import('./views/CrudAPI'));

function App() {
  return (
    <Provider store={store}>
      <h1>REDUX</h1>
      <BrowserRouter>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<TeoriaRedux />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
            <Route path="/crud-api" element={<CrudAPI />} />
            <Route path="*" element={<p>Page not found</p>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
