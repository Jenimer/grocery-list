import React, { Component } from 'react';
import ToBuyForm from './components/ToBuyForm'//don't forget to create
import ToBuyList from './components/ToBuyList'//don't forget to create

class App extends Component {
  state = { tobuys: [] }

  componentDidMount () {

  }

  addProduct = ( name ) => {
    const { tobuys } = this.state;
    const id = Math.floor(Math.random() * 0x1000).toString()
    const tobuy = {id, name}
    this.setState({ tobuy: [...tobuys, tobuy]})

  }
  
  updateToBuy = ( id ) => {
    const tobuys = this.state.tobuys.map(t => {
      if (t.id === id)
      return {...t, done: !t.done}
      return t
    })
    this.setState({ tobuys })
  }

  deleteToBuy = ( id ) => {
    const { tobuys } = this.state;
    this.setState( { tubuys: tobuys.filter(t => t.id !==id) })
  }

  render() {
    return (
      <div className="container">
        <ToBuyForm addProduct = {this.addProduct}/>
        <ToBuyList 
          tobuys = {this.state.tobuys}
          updateToBuy={this.updateToBuy}
          deleteToBuy={this.deleteToBuy}
          products = {this.state.tobuys}
        />
      </div>
    );
  }
}

export default App;
