import React, { Component } from 'react';
import {CAT_LIST} from './../Apis';

class Sidebar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        fetch(CAT_LIST)
        .then(response => {
            if (!response.ok) {
            throw Error("Network request failed")
            }
            return response
        })
        .then(d => d.json())
        .then(d => {
            this.setState({
                categories: d 
            })
        }, () => {
            this.setState({
                categories: [] 
            })
        })
    }

    render(){
       return <div className="medium-3 columns" data-sticky-container>
       <div className="sticky" data-sticky data-anchor="content">
           <h4>Categories</h4>
           <div id="categories"></div>
           {
               this.state.categories.map( cat => <div className="category" key={cat.id}>{cat.name}</div> )
           }
       </div>
   </div>
    }
}

export default Sidebar