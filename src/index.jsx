import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import styles from "./styles/styles.css";
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("react-app-root")
);
