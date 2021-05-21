import React, { useContext } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Sidebar from "./Sidebar";
// import Dashboard from "./components/pages/Dashboard";
import Map from "./Map";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import keplerGlReducer from "kepler.gl/reducers";
// import { enhanceReduxMiddleware } from "kepler.gl/middleware";
import { taskMiddleware } from "react-palm/tasks";
import Polygon from "./Polygon";
import Point from "./Point"


const initialState = {};
const reducers = combineReducers({
  // <-- mount kepler.gl reducer in your app
  keplerGl: keplerGlReducer,

  // Your other reducers here
  // app: appReducer,
});

// using createStore
const store = createStore(
  reducers,
  // initialState,
  {},
  applyMiddleware(
    // enhanceReduxMiddleware([
    //   /* Add other middlewares here */
    // ])
    taskMiddleware
  )
);

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Sidebar />
          <Route
            path="/heatmap"
             render={() => <Redirect from="/" to="/heatmap" />}
          >
            <Provider store={store}>
              <Map />
            </Provider>
          </Route>
          <Route path="/polygon">
            <Provider store={store}>
              <Polygon />
            </Provider>
          </Route>
          <Route path="/point">
            <Provider store={store}>
              <Point />
            </Provider>
          </Route>
          <Route path="/">
            <Provider store={store}>
              <Map />
            </Provider>
          </Route>
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
