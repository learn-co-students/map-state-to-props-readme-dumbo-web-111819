import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';

class App extends Component {


//dispatch is automatically provided
//by connect if it is missing a second argument.
//That second argument is reserved
//for mapDispatchToProps,
//which allows us to customize
//how we send actions to our reducer.
//Without the second argument we will still be able to use dispatch
//on any component wrapped with connect.


  handleOnClick() {
    this.props.dispatch({
      type: 'INCREASE_COUNT',
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.items.length}</p>
      </div>
    );
  }
};

const mapStateToProps=(state)=>{
  return{
    items: state.items
  }
}


export default connect(mapStateToProps)(App);
