import React from 'react';
import { Switch, Route } from 'react-router-dom';

const MainArea = () => {
  return (
    <section className='mainArea'>
      <Switch>
        <Route exact path='/'>
          <h1>Dashboard</h1>
        </Route>
        <Route path='/protect-yourself'>
          <h1>Protect</h1>
        </Route>
        <Route path='/qanda'>
          <h1>QA</h1>
        </Route>
        <Route path='/myth-busters'>
          <h1>Myth</h1>
        </Route>
        <Route path='/donate'>
          <h1>Donate</h1>
        </Route>
      </Switch>
    </section>
  );
};

export default MainArea;
