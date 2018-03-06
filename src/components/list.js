import React, { Component } from 'react';
import {POST_LIST} from './../Apis';
import Listitem from './listitem';


class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts:[]
        }
    }

    componentDidMount() {
      fetch(POST_LIST)
        .then(response => {
          if (!response.ok) {
            throw Error("Network request failed")
          }
          return response
        })
        .then(d => d.json())
        .then(d => {
          this.setState({
            posts: d
          })
        }, () => {
          this.setState({
            posts: []
          })
        })
    }

    render(){
        
        return <div className="medium-8 columns" id="main-content">
        {
            this.state.posts.map( post=> <Listitem data={post} key={post.id} /> )
        }
        </div>
    }
}

export default List