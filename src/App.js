import React from "react";
import { Switch, Route } from "react-router-dom";
import BookSearch from "./BookSearch";
import FullDetails from "./FullDetails";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route
          exact
          path='/book/:id'
          render={(routerProps) => (
            <FullDetails id={routerProps.match.params.id} />
          )}
        />
        <Route exact path='/' render={() => <BookSearch />} />
      </Switch>
    </div>
  );
}

export default App;
