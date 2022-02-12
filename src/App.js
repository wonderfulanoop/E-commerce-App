import './App.css';
import ProductList from './components/Products';
import { connect } from "react-redux";
import React from 'react';
import { setUserAction } from './actions/actions';


class App extends React.Component{

  render(){
    return(
      <div>
        <ProductList />
      </div>
      )
  }
}

export default connect()(App);

