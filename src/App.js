// import logo from './logo.svg';
import "./App.css";
import React from "react";
// import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import keplerGlReducer from "kepler.gl/reducers";
// // import { enhanceReduxMiddleware } from "kepler.gl/middleware";
// import { taskMiddleware } from "react-palm/tasks";
// import { Provider } from "react-redux";
import Router from "./Router";
// import { addDataToMap } from "kepler.gl/actions";
// import useSwr from "swr";
// const initialState = {};
// const reducers = combineReducers({
//   // <-- mount kepler.gl reducer in your app
//   keplerGl: keplerGlReducer,

//   // Your other reducers here
//   // app: appReducer,
// });

// // using createStore
// const store = createStore(
//   reducers,
//   // initialState,
//   {},
//   applyMiddleware(
//     // enhanceReduxMiddleware([
//     //   /* Add other middlewares here */
//     // ])
//     taskMiddleware
//   )
// );

function App() {return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router    />
    </div>
  );
}

export default App;
