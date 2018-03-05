import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Top from './components/topTitle';
import Topdesc from './components/topDesc';
import List from './components/list';
import Detail from './components/detail';
import Sidebar from './components/sidebar';
import {SITE_INFO} from './Apis';

class App extends Component {

  constructor(props) {
    super(props)
    this.route = this.route.bind(this)
    this.state = {
      data: [],
      action: "",
      fetching:true
    }
  }

  route(action){
    this.setState(action)
  }

  componentDidMount() {
    fetch(SITE_INFO)
      .then(response => {
        if (!response.ok) {
          throw Error("Network request failed")
        }
        return response
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          data: d,
          fetching: false
        })
      }, () => {
        this.setState({
          data: [],
          fetching:true
        })
      })
  }

  render() {
    return (
      <div className="App">
        <Top data={this.state.data} />
        <Topdesc data={this.state.data} />
        {
          this.state.action === "detail" ? <Detail id={this.state.id} key={this.state.id} /> :  <List act={this.route} />
        }
        <Sidebar/>
      </div>
    );
  }
}

export default App;
