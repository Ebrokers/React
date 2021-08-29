import React, { Component } from 'react';
import './App.css';
export class Merchants extends Component {

  state = {
    merchants: []
  };

  async componentDidMount() {
    const response = await fetch('/getAllMerchant');
    const body = await response.json();
    this.setState({merchants: body});
  }

  render() {
    const {merchants} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <div className="App-intro">
              <h2>Merchants</h2>
              {merchants.map(merchants =>
                  <div key={merchants.id}>
                    {merchants.name} ({merchants.email})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
