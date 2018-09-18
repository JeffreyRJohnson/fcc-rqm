import * as React from 'react';
import RandomQuoteMachine from './components/RandomQuoteMachine/RandomQuoteMachine';
import './scss/App.css';

interface IState {
  changeValues: object;
}

class App extends React.Component {
  public state: IState = {
    changeValues: {}
  };

  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        <RandomQuoteMachine />
      </div>
    );
  }
}

export default App;
