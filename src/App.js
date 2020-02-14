import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

  handleOnClick() {
    this.props.increaseCount()
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
const mapStateToProps = (state) => {
  return {items: state.items}
}

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCount: () => dispatch({type: 'INCREASE_COUNT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//The above lines code - the connect function - returns a component that is 
// just like my coded component - the differences being that this new component
// is now capable of recieving the props I define in the first argument function definition. 