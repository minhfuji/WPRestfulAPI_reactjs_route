import React, { Component } from 'react';
import {POST_DETAIL} from './../Apis';
import { Link } from 'react-router-dom'

class Detail extends Component {
    constructor(prop) {
        super()
        this.id = prop.match.params.id
    }

    componentDidMount() {
        const url = POST_DETAIL.replace('_id_',this.id)
        fetch(url)
          .then(response => {
            if (!response.ok) {
              throw Error("Network request failed")
            }
            return response
          })
          .then(d => d.json())
          .then(d => {
            this.setState({
              post: d
            })
          }, () => {
            this.setState({
              post: {}
            })
          })
      }

    render(){
        let post = ( this.state !== null && "post" in this.state) ? this.state.post : {};
        if( !("id" in post  )) return "Loading post...";

        let image = ( "wp:featuredmedia" in post._embedded && post._embedded['wp:featuredmedia'].length )
            ? post._embedded['wp:featuredmedia'][0].source_url : ""

        return <div className="medium-8 columns" id="main-content">
            <div className="blog-post" data-id={post.id} >
                <Link to="/" className="button back-button">Go back</Link>
                <h3>{post.title.rendered} <small>{post.date}</small></h3>
                <img className="thumbnail" src={image} alt="" />
                <div dangerouslySetInnerHTML={{__html: post.content.rendered }}></div>
                <div className="callout">
                    <ul className="menu simple">
                        <li>Author: {post._embedded.author[0].name}}</li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default Detail