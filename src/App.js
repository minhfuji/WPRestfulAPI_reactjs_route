import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Top from './components/topTitle';
import Topdesc from './components/topDesc';
import List from './components/list';
import Detail from './components/detail';
import Sidebar from './components/sidebar';
import {SITE_INFO} from './Apis';
import { BrowserRouter as Router, Route  } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      fetching:true
    }
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
      <Router>
      <div className="App">
        <Top data={this.state.data} />
        <Topdesc data={this.state.data} />
            <Route exact path="/" component={List} />
            <Route path="/detail/:id" component={Detail} /> 
        <Sidebar/>
      </div>
      </Router>
    );
  }
}

export default App;
