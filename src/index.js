import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { applyMiddleware, createStore } from "redux";
import currentReducer from "./Reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const store = createStore(currentReducer, applyMiddleware(thunk));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
