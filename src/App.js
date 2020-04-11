import React from 'react';
import ReactGA from 'react-ga';
import Search from './components/Search';
import Dashboard from './components/Dashboard';
import Loading from './components/Loading';
import { Context } from './Context';
import './App.scss';

function initializeReactGA() {
  ReactGA.initialize('UA-162098697-1');
  ReactGA.pageview('/homepage');
}

const App = () => {
  initializeReactGA();
  const { loading } = React.useContext(Context);
  return loading ? (
    <Loading />
  ) : (
    <main className='main'>
      <Search />
      <Dashboard />
    </main>
  );
};

export default App;
