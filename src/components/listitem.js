import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Listitem extends Component {

    render(){
        let post = this.props.data
        let image = ( "wp:featuredmedia" in post._embedded && post._embedded['wp:featuredmedia'].length )
            ? post._embedded['wp:featuredmedia'][0].source_url : ""

        return <div className="blog-post" data-id={ post.id } >
            <Link to={ "/detail/"+post.id } >
                <h3 className="title" >{post.title.rendered} <small>{post.date}</small></h3>
            </Link>
            <img className="thumbnail" src={image} alt="" />
            <div className="callout">
                <ul className="menu simple">
                    <li>Author: { post._embedded.author[0].name}</li>
                </ul>
            </div>
        </div>
    }
}

export default Listitem