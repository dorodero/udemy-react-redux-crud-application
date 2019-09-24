import React, { Component} from 'react';

class App extends Component {
  render() {
    return(
      <React.Fragment>
        <label htmlFor="bat">
          bar
        </label>
        <input type="text" onChange={() => { console.log("I am Clicked.")}}></input>
      </React.Fragment>
    )
  }
}

export default App;
